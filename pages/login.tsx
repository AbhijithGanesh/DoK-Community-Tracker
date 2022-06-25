import { useState } from "react";
import { supabase } from "../utils/supabase";
import Layout from "./Layout";
import { sign_in_wrapper } from "../utils/auth";
import { FiGitlab } from "react-icons/fi";
import { FaGithubAlt, FaGoogle, FaMagic } from "react-icons/fa";
import { NextRouter, useRouter } from "next/router";

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

let GoogleAuth = (): JSX.Element => {
  return (
    <>
      <section className="mx-2 px-2 py-2 flex bg-gray-700 text-white font-semibold rounded-md text-lg hover:-translate-y-2">
        <button
          onClick={async (e) => {
            const { user, session, error } = await supabase.auth.signIn({
              provider: "google",
            });
          }}
        >
          Google
        </button>
        <FaGoogle className="mx-2 my-auto text-2xl" />
      </section>
    </>
  );
};

let GitLabAuth = (): JSX.Element => {
  return (
    <>
      <section className="mx-2 py-2 px-2 flex justify-between w-min bg-gray-700 text-white font-semibold rounded-md text-lg hover:-translate-y-2">
        <button
          onClick={async (e) => {
            const { user, session, error } = await supabase.auth.signIn({
              provider: "gitlab",
            });
          }}
        >
          GitLab
        </button>
        <FiGitlab className="my-auto mx-2 text-2xl" />
      </section>
    </>
  );
};

let GithubAuth = (): JSX.Element => {
  return (
    <>
      <section className="mx-2 px-2 py-2 flex justify-between w-min bg-gray-700 text-white font-semibold rounded-md text-lg hover:-translate-y-2">
        <button
          onClick={async (e) => {
            const { user, session, error } = await supabase.auth.signIn({
              provider: "github",
            });
          }}
        >
          GitHub
        </button>
        <FaGithubAlt className="my-auto mx-2 text-2xl" />
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
                <form>
                  <input
                    className="bg-gray-300 text-black font-regular text-2xl w-auto rounded-lg my-4 px-2 mx-4 justify center"
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    autoComplete="username"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    className="bg-gray-300 text-black font-regular text-2xl w-auto rounded-lg my-4 px-2 mx-4 justify center"
                    type="password"
                    name="password"
                    value={password}
                    placeholder="Enter your password"
                    onChange={(e) => setPassword(e.target.value)}
                  ></input>
                  <button
                    className="bg-gray-700 text-white font-bold text-xl rounded-lg m-2 py-1 px-2"
                    onClick={async (e) => {
                      e.preventDefault();
                      setProcess(true);
                      await sign_in_wrapper(email, password);
                      if (supabase.auth.user()) {
                        Router.push(`/profiles/${supabase.auth.user()?.id}`);
                        setLoggedIn(true);
                      }
                      setProcess(false);
                    }}
                    disabled={process}
                  >
                    Login
                  </button>
                </form>
                <section className="pl-4 py-4 flex flex-wrap gap-4 text-white font-semibold text-lg">
                  <section className="text-white px-2 flex justify-between bg-gray-700 rounded-md font-regular text-lg hover:-translate-y-2">
                    <button
                      onClick={() => {
                        setMagic(!magic);
                      }}
                    >
                      Magic Link
                    </button>
                    <FaMagic className="mx-2 my-auto text-xl" />
                  </section>

                  <GoogleAuth />
                  <GithubAuth />
                  <GitLabAuth />
                </section>
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
