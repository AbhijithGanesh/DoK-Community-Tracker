import * as React from "react";
import { useState } from "react";
import { Router, useRouter } from "next/router";
import { supabase } from "../../utils/supabase";
import Layout from "../Layout";

type fetch_type = {
  username:string,
  userid: string
}

let Profile = (): JSX.Element => {
  
  const Router = useRouter();
  const { profile } = Router.query;
  const [data, setData] = useState(Array<fetch_type>);
  const [loading, setloading] = useState(false);

  let fetch_data = async (context: string | string[]): Promise<void> => {
    let data = await supabase.from("Users").select(`username, userid`);
    setData(data.data!);
  };

  if (loading == false) {
    fetch_data(profile!);
    for (let i = 0; i < data.length; i++) {
      if (data[i].userid == profile) {
        setData([data[i]]);
      }
    }
    setloading(true);
  }

  return (
    <Layout
      element={ 
        <>
        <section className="py-8 text-white font-extrabold text-2xl">
          Hello {data[0]?.username}
        </section>
        <button className="bg-gray-700 p-2 text-white font-bold text-xl rounded-lg" onClick={async() => {
            await supabase.auth.signOut()
            Router.push("/login")
        }}>
          Log Out
        </button>
        </>
      }
    />
  );
};

export default Profile;
