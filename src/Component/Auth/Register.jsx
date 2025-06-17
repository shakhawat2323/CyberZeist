import React, { useState } from "react";
import { ReactMatrixAnimation } from "react-matrix-animation";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { useForm } from "react-hook-form";
import UseAuth from "../useHoks/UseAuth";
import Swal from "sweetalert2";

const Register = () => {
  const naviget = useNavigate();
  const { Usercrate, updateProfil, Logout } = UseAuth();

  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const togglePassword = () => setShowPassword(!showPassword);

  const onSubmit = (data) => {
    const { firstname, lastname, email, password } = data;
    const fullName = `${firstname} ${lastname}`;
    Usercrate(email, password)
      .then((result) => {
        console.log(result.user);
        updateProfil({ displayName: fullName, photoURL: "" });
        Swal.fire({
          title: "Registered successfully!",
          icon: "success",
        });
        Logout();
        naviget("/login");
      })
      .catch((err) => {
        Swal.fire({
          title: "Registration failed!",
          text: err.message,
          icon: "error",
        });
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen relative">
      <div className="absolute w-full h-full z-0">
        <ReactMatrixAnimation />
      </div>
      <div className="hero-content z-10">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-3 max-w-[500px] p-5 rounded-2xl bg-[#1a1a1a] text-white border border-[#333]"
        >
          <p className="text-[28px] font-semibold tracking-[-1px] text-[#00bfff] pl-7 relative before:absolute before:left-0 before:w-4 before:h-4 before:rounded-full before:bg-[#00bfff] after:absolute after:left-0 after:w-4 after:h-4 after:rounded-full after:bg-[#00bfff] animate-[pulse_1s_linear_infinite]">
            Register
          </p>
          <p className="text-center text-white/70 mb-3">
            Create a new account.
          </p>

          {/* Firstname & Lastname */}
          <div className="flex w-full gap-2">
            <label className="relative w-full">
              <input
                {...register("firstname", {
                  required: "First name is required",
                  pattern: {
                    value: /^[A-Za-z]{4,30}$/,
                    message: "4–30 letters only, no numbers or symbols",
                  },
                })}
                className="bg-[#333] text-white w-full px-3 pt-5 pb-1 outline-none border border-gray-600 rounded-xl peer"
                placeholder=" "
                type="text"
              />
              <span className="absolute left-3 top-0 text-white/50 text-sm peer-placeholder-shown:top-[13px] peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-xs peer-focus:font-semibold peer-focus:text-[#00bfff]">
                Firstname
              </span>
              {errors.firstname && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.firstname.message}
                </p>
              )}
            </label>

            <label className="relative w-full">
              <input
                {...register("lastname", {
                  required: "Last name is required",
                  pattern: {
                    value: /^[A-Za-z]{3,30}$/,
                    message: "4–30 letters only, no numbers or symbols",
                  },
                })}
                className="bg-[#333] text-white w-full px-3 pt-5 pb-1 outline-none border border-gray-600 rounded-xl peer"
                placeholder=" "
                type="text"
              />
              <span className="absolute left-3 top-0 text-white/50 text-sm peer-placeholder-shown:top-[13px] peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-xs peer-focus:font-semibold peer-focus:text-[#00bfff]">
                Lastname
              </span>
              {errors.lastname && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.lastname.message}
                </p>
              )}
            </label>
          </div>

          {/* Email */}
          <label className="relative">
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email format",
                },
              })}
              className="bg-[#333] text-white w-full px-3 pt-5 pb-1 outline-none border border-gray-600 rounded-xl peer"
              placeholder=" "
              type="email"
            />
            <span className="absolute left-3 top-0 text-white/50 text-sm peer-placeholder-shown:top-[13px] peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-xs peer-focus:font-semibold peer-focus:text-[#00bfff]">
              Email
            </span>
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </label>

          {/* Password */}
          <label className="relative">
            <input
              {...register("password", {
                required: "Password is required",
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
                  message:
                    "Min 8 chars incl. uppercase, lowercase, number, and !@#$%^&*",
                },
              })}
              className="bg-[#333] text-white w-full px-3 pt-5 pb-1 pr-10 outline-none border border-gray-600 rounded-xl peer"
              placeholder=" "
              type={showPassword ? "text" : "password"}
            />
            <span className="absolute left-3 top-0 text-white/50 text-sm peer-placeholder-shown:top-[13px] peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-xs peer-focus:font-semibold peer-focus:text-[#00bfff]">
              Password
            </span>
            <span
              className="absolute right-3 top-4 text-white/70 cursor-pointer"
              onClick={togglePassword}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </span>
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </label>

          {/* Confirm Password */}
          <label className="relative">
            <input
              {...register("cpassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === watch("password") || "Passwords do not match",
              })}
              className="bg-[#333] text-white w-full px-3 pt-5 pb-1 outline-none border border-gray-600 rounded-xl peer"
              placeholder=" "
              type="password"
            />
            <span className="absolute left-3 top-0 text-white/50 text-sm peer-placeholder-shown:top-[13px] peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-xs peer-focus:font-semibold peer-focus:text-[#00bfff]">
              Confirm Password
            </span>
            {errors.cpassword && (
              <p className="text-red-500 text-xs mt-1">
                {errors.cpassword.message}
              </p>
            )}
          </label>

          <button
            type="submit"
            className="border-none outline-none py-2 rounded-xl text-white transition-all bg-[#00bfff] hover:bg-[#00bfff96]"
          >
            Register
          </button>

          <p className="text-sm text-white/70 text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-[#00bfff] hover:underline">
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
