import { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "../../../utils/supabase";

let fetch_profile = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  if (req.method == "GET") {
    let data = supabase.from("Users").select(`username`).eq("id", req.body?.id);
    res.status(200).send(data);
  } else {
    res.status(405).send("Forbidden");
  }
};
export default fetch_profile;