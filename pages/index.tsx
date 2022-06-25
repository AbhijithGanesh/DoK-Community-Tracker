import * as React from "react";
import Layout from "./Layout";
import Navbar from "../components/navbar/navbar";
import Main from "../components/content/main";
import About from "../components/content/about";
import Challenges from "../components/content/challenges";
import { useEffect, useState } from "react";
import { supabase } from "../utils/supabase";
import { NextRouter, useRouter } from "next/router";

export default function Home() {
  const Router: NextRouter = useRouter();
  const [session, setSession] = useState({});
  const [redirect, setRedirect] = useState(false);
  useEffect(() => {
    if (sessionStorage.getItem("Session")) {
      setSession(sessionStorage.getItem("Session")!);
    }
  }, []);

  let logIn = async () => {
    let data = await supabase.auth.user();
    if (data) {
      setRedirect(true);
    }
  };
  logIn();

  if (!redirect) {
    return (
      <Layout
        element={
          <>
            <Navbar />
            <Main />
            <About />
            <Challenges />
          </>
        }
      />
    );
  } else {
    Router.push(`/profiles/${supabase.auth.user()?.id}`);
  }
}
