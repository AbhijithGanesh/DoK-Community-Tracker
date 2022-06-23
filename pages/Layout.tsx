import * as React from "react";

const Layout = ({ element }): JSX.Element => {
  return (
    <>
      <section className="px-2 grid lg:grid-cols-12 md:grid-cols-6 sm: grid-cols-1">
        <section className="lg:col-start-3 lg:col-span-8 md:col-start-1 md:col-span-full sm:col-start-1">
          {element}
        </section>
      </section>
    </>
  );
};

export default Layout;
