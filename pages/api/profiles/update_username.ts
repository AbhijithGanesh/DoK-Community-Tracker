import { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "../../../utils/supabase";

const Username = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  if (req.method == "PUT") {
    let data = await supabase
      .from("Users")
      .update({ username: req?.body?.username! })
      .eq("userid", req.body?.userid!);
    if (data?.error) {
      res.status(data?.status).send([data, req.body?.userid!]);
    } else {
      res.status(200).json("Inserted data");
    }
  } else {
    res.status(405).send("Forbidden!");
  }
};

export default Username;
