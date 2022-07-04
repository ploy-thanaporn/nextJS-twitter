import { getProviders, signIn } from "next-auth/react";

const Signin = ({ providers }) => {
  return (
    <div className="flex justify-center mt-20 space-x-4">
      <img
        src="https://cdn.cms-twdigitalassets.com/content/dam/help-twitter/en/twitter-tips/desktop-assets/ch-01/ch12findphone.png.twimg.1920.png"
        alt="twitter image inside a phone"
        className="hidden object-cover md:w-44 md:h-80 rotate-6 md:inline-flex"
      />
      <div className=" ">
        {Object.values(providers).map((provider) => (
          <div className="flex flex-col items-center" key={provider.id}>
            <img
              src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png"
              alt="twiitter logo"
              className="w-36 object-cover"
            />
            <p className="text-center text-sm italic my-10">
              This app is created for learning purposes
            </p>
            <button
              className="bg-red-400 rounded-lg p-3 text-white hover:bg-red-500"
              onClick={() => signIn(providers.id, { callbackUrl: "/" })}
            >
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Signin;

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}
