import { Menu } from "@headlessui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { GrDiamond } from "react-icons/gr";
import { FaUserTie } from "react-icons/fa";
import { GiSandsOfTime } from "react-icons/gi";
import {  MdLogout } from "react-icons/md";
import { DropDownMenu, MenuItem } from "../../../components/navbar/dropdown";
import Navbar from "../../../components/navbar/navbar";
import { TbEdit } from "react-icons/tb";
import { supabase } from "../../../utils/supabase";
import Layout from "../../Layout";

let fetch_data = async (id: string) => {
  const res = await fetch(
    "http://dok-community-tracker.vercel.app/api/content/submitted_reports",
    {
      method: "POST",
      body: JSON.stringify({
        userid: id!,
      }),
    }
  );
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

let SubmittedReport = () => {
  const router = useRouter();
  const null_state = {
    title: "New",
    links: "https://abhijithganesh.tech/",
  };
  const [load, setLoading] = useState(false);
  const [state, setState] = useState([null_state]);
  let uid = supabase.auth.user();
  fetch_data(supabase.auth.user()?.id!).then((s) => {
    setState(s.props.data);
  });
  let key: number = 0;
  if (!load) {
    setLoading(true);
  }
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
                      <MenuItem
                        icon={<GrDiamond />}
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
            <section className="py-4 text-white font-medium text-2xl">
              Your reports
            </section>
            <section className="pt-8 text-xl">
              <div>
                <table className="w-full">
                  <thead>
                    <tr>
                      <th></th>
                      <th>Title</th>
                      <th>Link</th>
                    </tr>
                  </thead>
                  <tbody>
                    {state.map((s) => {
                      key += 1;
                      return (
                        <>
                          <tr className="text-center">
                            <th>{key}</th>
                            <td>{s.title}</td>
                            <td>{s.links}</td>
                            <td className="text-2xl text-gray-400 hover:text-white">
                              <button
                                onClick={() =>
                                  router.push(`/profiles/${key}/edit-report`)
                                }
                              >
                                <TbEdit />
                              </button>
                            </td>
                          </tr>
                        </>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </section>
          </>
        }
      />
    </>
  );
};

export default SubmittedReport;
