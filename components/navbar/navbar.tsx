import Image from "next/image";
import logo from "../../public/images/dok-logo.png";
import Link from "next/link";

type Props = {
  element: JSX.Element;
};

let Navbar = ({ element }: Props): JSX.Element => {
  return (
    <>
      <section className="navbar bg-base-100">
        <section className="navbar-start">{element}</section>
        <section className="navbar-center">
          <Link href="/">
            <section className="normal-case font-bold hidden text-gray-400 hover:text-white lg:flex lg:place-content-center md:flex md:place-content-center text-xl btn btn-ghost">
              Data on Kubernetes
            </section>
          </Link>
        </section>
        <section className="navbar-end">
          <section className="btn btn-rectangle btn-ghost m-2 p-auto">
            <Link href="/">
              <Image
                src={logo}
                alt="DoK Logo"
                width={"122.5px"}
                height={"33.5px"}
              />
            </Link>
          </section>
        </section>
      </section>
      <section className="h-0.5 w-auto bg-gradient-to-r from-[#094E63] via-pink to-[#00deb6]" />
    </>
  );
};

export default Navbar;
