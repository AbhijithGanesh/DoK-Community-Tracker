import { useState, useEffect } from "react";
import { supabase } from "../utils/supabase";
import Signout from "./components/auth/signout";
import Auth from "./components/auth/login";
import Navbar from "./components/navbar/navbar";
import Main from "./components/content/main";
import About from "./components/content/about";
import Challenges from "./components/content/challenges";

export default function Home() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    setSession(supabase.auth.session());
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <section className="px-2 grid lg:grid-cols-12 md:grid-cols-6 sm: grid-cols-1">
      <section className="lg:col-start-3 lg:col-span-8 md:col-start-1 md:col-span-full sm:col-start-1">
        <Navbar />
        <Main />
        <About />
        <Challenges />
      </section>
    </section>
  );
}
