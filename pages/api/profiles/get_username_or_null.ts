import { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "../../../utils/supabase";

const NullUsername = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  if (req.method == "PUT") {
    let data = await supabase
      .from("Users")
      .select("username")
      .eq("userid", req.body?.userid!);
    res.status(200).json(data.data);
  } else {
    res.status(405).send("Forbidden!");
  }
};

export default NullUsername;
