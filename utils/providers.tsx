import { supabase } from "../utils/supabase";

type Props = {
  name: string;
  content: JSX.Element;
};

let Provider = ({ name, content }: Props): JSX.Element => {
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
    default:
      return <></>;
  }
};
export default Provider;
