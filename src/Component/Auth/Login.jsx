// import React from "react";
// import { ReactMatrixAnimation } from "react-matrix-animation";
// import { Link } from "react-router";
// const Login = () => {
//   return (
//     <div>
//       <div>
//         <div className="hero bg-base-200 min-h-screen ">
//           <div className="w-full h-full">
//             <ReactMatrixAnimation />
//           </div>
//           <div className="hero-content  ">
//             <div className="">
//               <div className="w-99 rounded-xl bg-[#0a1939] p-8 text-gray-100 shadow-lg">
//                 <p className="text-center text-2xl font-bold">Login</p>
//                 <form className="mt-6">
//                   <div className="mt-1 text-sm">
//                     <label
//                       htmlFor="username"
//                       className="block text-gray-400  text mb-1"
//                     >
//                       Email
//                     </label>
//                     <input
//                       type="text"
//                       name="username"
//                       id="username"
//                       className="w-full rounded-md border border-gray-700 bg-gray-900 px-4 py-3 text-gray-100 focus:border-violet-400 focus:outline-none"
//                     />
//                   </div>

//                   <div className="mt-4 text text-sm">
//                     <label
//                       htmlFor="password"
//                       className="block text-gray-400 mb-1"
//                     >
//                       Password
//                     </label>
//                     <input
//                       type="password"
//                       name="password"
//                       id="password"
//                       className="w-full rounded-md border border-gray-700 bg-gray-900 px-4 py-3 text-gray-100 focus:border-violet-400 focus:outline-none"
//                     />
//                     <div className="mt-2 text-left text-xs text-gray-400">
//                       <a
//                         href="#"
//                         className="hover:underline hover:text-violet-400"
//                       >
//                         Forgot Password?
//                       </a>
//                     </div>
//                   </div>

//                   <button
//                     type="submit"
//                     className="mt-4 w-full rounded-md bg-violet-400 py-3 text-center font-semibold text-gray-900 hover:bg-violet-500"
//                   >
//                     Sign in
//                   </button>
//                 </form>

//                 <div className="mt-6 flex items-center">
//                   <div className="flex-1 h-px bg-gray-700"></div>
//                   <p className="px-3 text-sm text-gray-400">
//                     Login with social accounts
//                   </p>
//                   <div className="flex-1 h-px bg-gray-700"></div>
//                 </div>

//                 <div className="mt-4 flex justify-center gap-3">
//                   <button
//                     aria-label="Log in with Google"
//                     className="p-3 rounded bg-transparent"
//                   >
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       viewBox="0 0 32 32"
//                       className="h-5 w-5 fill-white"
//                     >
//                       <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
//                     </svg>
//                   </button>
//                 </div>

//                 <p className="mt-6 text-center text-xs text-gray-400">
//                   Don't have an account? <a href="#"></a>
//                   <Link
//                     to="/register"
//                     className="text-white hover:underline text hover:text-violet-400"
//                   >
//                     Sign up
//                   </Link>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React from "react";
import { ReactMatrixAnimation } from "react-matrix-animation";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="relative min-h-screen bg-base-200 overflow-hidden">
      {/* Matrix animation layer */}
      <div className="absolute inset-0 z-0">
        <ReactMatrixAnimation />
      </div>

      {/* Main login content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-12">
        <div className="w-full max-w-md bg-[#0a1939] rounded-xl shadow-lg p-8 text-gray-100">
          <p className="text-center text-3xl font-bold mb-6">Login</p>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="username"
                className="block text-sm text-gray-400 mb-1"
              >
                Email
              </label>
              <input
                type="text"
                name="username"
                id="username"
                className="w-full rounded-md border border-gray-700 bg-gray-900 px-4 py-3 text-gray-100 focus:border-violet-400 focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm text-gray-400 mb-1"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="w-full rounded-md border border-gray-700 bg-gray-900 px-4 py-3 text-gray-100 focus:border-violet-400 focus:outline-none"
              />
              <div className="mt-2 text-right text-xs text-gray-400">
                <a href="#" className="hover:underline hover:text-violet-400">
                  Forgot Password?
                </a>
              </div>
            </div>

            <button
              type="submit"
              className="w-full rounded-md bg-violet-400 py-3 font-semibold text-gray-900 hover:bg-violet-500 transition-colors"
            >
              Sign in
            </button>
          </form>

          <div className="mt-6 flex items-center">
            <div className="flex-1 h-px bg-gray-700"></div>
            <p className="px-3 text-sm text-gray-400">or</p>
            <div className="flex-1 h-px bg-gray-700"></div>
          </div>

          <div className="mt-4 flex justify-center gap-3">
            <button
              aria-label="Log in with Google"
              className="p-3 rounded bg-transparent hover:bg-gray-800 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="h-6 w-6 fill-white"
              >
                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z" />
              </svg>
            </button>
          </div>

          <p className="mt-6 text-center text-xs text-gray-400">
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="text-white hover:underline hover:text-violet-400"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
