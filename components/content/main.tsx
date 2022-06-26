import * as React from "react";

const Main = (): JSX.Element => {
  return (
    <>
      <iframe
        width="962"
        height="564"
        src="https://www.youtube.com/embed/t08iIjMGvC0"
        className="py-8 mt-10 hidden md:block lg:block"
        title="DoK Explorers Challenge #1- CloudNativePG"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />
      <section className="flex flex-auto py-4 text-white text-2xl font-semibold justify-center text-center">
        The open-source community you need to explore, grow and advance your{" "}
        Data on Kubernetes skills!
      </section>
    </>
  );
};

export default Main;
