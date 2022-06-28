import { NextRouter, useRouter } from "next/router";
import { useEffect } from "react";

let RouterEffect = () => {
  const router: NextRouter = useRouter();
  useEffect(() => {
    return () => {
      router.push("/");
    };
  }, [router]);
};

export default RouterEffect;
