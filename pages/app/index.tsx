import * as React from "react";
import Router from "next/router";
import { useState, useEffect } from "react";
import Layout from "../Layout";
import { supabase } from "../../utils/supabase";

const Playground = (): JSX.Element => {
  return (
    <Layout
      element={
        <>
          <section className="py-8 text-white font-extrabold text-3xl">
            Welcome to the Playground.
          </section>
        </>
      }
    />
  );
};

const Handler = (): JSX.Element | any => {
  const [loggedIn, setLoggedIn] = useState(supabase.auth.session() ? true : false);

  if (!loggedIn) {
    return <Playground />;
  } else {
    setLoggedIn(!loggedIn);
    useEffect(() => {
      window.location.replace("/login");
    }, []);
  }
};

export default Handler;
