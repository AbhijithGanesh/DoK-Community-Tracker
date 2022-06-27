import * as React from "react";
import Layout from "../Layout";

let app = (): JSX.Element => {
  return (
    <Layout
      element={
        <>
          <section className="py-8 text-white text-2xl font-semibold">
            You can edit the profiles here! Here is where you will be adding
            forms, contributions, etc.
          </section>
        </>
      }
    />
  );
};

export default app;
