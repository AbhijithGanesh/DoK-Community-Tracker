import { supabase } from "../../utils/supabase";

let getToken = async (email: string, password?: string) => {
  const { user, session, error } = await supabase.auth.signIn({
    email: email,
    password: password,
  });
  console.log(supabase.auth.user());
  if (error) {
    return error;
  } else {
    return { user, session };
  }
};

export default getToken;
