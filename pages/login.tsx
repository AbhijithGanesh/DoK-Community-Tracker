import { useState } from "react";
import { supabase } from "../utils/supabase";
import Layout from "./Layout";
import { sign_in_wrapper } from "../utils/auth";
import { NextRouter, useRouter } from "next/router";
import { Auth as SupaAuth } from "@supabase/ui";

let MagicLink = (): JSX.Element => {
  const [email, setEmail] = useState("");
  return (
    <>
      <section className="text-white text-2xl">
        <form>
          <input
            className="bg-gray-300 text-black font-regular text-2xl w-auto rounded-lg px-2 mx-4 justify center"
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
  const [magic, setMagic] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const Router: NextRouter = useRouter();
  const [process, setProcess] = useState(false);
  const [loggedIn, setLoggedIn] = useState(supabase.auth.user() ? true : false);

  if (!loggedIn) {
    return (
      <Layout
        element={
          <>
            <section className="flex flex-auto py-8 px-2 text-center text-white text-4xl font-extrabold hover:italic">
              Login
            </section>

            {!magic ? (
              <>
                {" "}
                <SupaAuth
                  supabaseClient={supabase}
                  providers={["google", "github", "gitlab"]}
                  socialLayout="vertical"
                  socialButtonSize="medium"
                  magicLink={true}
                  socialColors={false}
                  className="font-extrabold hover:text-white"
                />
              </>
            ) : (
              <>
                <MagicLink />
                <button
                  className="my-8 ml-4 text-white px-2 bg-green-700 rounded-md font-semibold text-lg hover:translate-y-2"
                  onClick={() => {
                    setMagic(!magic);
                  }}
                >
                  Normal Login!
                </button>
              </>
            )}
          </>
        }
      />
    );
  } else {
    Router.push(`/profiles/${supabase.auth.user()?.id}`);
  }
};

export default Auth;
