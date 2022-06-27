import { supabase } from "./supabase";

let defaultCreate = async (
  username: string,
  userid = supabase.auth.user()?.id!
) => {
  let condition = await fetch(
    `http://localhost:3000/api/profiles/empty_user_create`,
    {
      method: "POST",
      body: JSON.stringify({ userid: userid, username: username }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  );
};

export default defaultCreate;
