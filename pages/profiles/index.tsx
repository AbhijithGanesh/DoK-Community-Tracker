import { NextRouter, useRouter } from "next/router";
import Challenges from "../challenges";

let Handler = () => {
  const router: NextRouter = useRouter();
  return (
    <>
      <Challenges />
    </>
  );
};
export default Handler;
