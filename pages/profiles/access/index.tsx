import { MenuItem } from "../../../components/navbar/dropdown";
import { Menu } from "@headlessui/react";
import Navbar from "../../../components/navbar/navbar";
import Layout from "../../Layout";
import { FaUserTie } from "react-icons/fa";
import { MdLeaderboard, MdLogout } from "react-icons/md";
import { supabase } from "../../../utils/supabase";
import { NextRouter, useRouter } from "next/router";
import { GiSandsOfTime } from "react-icons/gi";

let Handler = () => {
  const router: NextRouter = useRouter();
  return (
    <>
      <Layout
        element={
          <Navbar
            element={
              <>
                <MenuItem icon={<FaUserTie />} text="my-profile" link="/" />
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
    </>
  );
};
export default Handler;
