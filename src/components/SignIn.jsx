import { FaGoogle, FaApple, FaGithub } from "react-icons/fa";

const SignIn = () => {
  return (
    <div className="flex h-screen w-full justify-center items-center ">
      <div className=" w-[450px] h-[550px] p-10 rounded-2xl border border-gray-400 bg-opacity-30">
        <h1 className="font-bold text-2xl ">Sign In</h1>
        <div className="w-full py-10 flex justify-center align-center">
          <ul className="w-full space-y-2 font-semibold">
            <h3 className=" text-xl">Email</h3>
            <input
              type="email"
              className="focus:outline-none w-full border rounded-xl pl-4 py-1"
            />
            <h3 className=" text-xl">Password</h3>
            <input
              type="password"
              className=" focus:outline-none w-full border px-2 rounded-xl pl-4 py-1"
            />
          </ul>
        </div>
        <div className="w-full flex justify-center">
          <button className="bg-red-500  h-10 rounded-2xl text-white w-full hover:bg-red-700 font-semibold">
            SignIn
          </button>
        </div>
        <div className="flex flex-col items-center justify-center py-5">
          <h3>---- or ----</h3>
          <div className="flex flex-row py-6 gap-10 text-2xl">
            <a href="#">
              <FaGoogle />
            </a>
            <a href="#">
              <FaApple />
            </a>
            <a href="#">
              <FaGithub />
            </a>
          </div>
          <div className="flex flex-row">
            <p>
              Create new account
              <span>
                <a href="#" className="text-red-500">
                  {" "}
                  Here!
                </a>
              </span>
            </p>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default SignIn;
