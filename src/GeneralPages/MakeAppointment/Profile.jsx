import React, { useContext } from "react";
import useProfile from "../../hooks/useProfile";
import { AuthContext } from "../../Authentication/AuthProvider";
import ProfileInfo from "./ProfileInfo";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [profile] = useProfile();

  return (
    <div className="card bg-base-100 w-auto shadow-xl">
      <figure className="mt-32">
        <img src={user.photoURL} alt="pic" />
      </figure>
      <div className="card-body">
        <div className="flex md:flex-col-2 justify-between">
          <div className="">
            <h2 className="card-title">{user.displayName}</h2>
            <h2 className="card-title">{user.email}</h2>
          </div>
          <button className="btn btn-ghost">Edit Profile</button>
        </div>
        {profile.map((item) => (
          <ProfileInfo key={item._id} item={item}></ProfileInfo>
        ))}
      </div>
    </div>
  );
};

export default Profile;
