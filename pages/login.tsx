import { useState } from "react";
import { supabase } from "../utils/supabase";
import Layout from "./Layout";
import { sign_in_wrapper } from "../utils/auth";
import { NextRouter, useRouter } from "next/router";
import ThirdPartyAuth from "../components/auth/third-party";
import EmailAddr from "../components/auth/signin";

let MagicLink = (): JSX.Element => {
  const [email, setEmail] = useState("");
  return (
    <>
      <section className="text-white text-2xl">
        <form>
          <input
            className="bg-gray-300 text-black font-bold text-2xl w-auto rounded-lg px-2 mx-4 justify center"
            type="email"
            name="email"
            placeholder="Your Email"
            autoComplete="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            className="bg-gray-700 text-white font-bold text-xl rounded-lg mx-2 p-2"
            onClick={(e) => {
              sign_in_wrapper(email);
              e.preventDefault();
            }}
          >
            Click Here!
          </button>
        </form>
      </section>
    </>
  );
};

let Auth = (): JSX.Element | any => {
  const Router: NextRouter = useRouter();
  const [loggedIn, setLoggedIn] = useState(supabase.auth.user() ? true : false);

  if (!loggedIn) {
    return (
      <Layout
        element={
          <>
            <section className="flex flex-auto py-8 px-2 text-center text-white text-4xl font-extrabold hover:italic">
              Login
            </section>
            <EmailAddr />
            <ThirdPartyAuth />
          </>
        }
      />
    );
  } else {
    Router.push(`/profiles/${supabase.auth.user()?.id}`);
    return (
      <>
        <section className="bg-black"></section>
      </>
    );
  }
};

export default Auth;
