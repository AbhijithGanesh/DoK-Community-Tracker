import { useState } from "react";
import Layout from "../Layout";
import { supabase } from "../../utils/supabase";
import { FiUserPlus } from "react-icons/fi";
import { MdSend } from "react-icons/md";
import {
  check_boolean_username,
  default_user_create,
  profile_established_boolean,
  postUsername,
} from "../../utils/username";
import { useRouter } from "next/router";

let CreateProfile = (): JSX.Element => {
  const [input, setInput] = useState("");
  const Router = useRouter();
  return (
    <Layout
      element={
        <>
          <section className="text-white pt-8 font-bold text-2xl">
            Hello User!
          </section>
          <section className="py-2 text-slate-200 italic font-regular text-xl translate-x-4">
            You need to register before continuing
          </section>
          <section className="mt-4 h-0.5 w-full bg-slate-200" />
          <form>
            <section className="flex flex-auto items-center my-5 bg-white text-black font-semibold rounded-md">
              <FiUserPlus className="m-2 text-2xl flex-none" />
              <input
                type="username"
                placeholder="Enter your username"
                className="py-2 h-8 px-2 mx-2 w-full flex-grow"
                onChange={(e) => setInput(e.target.value)}
              />
              <button
                onClick={async (e) => {
                  e.preventDefault();
                  let res = await postUsername(
                    input,
                    supabase.auth.user()?.id!
                  );
                  Router.push("/profiles/data-on-kubernetes");
                }}
              >
                <MdSend className="text-2xl m-2 hover:rounded-full hover:p-1 hover:bg-slate-600 hover:text-white" />
              </button>
            </section>
          </form>
        </>
      }
    />
  );
};

let ProfileMethod = (): JSX.Element | void => {
  const [usernameExists, setUsernameExists] = useState(true);
  const [profileCreate, setProfileCreate] = useState(false);
  const Router = useRouter();

  let topLevelAsync = async () => {
    let condition = await check_boolean_username(supabase.auth.user()?.id!);
    let _profileCreate = await profile_established_boolean(
      supabase.auth.user()?.id!
    );
    setProfileCreate(_profileCreate!);
    setUsernameExists(condition);
  };

  topLevelAsync();

  if (!usernameExists) {
    default_user_create(supabase.auth.user()?.id!);
  }

  if (!profileCreate) {
    return <CreateProfile />;
  } else {
    Router.push("/");
  }
};

export default ProfileMethod;
