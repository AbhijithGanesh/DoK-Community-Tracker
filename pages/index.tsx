import { NextRouter, useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FiLogIn } from "react-icons/fi";
import { MdAddTask, MdLeaderboard, MdSearch } from "react-icons/md";
import About from "../components/content/about";
import Challenges from "../components/content/challenges";
import Main from "../components/content/main";
import { DropDownMenu, MenuItem } from "../components/navbar/dropdown";
import Navbar from "../components/navbar/navbar";
import { check_login } from "../utils/auth";
import resolve_username from "../utils/resolveUsername";
import { supabase } from "../utils/supabase";
import { default_user_create } from "../utils/username";
import Layout from "./Layout";

export default function Home() {
  const Router: NextRouter = useRouter();
  const [session, setSession] = useState({});
  const [redirect, setRedirect] = useState(check_login());

  useEffect(() => {
    if (sessionStorage.getItem("Session")) {
      setSession(sessionStorage.getItem("Session")!);
    }
  }, []);

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
                          icon={<MdSearch className="text-xl" />}
                          link="/search"
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
    resolve_username(supabase.auth.user()?.id!).then((res) => {
      if (res.body[0]?.username == supabase.auth.user()?.id!) {
        Router.push("/profiles/createProfile");
      } else if (res.data.length == 0) {
        default_user_create(
          supabase.auth.user()?.id!,
          supabase.auth.user()?.id!
        );
        Router.push("/profiles/createProfile");
      } else if (res.body[0]?.username) {
        Router.push(`/profiles/access/${res.body[0]?.username}`);
      } else {
      }
    });
  }
}
