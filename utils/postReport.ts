import { supabase } from "./supabase";

let PostReport = async (
  title: string,
  description: string,
  link: string,
  id: string
): Promise<void> => {
  let body = await fetch(`http://dok-community-tracker.vercel.app/api/content/postreport`, {
    body: JSON.stringify({
      title: title,
      description: description,
      links: link,
      userid: id,
    }),
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
};

export default PostReport;
