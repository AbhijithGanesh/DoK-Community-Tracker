import { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "../../../utils/supabase";

let postReport = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  if (req?.method == "POST") {
    let data = await supabase
      .from("Contribution")
      .select("title, links, User")
      .eq("User", JSON.parse(req?.body).userid);
    if (data?.error) {
      res.status(data.status).send([data?.error, req?.body]);
    } else {
      res.status(data?.status!).send(data?.data!);
    }
  } else {
    res.status(405).send("Forbidden!");
  }
};

export default postReport;
