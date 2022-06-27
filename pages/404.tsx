import Layout from "./Layout";

let NotFound = () => {
  return (
    <>
      <Layout
        element={
          <section className="text-white font-medium text-2xl">
            Page Not found!
          </section>
        }
      />
    </>
  );
};

export default NotFound;
