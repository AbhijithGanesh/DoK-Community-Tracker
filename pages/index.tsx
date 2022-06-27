import * as React from "react";
import Layout from "./Layout";
import Navbar from "../components/navbar/navbar";
import Main from "../components/content/main";
import About from "../components/content/about";
import Challenges from "../components/content/challenges";
import { DropDownMenu, MenuItem } from "../components/navbar/dropdown";
import { useEffect, useState } from "react";
import { FiLogIn } from "react-icons/fi";
import { MdLeaderboard, MdAddTask, MdSearch } from "react-icons/md";
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
            <Navbar
              element={
                <>
                  <DropDownMenu
                    items={
                      <>
                        <MenuItem
                          icon={<FiLogIn />}
                          link="/login"
                          text="Login/SignUp"
                        />
                        <MenuItem
                          icon={<MdLeaderboard />}
                          link="/leaderboard"
                          text="Leaderboard"
                        />
                        <MenuItem
                          icon={<MdAddTask />}
                          link="/challenges"
                          text="Challenges"
                        />
                        <MenuItem
                          icon={<MdSearch className="text-xl"/>}
                          link="/app"
                          text="Search for explorers"
                        />
                      </>
                    }
                  />
                </>
              }
            />
            <Main />
            <About />
            <Challenges />
          </>
        }
      />
    );
  } else {
    Router.push(`/profiles/access/${supabase.auth.user()?.id}`);
  }
}
