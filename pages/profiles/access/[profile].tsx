import { Menu } from "@headlessui/react";
import { NextRouter, useRouter } from "next/router";
import { useState } from "react";
import { AiOutlineMail, AiOutlineSend } from "react-icons/ai";
import { BsBraces } from "react-icons/bs";
import { FaUserPlus } from "react-icons/fa";
import { GiSandsOfTime } from "react-icons/gi";
import { GrDiamond } from "react-icons/gr";
import { MdLogout, MdPassword } from "react-icons/md";
import ChartContainer from "../../../components/app/heatmap";
import { DropDownMenu, MenuItem } from "../../../components/navbar/dropdown";
import Navbar from "../../../components/navbar/navbar";
import { check_login } from "../../../utils/auth";
import {
  updateEmail,
  updatePassword,
  updateUsername,
} from "../../../utils/profile";
import RouterEffect from "../../../utils/routerUtil";
import { supabase } from "../../../utils/supabase";
import Layout from "../../Layout";

type LineCardProps = {
  line: string;
  inp_element: JSX.Element;
};

let LineCard = ({ line, inp_element }: LineCardProps): JSX.Element => {
  return (
    <>
      <section className="flex flex-auto justify-start gap-4 w-full">
        <section className="text-white font-medium text-xl">{line}</section>
        {inp_element}
      </section>
    </>
  );
};

type ButtonElementProps = {
  title: string;
  placeholder: string;
  icon: JSX.Element;
  type?: string;
};

let ButtonElement = ({
  title,
  placeholder,
  icon,
  type,
}: ButtonElementProps): JSX.Element => {
  return (
    <>
      <section className="flex flex-auto bg-white w-full rounded-md place-content-center items-center">
        {icon}
        <input
          type={type}
          className="text-lg text-black px-2 mx-2 flex-grow text-center bg-white"
          placeholder={`${placeholder}`}
        />
        <button>
          <AiOutlineSend
            className="text-xl flex-none text-black m-2"
            onClick={async (e) => {
              e.preventDefault();
            }}
          />
        </button>
      </section>
    </>
  );
};

let Profile = (): JSX.Element | void => {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [Mail, setMail] = useState("");
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
                        icon={<GiSandsOfTime />}
                        link={"./new-report"}
                        text={"Submit a new report"}
                      />
                      <MenuItem
                        icon={<GrDiamond />}
                        link={"./submitted-reports"}
                        text={"View your reports"}
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
            <section className="pt-8 pb-6 text-white font-extrabold text-2xl">
              Hello {profile}
            </section>
            <br />
            <LineCard
              line="Username"
              inp_element={
                <section className="flex flex-auto bg-white w-full rounded-md place-content-center items-center">
                  <FaUserPlus className="text-black text-2xl mx-2" />
                  <input
                    className="text-lg text-black px-2 mx-2 flex-grow text-center bg-white"
                    placeholder={`Username`}
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                  />
                  <button>
                    <AiOutlineSend
                      className="text-xl flex-none text-black m-2"
                      onClick={async (e) => {
                        e.preventDefault();
                        await updateUsername(
                          Username,
                          supabase.auth.user()?.id!
                        );
                      }}
                    />
                  </button>
                </section>
              }
            />
            <br />
            <LineCard
              line=" E-mail "
              inp_element={
                <section className="flex flex-auto bg-white w-full rounded-md place-content-center items-center">
                  <AiOutlineMail className="text-black text-2xl mx-2" />
                  <input
                    className="text-lg text-black px-2 mx-2 flex-grow text-center bg-white"
                    placeholder={`E-Mail`}
                    onChange={(e) => {
                      setMail(e.target.value);
                    }}
                  />
                  <button>
                    <AiOutlineSend
                      className="text-xl flex-none text-black m-2"
                      onClick={async (e) => {
                        e.preventDefault();
                        await updateEmail(Mail);
                      }}
                    />
                  </button>
                </section>
              }
            />
            <br />
            <LineCard
              line="Password"
              inp_element={
                <section className="flex flex-auto bg-white w-full rounded-md place-content-center items-center">
                  <MdPassword className="text-black text-2xl mx-2" />
                  <input
                    className="text-lg text-black px-2 mx-2 flex-grow text-center bg-white"
                    placeholder={`password`}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                  <button>
                    <AiOutlineSend
                      className="text-xl flex-none text-black m-2"
                      onClick={async (e) => {
                        e.preventDefault();
                        await updatePassword(Password);
                      }}
                    />
                  </button>
                </section>
              }
            />
            <section className="mt-8 h-0.5 w-auto bg-gradient-to-r from-[#094E63] via-pink to-[#00deb6]" />

            <section className="pt-4 pb-2 text-2xl text-gray-50 font-semibold">
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
