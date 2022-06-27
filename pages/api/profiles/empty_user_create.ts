import { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "../../../utils/supabase";

let Establish = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  if (req.method == "POST") {
    let data = await supabase.from("Users").upsert({
      userid: req?.body?.userid,
      username: req?.body?.username,
      profile_created: false,
      streak: 0,
    });

    res.status(200).json(data);
  } else {
    res.status(405).send("Forbidden");
  }
};
export default Establish;
