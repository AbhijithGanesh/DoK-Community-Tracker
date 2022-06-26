import * as React from "react";
import { useState, useEffect } from "react";
import { sign_up_wrapper } from "../utils/auth";
import Layout from "./Layout";

const SignUp = (): JSX.Element => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  return (
    <Layout
      element={
        <>
          <section className="py-8 text-white text-2xl font-extrabold">
            Sign up for a <i>new account </i>
          </section>
          <form>
            <input
              className="bg-gray-300 text-black font-semibold text-2xl w-auto rounded-lg px-2 mx-4 justify center my-2"
              type="email"
              name="email"
              placeholder="Your Email"
              autoComplete="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="bg-gray-300 text-black font-semibold text-2xl w-auto rounded-lg px-2 mx-4 justify center"
              type="password"
              name="password"
              value={password}
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <button
              className="bg-rose-900 text-white font-bold text-xl rounded-lg p-2 my-2 mx-4"
              onClick={(e) => {
                sign_up_wrapper(email, password);
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
