import * as React from "react";
import { useState } from "react";
import Layout from "../../pages/Layout";
import { FaLock } from "react-icons/fa";
import { sign_in_wrapper } from "../../utils/auth";
import { useRouter } from "next/router";

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
        <button className=" text-white text-lg font-bold rounded-md lg:py-1 p-1 sm:text-md bg-slate-500">
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
          <button
            className="text-white hover:underline bg-rose-600 rounded-md p-1 mx-1"
            onClick={() => {
              setMagic(!magicLink);
            }}
          >
            Login with Magic Link!
          </button>
          <section className="flex flex-1 justify-end">
            <section className="bg-slate-500 flex rounded-lg hover:translate-y-0.5">
              <FaLock className="text-white text-xl my-4 mx-2" />
              <button
                className=" text-white text-lg font-bold rounded-md lg:py-1 p-1 sm:text-md"
                onClick={() => {
                  sign_in_wrapper(email, password);
                  router.push("/")
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
