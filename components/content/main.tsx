import * as React from "react";
import Image from "next/image";
import image from "../../public/images/logo.png";

const Main = (): JSX.Element => {
  return (
    <>
      <section className="mx-12 my-2">
        <Image
          src={image}
          alt="Hello"
          width={"663px"}
          height={"275px"}
          layout="responsive"
        />
      </section>
      <section className="flex flex-auto py-4 text-white lg:text-2xl md:text-xl sm:text-lg lg:font-bold justify-center text-left">
        The open-source community you need to explore, grow and advance your{" "}
        Data on Kubernetes skills!
      </section>
    </>
  );
};

export default Main;
