import { useState } from "react";
import Layout from "../Layout";
import { supabase } from "../../utils/supabase";
import { FiUserPlus } from "react-icons/fi";
import { MdSend } from "react-icons/md";
import defaultCreate from "../../utils/defaultcreate";

let ProfileMethod = (): JSX.Element => {
  const [Loading, setLoading] = useState(false);
  const [username, setusername] = useState("");
  const [input, setInput] = useState("");
  const [profile, setProfile] = useState({});

  const [exists, setExists] = useState(false);

  let get_user_name = async (userid: string): Promise<void> => {
    let condition = await fetch(
      `http://localhost:3000/api/profiles/by_username`,
      {
        method: "PUT",
        body: JSON.stringify({ userid: userid }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    let data = await condition.json();
    if (data[0].username! != null) {
      setExists(true);
      setusername(data[0].username);
    } else {
      setExists(false);
    }
  };

  get_user_name(supabase.auth.user()?.id!);
  if (!exists) {
    defaultCreate("User");
  }

  let setUsername = async (userid: string, username: string): Promise<void> => {
    let condition = await fetch(
      `http://localhost:3000/api/profiles/by_username`,
      {
        method: "POST",
        body: JSON.stringify({ userid: userid, username: username }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    const data = await condition.json();
    if (data != null) {
      setusername(data[0].username);
    } else {
      setusername("");
    }
  };

  let returnCondition = async (username: string): Promise<void> => {
    let condition = await fetch(
      `http://localhost:3000/api/profiles/established`,
      {
        method: "PUT",
        body: JSON.stringify({ userid: username }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    const data = await condition.json();
    if (data != null) {
      setProfile(data[0].profile_created);
    } else {
      setProfile(false);
    }
  };

  let CreateProfile = (): JSX.Element => {
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
                  onClick={() => {
                    console.log(["Inserted succesfully", input]);
                  }}
                >
                  <MdSend className="text-2xl m-2 hover:rounded-full hover:p-1 hover:bg-green-600 hover:text-white" />
                </button>
              </section>
            </form>
          </>
        }
      />
    );
  };
  return <CreateProfile />;
};

export default ProfileMethod;
