import { useRouter } from "next/router";

let EditReportID = (): JSX.Element => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  return (
    <>
      <section className="text-white"></section>
    </>
  );
};

export default EditReportID;
