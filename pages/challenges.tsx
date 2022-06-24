import * as React from "react";
import { useState } from "react";
import { supabase } from "../utils/supabase";
import Image from "next/image";
import Layout from "./Layout";

type challenge_data = {
  name: string;
  description: string;
  tags: Array<string>;
  points: number;
};

type Props = {
  title: any;
  description: string;
  Tags?: Array<string>;
  points: number;
  thumbnail: string;
  href: string;
};

type Tag = {
  item: string;
};

const Tag_Element = ({ item }: Tag): JSX.Element => {
  return <section className="text-white font-regular text-lg">#{item}</section>;
};

const Card = ({
  title,
  description,
  Tags,
  points,
  thumbnail,
  href,
}: Props): JSX.Element => {
  return (
    <>
      <section className="border-2 border-bg-white my-6 rounded-2xl hover:transform-cpu hover:-translate-y-4 flex flex-auto justify-between">
        <section>
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
          <section className="px-6 py-2 text-white font-light hover:italic text-lg">
            {points} xp for this challenge. --&gt Easter egg, click on the
            thumbnail.
          </section>
        </section>
        <section className="p-4 lg:block md:hidden sm:hidden hover:-translate-x-4">
          <a href={href} target="__blank">
            <Image
              src={thumbnail}
              alt="Thumbnail"
              layout="intrinsic"
              width={"250px"}
              height={"150px"}
            />
          </a>
        </section>
      </section>
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
        points: fetched?.body![i]["xp-points"],
      });
    }
    setData(array_data);
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
            return (
              <>
                <Card
                  title={i?.name}
                  description={i?.description}
                  Tags={i?.tags}
                  points={i?.points}
                  thumbnail="data:image/png;base64,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"
                  href={"https://www.youtube.com/c/DoKcommunity/videos"}
                />
              </>
            );
          })}
        </>
      }
    />
  );
};
