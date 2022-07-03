import Layout from "./Layout";

let NotFound = () => {
  return (
    <>
      <Layout
        element={
          <section className="py-8 text-white font-medium text-2xl">
            Page Not found!
          </section>
        }
      />
    </>
  );
};

export default NotFound;
