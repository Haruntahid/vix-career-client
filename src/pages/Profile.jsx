import { Helmet } from "react-helmet-async";
import useAuth from "../hooks/useAuth";

function Profile() {
  const { user } = useAuth();
  return (
    <>
      <Helmet>
        <title>Vix-Career | Profile</title>
      </Helmet>
      <div
        // data-aos="fade-down"
        className="flex flex-col justify-center max-w-2xl mx-auto p-6 shadow-md rounded-xl sm:px-12 bg-bg-color text-txt-color mt-20"
      >
        <img
          src={user.photoURL}
          alt=""
          className="w-32 h-32 mx-auto rounded-full p-1 border-[3px] border-green-500"
        />
        <div className="divider divider-accent mt-6">
          Your Profile Information
        </div>
        <div className="space-y-4 text-center divide-y divide-gray-700">
          <div className="my-2 space-y-1">
            <h2 className="text-xl font-semibold sm:text-2xl mt-5">
              {user.displayName}
            </h2>
            <p className="px-5 text-xs sm:text-base text-gray-400">
              Email : {user.email}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
