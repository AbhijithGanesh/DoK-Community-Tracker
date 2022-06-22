import { useState, useEffect } from "react";
import { supabase } from "../utils/supabase";
import Signout from "./components/auth/signout";
import Auth from "./components/auth/login";
import Navbar from "./components/navbar/navbar";

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
      <section className="lg:col-start-3 lg:col-span-9 md:col-start-2 md:col-span-2 sm:col-start-1">
        <Navbar />
      </section>
    </section>
  );
}
