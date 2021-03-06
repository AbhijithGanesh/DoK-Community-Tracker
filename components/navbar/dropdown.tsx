import { Menu } from "@headlessui/react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { AiFillCloseCircle } from "react-icons/ai";
import Link from "next/link";
import { useState } from "react";

type MenuItemProps = {
  icon: JSX.Element;
  text: string;
  link: string;
};

type DropDownMenuProps = {
  items: JSX.Element;
};

let MenuItem = ({ icon, text, link }: MenuItemProps): JSX.Element => {
  return (
    <>
      <Menu.Item>
        <Link href={link}>
          <button className="z-2 top flex justify-start gap-2 bg-white text-black font-medium hover:bg-emerald-300 hover:font-bold group w-full items-center rounded-md p-2 text-md">
            <section className="m-1">{icon}</section>
            {text}
          </button>
        </Link>
      </Menu.Item>
    </>
  );
};

let DropDownMenu = ({ items }: DropDownMenuProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <section className="top-16 w-56 text-left">
      <Menu as="section" className="relative inline-block text-left">
        <section>
          <Menu.Button className="flex justify-center btn btn-circle btn-ghost rounded-md bg-black text-white text-2xl ">
            {isOpen ? (
              <section>
                <button onClick={() => setIsOpen(!isOpen)}>
                  <HiOutlineMenuAlt2
                    className="text-white"
                    aria-hidden="true"
                  />
                </button>
              </section>
            ) : (
              <section>
                <button onClick={() => setIsOpen(!isOpen)}>
                  <AiFillCloseCircle
                    className="text-white"
                    aria-hidden="true"
                  />
                </button>
              </section>
            )}
          </Menu.Button>
        </section>

        <Menu.Items className="absolute -right-2 mt-2  rounded-md bg-white shadow-lg w-56">
          <section className="p-1">{items}</section>
        </Menu.Items>
      </Menu>
    </section>
  );
};

export { DropDownMenu, MenuItem };
