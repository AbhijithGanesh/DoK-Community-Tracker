import { NextRouter, Router, useRouter } from "next/router";
import { supabase } from "../utils/supabase";

type Props = {
  name: string;
  content: JSX.Element;
};

let Provider = ({ name, content }: Props): JSX.Element => {
  const router: NextRouter = useRouter();
  switch (name) {
    case "GitHub":
      return (
        <>
          <button
            onClick={async () => {
              const { user, session, error } = await supabase.auth.signIn({
                provider: `github`,
              });
            }}
          >
            {content}
          </button>
        </>
      );
    case "GitLab":
      return (
        <>
          <button
            onClick={async () => {
              const { user, session, error } = await supabase.auth.signIn({
                provider: `gitlab`,
              });
            }}
          >
            {content}
          </button>
        </>
      );
    case "Google":
      return (
        <>
          <button
            onClick={async () => {
              const { user, session, error } = await supabase.auth.signIn({
                provider: `google`,
              });
            }}
          >
            {content}
          </button>
        </>
      );

    case "Us":
      return (
        <>
          <>
            <button
              onClick={async () => {
                router.push("/signup");
              }}
            >
              {content}
            </button>
          </>
        </>
      );
    default:
      return <></>;
  }
};
export default Provider;
