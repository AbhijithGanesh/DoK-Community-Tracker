import * as React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import { supabase } from "../../../utils/supabase";
import Layout from "../../Layout";

let Profile = (): JSX.Element => {
  const Router = useRouter();
  const { profile } = Router.query;
  const [username, setusername] = useState(profile);
  const [loading, setloading] = useState(false);

  return (
    <Layout
      element={
        <>
          <section className="py-8 text-white font-extrabold text-2xl">
            Hello {username}
          </section>
          <button
            className="px-2 py-1 text-black font-regular text-xl rounded-md bg-white hover:bg-emerald-400 hover:font-bold hover:text-black hover:text-xl"
            onClick={async () => {
              await supabase.auth.signOut();
              Router.push("/login");
            }}
          >
            Log Out
          </button>
        </>
      }
    />
  );
};

export default Profile;
