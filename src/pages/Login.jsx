import { Link, useNavigate } from "react-router-dom";
import { IoMdMail } from "react-icons/io";
import { FaKey, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { toast } from "react-toastify";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import { Helmet } from "react-helmet-async";

function Login() {
  const { signIn, googleLogin, setUser } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // passToogle
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // handel toogle
  const handelToogle = () => {
    setShowPassword(!showPassword);
  };
  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  //   google login
  const handelGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        axios
          .post(
            `${import.meta.env.VITE_API_URL}/jwt`,
            {
              email: result?.user?.email,
            },
            { withCredentials: true }
          )
          .then((res) => console.log(res.data));
        setUser(result.user);
        navigate(location?.state ? location.state : "/");
        toast.success("Log in successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // handel login
  const handelLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!email || !password) {
      toast.error("You need to provide email and password");
      return;
    }

    // error state empty when all correct
    setError("");

    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        axios
          .post(
            `${import.meta.env.VITE_API_URL}/jwt`,
            {
              email: result?.user?.email,
            },
            { withCredentials: true }
          )
          .then((res) => console.log(res.data));
        e.target.reset();
        // navigate after login
        navigate(location?.state ? location.state : "/");
        toast.success("Log in successfully");
      })
      .catch((err) =>
        setError(
          err.message.replace(
            "Firebase: Error (auth/invalid-credential).",
            "Invalid Credential! Make Sure Your email and password is correct"
          )
        )
      );
  };

  return (
    <>
      <Helmet>
        <title>Vix-Career | Login</title>
      </Helmet>
      <div className="flex justify-center items-center my-12">
        <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg  lg:max-w-6xl ">
          <div
            className="hidden bg-cover bg-center lg:block lg:w-1/2"
            style={{
              backgroundImage: `url("https://i.ibb.co/JpNHHfG/3071357.jpg")`,
            }}
          ></div>

          <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
            <div className="flex justify-center mx-auto">
              <img className="w-auto h-7 sm:h-8" src="" alt="" />
            </div>

            <p className="mt-3 text-xl font-semibold text-center text-gray-600 ">
              Welcome Back Dude!
            </p>

            <div
              onClick={handelGoogleLogin}
              className="flex cursor-pointer items-center justify-center my-5 text-gray-600 transition-colors duration-300 transform border rounded-lg hover:bg-bg-color"
            >
              <div className="mr-2 py-2">
                <svg className="w-6 h-6" viewBox="0 0 40 40">
                  <path
                    d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                    fill="#FFC107"
                  />
                  <path
                    d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                    fill="#FF3D00"
                  />
                  <path
                    d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                    fill="#4CAF50"
                  />
                  <path
                    d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                    fill="#1976D2"
                  />
                </svg>
              </div>

              <span className="py-3 font-bold text-center">
                Sign in with Google
              </span>
            </div>

            <div className="flex items-center justify-between mt-4">
              <span className="w-1/5 border-b  lg:w-1/4"></span>

              <div className="text-xs text-center text-gray-500 uppercase  hover:underline">
                or login with email
              </div>

              <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
            </div>
            <form onSubmit={handelLogin}>
              <div className="mt-4">
                <label
                  className="block mb-2 text-sm font-medium text-gray-600 "
                  htmlFor="LoggingEmailAddress"
                >
                  Email Address
                </label>
                <label className="input input-bordered flex items-center gap-2">
                  <IoMdMail className="text-gray-500" />
                  <input
                    type="email"
                    className="grow text-gray-500"
                    placeholder="Email"
                    name="email"
                  />
                </label>
              </div>

              <div className="mt-4 relative">
                <div className="flex justify-between ">
                  <label
                    className="block mb-2 text-sm font-medium text-gray-600 "
                    htmlFor="loggingPassword"
                  >
                    Password
                  </label>
                </div>

                <label className="input input-bordered flex items-center gap-2">
                  <FaKey className="text-gray-500" />
                  <input
                    type={showPassword ? "text" : "password"}
                    className="grow text-gray-500"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                  />
                </label>
                {password && (
                  <span
                    className="absolute top-[55%] right-[3%] "
                    onClick={handelToogle}
                  >
                    {showPassword ? (
                      <FaRegEye className="text-gray-500" size={20} />
                    ) : (
                      <FaRegEyeSlash className="text-gray-500" size={20} />
                    )}
                  </span>
                )}
              </div>
              {error && <p className="mt-2 text-rose-500">{error}</p>}
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-btn-color rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
                >
                  Login
                </button>
              </div>
            </form>

            <p className="text-[16px] font-semibold text-gray-600 my-6 text-center">
              Don&apos;t have an account?{" "}
              <Link to={"/register"} className="text-btn-color">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
