import Image from "next/image";
import * as react from "react";
import { Transition } from "@headlessui/react";
import { useState } from "react";
import logo from "../../public/images/dok-logo.png";
import Link from "next/link";

type NavbarBody = {
  link: string;
  body: string;
};

type Props = {
  Item: string;
  Reference: string;
};

const HeaderContent = ({ Item, Reference }: Props) => {
  return (
    <>
      <a
        href={Reference}
        className="text-gray-400 font-Ally font-bold text-lg px-3 py-2 transition transform hover:text-white rounded-lg motion-reduce:transform-none underline_hover hover:bg-gray-700"
      >
        {Item}
      </a>
    </>
  );
};

const HeaderContentTwo = ({ Item, Reference }: Props) => {
  return (
    <>
      <section className="text-xl font-Ally font-bold text-gray-400 ">
        <a href={Reference}>{Item}</a>
      </section>
    </>
  );
};

const NavbarItem = (item: NavbarBody): JSX.Element => {
  return (
    <>
      <section className="underline_hover font-semibold hover:bg-gray-600 hover:rounded-lg hover:px-2 lg:text-xl md:text-xl sm:text-lg">
        <Link href={item.link}>{item.body}</Link>
      </section>
    </>
  );
};

let Navbar = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <section className="navbar bg-base-100">
        <section className="navbar-start">
          <section className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <NavbarItem link="/challenges" body="Challenges" />
              <NavbarItem link="/leaderboard" body="Leaderboard" />
              <NavbarItem link="/login" body="Login/Sign up" />
            </ul>
          </section>
        </section>
        <section className="navbar-center">
          <Link href="/">
            <section className="normal-case font-bold hidden text-gray-400 hover:text-white lg:block lg:flex lg:place-content-center text-xl btn btn-ghost">
              Data on Kubernetes
            </section>
          </Link>
        </section>
        <section className="navbar-end">
          <Image
            src={logo}
            alt="DoK Logo"
            width={"130px"}
            height={"45px"}
            className="my-2"
          />
        </section>
      </section>
      <section className="h-0.5 w-auto bg-gradient-to-r from-[#094E63] via-pink to-[#00deb6]" />
    </>
  );
};

export default Navbar;
{
  /* <nav className="py-8 mx-2 flex flex-auto flex-nowrap justify-between">
<section className="text-white font-bold px-2">
  <Image src={logo} alt="Data on Kubernetes" layout="intrinsic" />
</section>
  <section className="flex flex-1 text-white justify-end gap-4 px-2">
    <NavbarItem link="/challenges" body="Challenges" />
    <NavbarItem link="/leaderboard" body="Leaderboard" />
    <NavbarItem link="/login" body="Login/Sign up" />
  </section>
</nav>
<section className="h-0.5 w-auto bg-gradient-to-r from-[#094E63] via-pink to-[#00deb6]" /> */
}
