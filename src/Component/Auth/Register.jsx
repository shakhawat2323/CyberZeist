import React from "react";
import { ReactMatrixAnimation } from "react-matrix-animation";
import { Link } from "react-router";
const Register = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen ">
        <div className="w-full h-full">
          <ReactMatrixAnimation />
        </div>
        <div className="hero-content  ">
          <div className="">
            <form className="flex flex-col gap-3 max-w-[500px] p-5 rounded-2xl relative bg-[#1a1a1a] text-white border border-[#333]">
              <p className="text-[28px] font-semibold tracking-[-1px] relative flex items-center pl-7 text-[#00bfff] before:absolute before:content-[''] before:w-4 before:h-4 before:rounded-full before:left-0 before:bg-[#00bfff] after:absolute after:content-[''] after:w-4 after:h-4 after:rounded-full after:left-0 after:bg-[#00bfff] animate-[pulse_1s_linear_infinite]">
                Register
              </p>

              <p className=" text-center mt-3 mb-3 text text-white/70 ">
                Create a new account.
              </p>

              <div className="flex w-full gap-2">
                <label className="relative w-full">
                  <input
                    className="bg-[#333] text-white w-full px-3 pt-5 pb-1 outline-none border border-gray-600 rounded-xl peer"
                    type="text"
                    placeholder=" "
                    required
                  />
                  <span className="absolute left-3 top-0 text-white/50 text-sm transition-all peer-placeholder-shown:top-[13px] peer-placeholder-shown:text-base peer-placeholder-shown:text-white/50 peer-focus:top-0 peer-focus:text-xs peer-focus:font-semibold peer-focus:text-[#00bfff]">
                    Firstname
                  </span>
                </label>

                <label className="relative w-full">
                  <input
                    className="bg-[#333] text-white w-full px-3 pt-5 pb-1 outline-none border border-gray-600 rounded-xl peer"
                    type="text"
                    placeholder=" "
                    required
                  />
                  <span className="absolute left-3 top-0 text-white/50 text-sm transition-all peer-placeholder-shown:top-[13px] peer-placeholder-shown:text-base peer-placeholder-shown:text-white/50 peer-focus:top-0 peer-focus:text-xs peer-focus:font-semibold peer-focus:text-[#00bfff]">
                    Lastname
                  </span>
                </label>
              </div>

              <label className="relative">
                <input
                  className="bg-[#333] text-white w-full px-3 pt-5 pb-1 outline-none border border-gray-600 rounded-xl peer"
                  type="email"
                  placeholder=" "
                  required
                />
                <span className="absolute left-3 top-0 text-white/50 text-sm transition-all peer-placeholder-shown:top-[13px] peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-xs peer-focus:font-semibold peer-focus:text-[#00bfff]">
                  Email
                </span>
              </label>

              <label className="relative">
                <input
                  className="bg-[#333] text-white w-full px-3 pt-5 pb-1 outline-none border border-gray-600 rounded-xl peer"
                  type="password"
                  placeholder=" "
                  required
                />
                <span className="absolute left-3 top-0 text-white/50 text-sm transition-all peer-placeholder-shown:top-[13px] peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-xs peer-focus:font-semibold peer-focus:text-[#00bfff]">
                  Password
                </span>
              </label>

              <label className="relative">
                <input
                  className="bg-[#333] text-white w-full px-3 pt-5 pb-1 outline-none border border-gray-600 rounded-xl peer"
                  type="password"
                  placeholder=" "
                  required
                />
                <span className="absolute left-3 top-0 text-white/50 text-sm transition-all peer-placeholder-shown:top-[13px] peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-xs peer-focus:font-semibold peer-focus:text-[#00bfff]">
                  Confirm Password
                </span>
              </label>

              <button
                type="submit"
                className="border-none outline-none py-2 rounded-xl text-white text transition-all bg-[#00bfff] hover:bg-[#00bfff96]"
              >
                Register
              </button>

              <p className="text-sm text-white/70 text-center">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-[#00bfff] text hover:underline hover:decoration-royalblue"
                >
                  Sign In
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
