import { session_user } from "./users";

type Session = {
  access_token: string;
  expires_at: number;
  refresh_token: string;
  user: session_user;
};

export default Session;
