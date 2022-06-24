import * as React from "react";
import { useState } from "react";
import { supabase } from "../utils/supabase";
import Layout from "./Layout";

type challenge_data = {
  name: string;
  description: string;
  tags: Array<string>;
  points: number,
};

type Props = {
  title: any;
  description: string;
  Tags?: Array<string>;
  points: number;
};

type Tag = {
  item: string;
};

const Tag_Element = ({ item }: Tag): JSX.Element => {
  return <section className="text-white font-regular text-lg">#{item}</section>;
};

const Card = ({ title, description, Tags, points }: Props): JSX.Element => {
  return (

    <>
      <section className="h-0.5 w-auto bg-white mt-4"/>
      <section className="text-white py-2 px-4 text-2xl font-bold">
        {title}
      </section>
      <section className="px-4 font-semibold text-xl text-white">
        {description}
      </section>
      <section className="flex flex-auto px-4 gap-4">
        {Tags?.map((tag): JSX.Element => {
          return <Tag_Element key={tag} item={tag} />;
        })}
      </section>
      <section className="px-6 py-2 text-white font-light hover:italic">
        {points} xp for this challenge.
      </section>
      <section className="h-0.5 w-auto bg-white mb-4"/>
    </>
  );
};

let Challenges = () => {
  const [data, setData] = useState(Array<challenge_data>);
  const [loaded, setLoad] = useState(false);
  let fetch_data = async () => {
    const fetched = await supabase
      .from("Challenges")
      .select("title, description, due_date, tags, xp-points");
    let array_data = [];
    for (let i = 0; i < fetched.body?.length!; i++) {
      array_data.push({
        name: fetched?.body![i].title,
        description: fetched?.body![i].description,
        tags: fetched?.body![i].tags,
        points: fetched?.body![i]["xp-points"]

      });
    }
    setData(array_data);
    console.log(array_data)
  };

  if (!loaded) {
    fetch_data();
    setLoad(true);
  }

  return (
    <Layout
      element={
        <>
          <section className="py-8 text-white font-extrabold text-3xl">
            List of Challenges!
          </section>
          {data.map((i): JSX.Element => {
            return (<><Card
              title={i?.name}
              description={i?.description}
              Tags={i?.tags}
              points={i?.points}
            /></>)
          })}

        </>
      }
    />
  );
};

export default Challenges;