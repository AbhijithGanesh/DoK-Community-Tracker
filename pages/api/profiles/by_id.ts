import { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "../../../utils/supabase";

const ById = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  if (req.method == "GET") {
    let data = await supabase
      .from("Users")
      .select("username, userid, streak")
      .eq("userid", req.body?.id!);
    res.status(200).json(data.data);
  } else if (req.method == "PUT") {
    let data = await supabase.from("Users").upsert({
      username: req.body?.username!,
      userid: req.body?.userid!,
      streak: req.body?.streak!,
      points_scord: req.body?.points_scord!,
      level: req.body?.level!,
      profile_created: true,
      public: true,
    });
    res.status(200).send("Created!");
  }
};

export default ById;
