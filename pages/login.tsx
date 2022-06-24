import { useState } from "react";
import { supabase } from "../utils/supabase";
import Layout from "./Layout";

let sign_in_wrapper = async (email: string, password?: string) => {
  const { user, session, error } = await supabase.auth.signIn({
    email: email,
    password: password,
  });
  return { user, session, error };
};

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

let LogOut = (): JSX.Element => {
  return (
    <>
      <button
        className="bg-gray-700 m-4 p-2 text-md text-white font-bold rounded-lg"
        onClick={async (e) => {
          await supabase.auth.signOut();
          console.log("Logged Out");
        }}
      >
        Log out!
      </button>
    </>
  );
};

let Auth = (): JSX.Element => {
  const [magic, setMagic] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const [process, setProcess] = useState(false);
  const [loggedIn, setLoggedIn] = useState(
    supabase.auth.session() ? true : false
  );

  if (!loggedIn) {
    console.log(supabase.auth.session());
    return (
      <Layout
        element={
          <>
            <section className="flex flex-auto px-2 py-2 text-center text-white text-4xl font-extrabold hover:italic">
              Login
            </section>
            <section className="pl-4 py-4 text-white font-semibold text-lg">
              {!magic ? (
                <section>To access Magic Link</section>
              ) : (
                <section>To access standard login page</section>
              )}
              <button
                className="text-white px-2 bg-gray-700 rounded-lg"
                onClick={() => {
                  setMagic(!magic);
                }}
              >
                Click Here!
              </button>
            </section>
            {!magic ? (
              <>
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
                  <input
                    className="bg-gray-300 text-black font-regular text-2xl w-auto rounded-lg px-2 mx-4 justify center"
                    type="password"
                    name="password"
                    value={password}
                    placeholder="Enter your password"
                    onChange={(e) => setPassword(e.target.value)}
                  ></input>
                  <button
                    className="bg-gray-700 text-white font-bold text-xl rounded-lg m-2 py-1 px-2"
                    onClick={async (e) => {
                      setLoggedIn(true);
                      setProcess(true);
                      await sign_in_wrapper(email, password);
                      setProcess(false);
                    }}
                    disabled={process}
                  >
                    Login
                  </button>
                </form>
              </>
            ) : (
              <MagicLink />
            )}
          </>
        }
      />
    );
  } else {
    return (
      <Layout
        element={
          <section className="py-8 text-white font-extrabold text-3xl">
            You have already logged in! <br />
            <>
              <button
                className="bg-gray-700 m-4 p-2 text-md text-white font-bold rounded-lg"
                onClick={async (e) => {
                  await supabase.auth.signOut();
                  setLoggedIn(false);
                  console.log("Logged Out");
                }}
              >
                Log out!
              </button>
            </>
          </section>
        }
      />
    );
  }
};

export default Auth;
