import Layout from "../../pages/Layout";
import { FaGithub, FaGitlab, FaGoogle } from "react-icons/fa";
import Provider from "../../utils/providers";

type SocialAuth = {
  name: string;
  icon: JSX.Element;
};

const SocialAuth = ({ name, icon }: SocialAuth): JSX.Element => {
  return (
    <>
      <section className="my-2 bg-white flex place-items-center justify-center rounded-md hover:transform-cpu hover:-translate-y-1">
        <section className="text-2xl py-2 px-2">{icon}</section>
        <Provider
          name={name}
          content={
            <section className="text-gray-500 text-lg font-light hover:text-black">
              Sign up with {name}
            </section>
          }
        />
      </section>
    </>
  );
};

const ThirdPartyAuth = (): JSX.Element => {
  return (
    <Layout
      element={
        <>
          <SocialAuth name="GitHub" icon={<FaGithub />} />
          <SocialAuth name="Google" icon={<FaGoogle />} />
          <SocialAuth name="GitLab" icon={<FaGitlab />} />
        </>
      }
    />
  );
};

export default ThirdPartyAuth;
