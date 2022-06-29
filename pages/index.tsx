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
import { check_login } from "../utils/auth";
import resolve_username from "../utils/resolveUsername";
import { default_user_create } from "../utils/username";

export default function Home() {
  let null_username: string = "";
  const Router: NextRouter = useRouter();
  const [session, setSession] = useState({});
  const [loading, setLoading] = useState(false);
  const [redirect, setRedirect] = useState(check_login());
  const [username, setUsername] = useState(null_username);

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
    resolve_username(supabase.auth.user()?.id!).then((res) => {
      if (res.body[0].username == supabase.auth.user()?.id!) {
        Router.push("/profiles/createProfile");
      } else {
        Router.push(`/profiles/access/${res.body[0].username}`);
      }
    });
  }
}
