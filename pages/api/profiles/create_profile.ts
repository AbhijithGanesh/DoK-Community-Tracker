import { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "../../../utils/supabase";

let CreateProfile = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  if (req.method == "POST") {
    let data = await supabase.from("Users").insert({
      username: req.body?.username!,
      userid: req.body?.userid!,
      streak: req.body?.streak!,
      points_scord: req.body?.points_scord!,
      level: req.body?.level!,
      profile_created: true,
      public: true,
    });
    res.status(200).send("Created!");
  } else {
    res.status(405).send("Forbidden!");
  }
};

export default CreateProfile;
