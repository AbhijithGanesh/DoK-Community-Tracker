import { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "../../../utils/supabase";

let postReport = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  if (req?.method == "POST") {
    let data = await supabase.from("Contribution").insert({
      date_of_contribution: new Date(),
      title: req?.body?.title!,
      description: req?.body?.description!,
      links: req?.body?.links,
      User: req?.body?.userid,
      last_updated_at: new Date(),
    });
    if (data?.error) {
      res.status(data.status).send(data.error);
    } else {
      res.status(data?.status!).send(data?.statusText!);
    }
  } else {
    res.status(405).send("Forbidden!");
  }
};

export default postReport;
