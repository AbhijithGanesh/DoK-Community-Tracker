type User = {
  name: string;
  website: string;
  avatar_url: string;
};

type session_user = {
  id: string;
  aud: "authenticated" | "not authenticated";
  role: "authenticated" | string;
};

export type { User, session_user };
