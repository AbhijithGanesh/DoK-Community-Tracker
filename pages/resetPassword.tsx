import { NextRouter, useRouter } from "next/router";
import { useState } from "react";
import { supabase } from "../utils/supabase";
import Layout from "./Layout";

const ForgetPassword = (): JSX.Element => {
  const [email, setEmail] = useState("");
  const router: NextRouter = useRouter();
  return (
    <Layout
      element={
        <>
          <section className="pt-8 pb-4 text-white text-2xl font-extrabold">Reset your password!</section>
          <section className="h-1 w-full bg-slate-500"/>
          <input
            className="mt-12 mb-2 bg-white text-black flex flex-auto justify-start place-content-center rounded-md w-full py-1 px-2 m-1"
            type="email"
            name="email"
            placeholder="Your Email"
            autoComplete="username"
            onChange={(e) => setEmail(e.target.value)}
          />

          <section className="flex flex-1 justify-evenly">
            <button
              className="text-white hover:underline bg-green-600 rounded-md p-2 text-bold"
              onClick={() => {
                router.push("/login");
              }}
            >
              Login with credentials
            </button>
            <button
              className=" text-black text-lg font-medium rounded-md lg:p-1 sm:text-md bg-white"
              onClick={async () => {
                console.log(email);
                await supabase.auth.api.resetPasswordForEmail(email);
              }}
            >
              Send Link
            </button>
          </section>
        </>
      }
    />
  );
};
export default ForgetPassword;
