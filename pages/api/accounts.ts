import { supabase } from "../../utils/supabase";
import { User } from "../../types/users";

let createAccount = async (body: User): Promise<void> => {
  const client = await supabase.from("Users").insert(body);
  console.log(client);
};

export default createAccount;
