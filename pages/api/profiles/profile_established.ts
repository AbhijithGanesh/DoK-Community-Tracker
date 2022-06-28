import { PostgrestResponse } from "@supabase/supabase-js";
import { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "../../../utils/supabase";

let CheckStatus = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  if (req.method == "PUT") {
    let flag: PostgrestResponse<boolean> = await supabase
      .from("Users")
      .select("profile_created")
      .eq("userid", req?.body?.userid!);
    res.status(200).json(flag.data);
  } else {
    res.status(405).send("Forbidden!");
  }
};

export default CheckStatus;
