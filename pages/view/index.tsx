import * as React from "react";
import Layout from "../Layout";

let app = (): JSX.Element => {
  return (
    <Layout
      element={
        <>
          <section className="py-8 text-white text-2xl font-semibold">
            Welcome to profile viewing section!
          </section>
        </>
      }
    />
  );
};

export default app;
