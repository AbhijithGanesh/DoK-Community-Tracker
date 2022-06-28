import Layout from "../../Layout";
import Navbar from "../../../components/navbar/navbar";
import { useRouter } from "next/router";
import { supabase } from "../../../utils/supabase";
import { DropDownMenu, MenuItem } from "../../../components/navbar/dropdown";
import { BsFillQuestionDiamondFill } from "react-icons/bs";
import { MdLeaderboard, MdLogout } from "react-icons/md";
import { GiSandsOfTime } from "react-icons/gi";
import { Menu } from "@headlessui/react";
import { check_login } from "../../../utils/auth";
import RouterEffect from "../../../utils/routerUtil";

let SubmitChallenge = (): JSX.Element => {
  const router = useRouter();

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
                        link={"#"}
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
            <section className="text-white text-xl font-semibold py-8">
              Submit a new challenge
            </section>
            <form>
              <input
                className="bg-white flex flex-1 w-full rounded-md px-2 text-gray-600 font-semibold"
                type="text"
                placeholder="Title"
              />
              <input
                className="bg-white flex flex-1 w-full rounded-md text-gray-600 font-semibold py-16 my-4 px-2"
                type="text"
                placeholder="Your Description"
              />
            </form>
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
