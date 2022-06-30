import { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "../../../utils/supabase";

let UpdateReport = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  if (req?.method == "PATCH") {
    let body = await supabase
      .from("Contribution")
      .update({
        title: req?.body?.title!,
        description: req?.body?.description!,
        last_updated_at: new Date(),
      })
      .eq("id", req?.body.id!);
    if (body?.error) {
      res.status(body.status).send(body.error);
    } else {
      res.status(body?.status!).send("Accepted");
    }
  } else {
    res.status(405).send("Forbidden!");
  }
};

export default UpdateReport;
