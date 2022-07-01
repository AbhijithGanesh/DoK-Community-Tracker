import { useRouter } from "next/router";
import * as React from "react";
import { useState, useEffect } from "react";
import { sign_up_wrapper } from "../utils/auth";
import Layout from "./Layout";

const SignUp = (): JSX.Element => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter();
  return (
    <Layout
      element={
        <>
          <section className="py-8 text-white text-2xl font-extrabold">
            Sign up for a <i>new account </i>
          </section>
          <form>
            <input
              className="bg-gray-300 text-black font-regular text-xl w-auto rounded-md px-2 mx-4 justify center my-2"
              type="email"
              name="email"
              placeholder="Your Email"
              autoComplete="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="bg-gray-300 text-black font-regular text-xl w-auto rounded-md px-2 mx-4 justify center"
              type="password"
              name="password"
              value={password}
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <button
              className="bg-white text-black font-semibold text-lg rounded-lg px-2 py-1"
              onClick={(e) => {
                sign_up_wrapper(email, password);
                router.push("/login")
                e.preventDefault();
              }}
            >
              Signup
            </button>
          </form>
        </>
      }
    />
  );
};

export default SignUp;
