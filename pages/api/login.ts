import { NextApiRequest, NextApiResponse } from "next";
import { sign_in_wrapper } from "../../utils/auth";

let LoginEndpoint = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  if (req.method == "POST") {
    await sign_in_wrapper(req?.body?.email!, req?.body?.password);
    res.status(200).send("You have logged in");
  } else {
    res.status(405).send(405);
  }
};

export default LoginEndpoint;
