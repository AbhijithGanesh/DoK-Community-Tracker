import Layout from "../../Layout";
import Navbar from "../../../components/navbar/navbar";
import { useRouter } from "next/router";
import { useState } from "react";
import { supabase } from "../../../utils/supabase";
import { DropDownMenu, MenuItem } from "../../../components/navbar/dropdown";
import { BsFillQuestionDiamondFill } from "react-icons/bs";
import { MdLeaderboard, MdLogout } from "react-icons/md";
import { GiSandsOfTime } from "react-icons/gi";
import { Menu } from "@headlessui/react";
import { check_login } from "../../../utils/auth";
import RouterEffect from "../../../utils/routerUtil";
import { FaUserTie } from "react-icons/fa";
import PostReport from "../../../utils/postReport";

let SubmitChallenge = (): JSX.Element => {
  const router = useRouter();
  const [Title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [Submit, setSubmit] = useState(false);

  if (check_login()) {
    return (
      <Layout
        element={
          <>
            <Navbar
              element={
                <DropDownMenu
                  items={
                    <>
                      <MenuItem
                        icon={<BsFillQuestionDiamondFill />}
                        link={"/challenges"}
                        text={"View Challenges"}
                      />
                      <MenuItem
                        icon={<GiSandsOfTime />}
                        link={"/profiles/access/submitted-reports"}
                        text={"Your Reports"}
                      />
                      <MenuItem
                        icon={<FaUserTie />}
                        link="/"
                        text={"My Profile"}
                      />
                      <MenuItem
                        icon={<MdLeaderboard />}
                        link={"/leaderboard"}
                        text={"View Leaderboard"}
                      />
                      <Menu>
                        <Menu.Item>
                          <button
                            className="flex flex-auto gap-2 text-black bg-white hover:bg-emerald-300 w-full items-center rounded-md p-2 text-md"
                            onClick={async () => {
                              await supabase.auth.signOut();
                              router.push("/");
                            }}
                          >
                            <section className="m-1 hover:text-bold">
                              <MdLogout />
                            </section>
                            Logout!
                          </button>
                        </Menu.Item>
                      </Menu>
                    </>
                  }
                />
              }
            />
            <section className="text-white text-xl font-semibold py-8">
              Submit a new challenge
            </section>
            <form>
              <input
                type="text"
                placeholder="Enter your title here"
                className="w-full bg-gray-50 text-black text-lg px-2 rounded-md py-1"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />

              <textarea
                placeholder="Enter your description here"
                className="flex flex-wrap w-full bg-gray-50 text-black text-lg px-2 rounded-md py-16 mt-4 mb-2 "
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
              <input
                type="url"
                placeholder="Submit your link here"
                className="w-full bg-gray-50 text-black text-lg px-2 rounded-md my-4"
                onChange={(e) => {
                  setLink(e.target.value);
                }}
              />
              <button
                className="bg-emerald-600 hover:bg-teal-600 font-semibold text-white text-xl p-2 rounded-lg w-full"
                onClick={async (e) => {
                  e.preventDefault();
                  await PostReport(
                    Title,
                    description,
                    link,
                    supabase.auth.user()?.id!
                  );
                  setSubmit(true);
                }}
              >
                Submit
              </button>
            </form>
            {Submit ? (
              <>
                <section className="text-emerald-400 font-medium text-2xl py-2">
                  Saved!
                </section>
              </>
            ) : (
              <></>
            )}
          </>
        }
      />
    );
  } else {
    RouterEffect();
    return <></>;
  }
};

export default SubmitChallenge;
