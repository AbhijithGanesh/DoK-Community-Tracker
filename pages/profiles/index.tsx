import { NextRouter, useRouter } from "next/router";
import { Menu } from "@headlessui/react";
import { FaUserTie } from "react-icons/fa";
import { GiSandsOfTime } from "react-icons/gi";
import { MdLeaderboard, MdLogout } from "react-icons/md";
import { DropDownMenu, MenuItem } from "../../components/navbar/dropdown";
import Navbar from "../../components/navbar/navbar";
import { supabase } from "../../utils/supabase";
import Challenges from "../challenges";
import Layout from "../Layout";

let Handler = () => {
  const router: NextRouter = useRouter();
  return (
    <>
      <Layout
        element={
          <>
            <Navbar
              element={
                <DropDownMenu
                  items={
                    <>
                      {" "}
                      <>
                        <MenuItem
                          icon={<FaUserTie />}
                          text="My Profile"
                          link="/"
                        />
                        <MenuItem
                          icon={<GiSandsOfTime />}
                          link={"./new-report"}
                          text={"Submit a new report"}
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
                              <section className="m-1">
                                <MdLogout />
                              </section>
                              Logout!
                            </button>
                          </Menu.Item>
                        </Menu>
                      </>
                    </>
                  }
                />
              }
            />
          </>
        }
      />
      <Challenges />
    </>
  );
};
export default Handler;
