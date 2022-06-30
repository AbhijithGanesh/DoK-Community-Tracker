import { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "../../../utils/supabase";

const update_password = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  if (req.method == "PUT") {
    let { user, error } = await supabase.auth.update({
      password: req?.body?.password!,
    });
    if (error) {
      res.status(error?.status!).send(error?.message!);
    } else {
      res.status(200).json(`Inserted data; ${user?.email}`);
    }
  } else {
    res.status(405).send("Forbidden!");
  }
};

export default update_password;
