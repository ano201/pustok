import useAuth from "./../../hooks/useAuth";

const GoogleSignIn = () => {
  const { google } = useAuth();

  return (
    <div className="text-center">
      <button
        onClick={google}
        className=" bg-amber-400 hover:bg-amber-600 rounded px-4 py-2 text-white font-bold text-lg"
      >
        Sign in with Google
      </button>
    </div>
  );
};

export default GoogleSignIn;
