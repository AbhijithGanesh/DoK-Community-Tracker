import Image from "next/image";
import * as react from "react";
import logo from "../../public/images/dok-logo.png";

type NavbarBody = {
  link: string;
  body: string;
};

const NavbarItem = (item: NavbarBody): JSX.Element => {
  return (
    <>
      <section className="underline_hover font-extrabold hover:transform hover:-translate-y-2 hover:bg-gray-800 hover:rounded-lg hover:px-2 hover:py-2 lg:text-xl md:text-xl sm:text-lg">
        <a href={item.link}>{item.body}</a>
      </section>
    </>
  );
};

let Navbar = (): JSX.Element => {
  return (
    <>
      <nav className="py-8 mx-2 flex flex-auto flex-nowrap justify-between">
        <section className="text-white font-bold px-2">
          <Image src={logo} alt="Data on Kubernetes" layout="intrinsic" />
        </section>
        <section className="flex flex-1 text-white justify-end gap-4 px-2">
          <NavbarItem link="/login" body="Login/Sign in" />
          <NavbarItem link="/challenges" body="Challenges" />
          <NavbarItem link="/leaderboard" body="Leaderboard" />
        </section>
      </nav>
      <section className="h-0.5 w-auto bg-gradient-to-r from-[#094E63] via-pink to-[#00deb6]" />
    </>
  );
};

export default Navbar;
