import * as React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import resolve_username from "../../utils/resolveUsername";
import { supabase } from "../../utils/supabase";

const MagicLink = (): JSX.Element => {
  const [email, setEmail] = useState("");
  return (
    <>
      <input
        className="bg-white text-black flex flex-auto justify-start place-content-center rounded-md w-full py-1 px-2 m-1"
        type="email"
        name="email"
        placeholder="Your Email"
        autoComplete="username"
        onChange={(e) => setEmail(e.target.value)}
      />
      <section className="flex flex-1 justify-end">
        <button
          className=" text-black text-lg font-medium rounded-md lg:p-1 sm:text-md bg-white"
          onClick={async () => {
            await supabase.auth.signIn({ email: email });
          }}
        >
          Send Link
        </button>
      </section>
    </>
  );
};

const EmailAddr = (): JSX.Element => {
  const [magicLink, setMagic] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  if (!magicLink) {
    return (
      <>
        <section className="bg-white  w-full h-0.5 my-4" />
        <section className="pt-1 font-semibold text-black">
          <input
            className="bg-white text-black flex flex-auto justify-start place-content-center rounded-md w-full py-1 px-2 m-1"
            type="email"
            name="email"
            placeholder="Your Email"
            autoComplete="username"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="bg-white text-black flex flex-auto justify-start place-content-center rounded-md w-full py-1 px-2 m-1"
            type="password"
            name="password"
            placeholder="Your password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <section className="flex flex-auto justify-evenly">
            <button
              className="text-black font-semibold hover:underline bg-white rounded-md p-1 mx-1 my-2"
              onClick={() => {
                setMagic(!magicLink);
              }}
            >
              Login with Magic Link!
            </button>
            <button
              className="text-black font-semibold hover:underline bg-white rounded-md p-1 mx-1 my-2"
              onClick={() => {
                router.push("/signup");
              }}
            >
              Register an account!
            </button>
            <button
              className="text-black font-semibold hover:underline bg-white rounded-md p-1 mx-1 my-2"
              onClick={() => {
                router.push("/resetPassword");
              }}
            >
              Reset password
            </button>
          </section>
          <section className="flex flex-1 justify-end">
            <section className="bg-white flex rounded-lg my-2 hover:translate-y-0.5">
              <button
                className=" text-black text-lg font-regular rounded-md lg:py-1 p-1 mx-2 sm:text-md"
                onClick={async (e) => {
                  e.preventDefault();
                  await supabase.auth.signIn({ email, password });
                  let username = await resolve_username();
                  router.push(`/profiles/access/${username.body[0].username}`);
                }}
              >
                Login
              </button>
            </section>
          </section>
        </section>

        <section className="text-gray-200 lg:py-2 lg:text-xl md:text-lg sm:py-2 sm:text-lg">
          Alternatively
        </section>
        <section className="bg-white w-full h-0.5 mb-8" />
      </>
    );
  } else {
    return (
      <>
        <section className="bg-white  w-full h-0.5 my-4" />
        <MagicLink />{" "}
        <button
          className="text-white hover:underline bg-green-600 rounded-md p-2 text-bold"
          onClick={() => {
            setMagic(!magicLink);
          }}
        >
          Login with credentials
        </button>
        <section className="bg-white w-full h-0.5 my-4" />
      </>
    );
  }
};

export default EmailAddr;
