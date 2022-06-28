import { Menu } from "@headlessui/react";
import { NextRouter, useRouter } from "next/router";
import { useState } from "react";
import { BsFillQuestionDiamondFill } from "react-icons/bs";
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
                        icon={<BsFillQuestionDiamondFill />}
                        link={"/challenges"}
                        text={"View Challenges"}
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
                    </>
                  }
                />
              }
            />
            <section className="py-8 text-white font-extrabold text-2xl">
              Hello {profile}
            </section>
            <section>
              <ChartContainer />
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
