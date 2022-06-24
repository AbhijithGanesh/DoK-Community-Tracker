import * as React from "react";
import Layout from "./Layout";
import Navbar from "../components/navbar/navbar";
import Main from "../components/content/main";
import About from "../components/content/about";
import Challenges from "../components/content/challenges";
import { useEffect, useState } from "react";

export default function Home() {
  const [session, setSession] = useState({});

  useEffect(() => {
    if (sessionStorage.getItem("Session")) {
      setSession(sessionStorage.getItem("Session")!);
    }
  }, []);

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
}
