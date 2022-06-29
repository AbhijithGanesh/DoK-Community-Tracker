import { Menu } from "@headlessui/react";
import { NextRouter, useRouter } from "next/router";
import { useState } from "react";
import { BsBraces } from "react-icons/bs";
import { FaUserTie } from "react-icons/fa";
import { GiSandsOfTime } from "react-icons/gi";
import { MdLeaderboard, MdLogout } from "react-icons/md";
import ChartContainer from "../../../components/app/heatmap";
import { DropDownMenu, MenuItem } from "../../../components/navbar/dropdown";
import Navbar from "../../../components/navbar/navbar";
import { check_login } from "../../../utils/auth";
import RouterEffect from "../../../utils/routerUtil";
import { supabase } from "../../../utils/supabase";
import Layout from "../../Layout";

let Profile = (): JSX.Element | void => {
  const Router = useRouter();
  const { profile } = Router.query;
  const [loading, setloading] = useState(false);
  const router: NextRouter = useRouter();

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
                        icon={<BsBraces />}
                        link={"/challenges"}
                        text={"View Challenges"}
                      />
                      <MenuItem
                        icon={<FaUserTie />}
                        link="/"
                        text={"My Profile"}
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
                  }
                />
              }
            />
            <section className="pt-8 pb-2 text-white font-extrabold text-2xl">
              Hello {profile}
            </section>
            <section className="pt-4 pb-2 px-8 text-gray-400 font-semibold text-lg">
              Your contributions
            </section>
            <section className="hidden lg:block sm:hidden md:hidden">
              <ChartContainer
                count={[1, 2, 3, 4, 5]}
                size={"15px"}
                gap={"2px"}
                squares={5}
              />
            </section>
            <section className="hidden md:block lg:hidden sm:hidden">
              <ChartContainer
                count={[1, 2, 3, 4, 5]}
                size={"10px"}
                gap={"2px"}
                squares={5}
              />
            </section>
            <section className="hidden sm:block lg:hidden md:hidden">
              <ChartContainer
                count={[1, 2, 3, 4, 5]}
                size={"6px"}
                gap={"2px"}
                squares={5}
              />
            </section>
            <section className="py-8 text-white font-semibold text-xl">
              Your badges
              <section className="w-auto my-1 h-1 bg-slate-400" />
            </section>
          </>
        }
      />
    );
  } else {
    RouterEffect();
  }
};

export default Profile;
