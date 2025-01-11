import React from "react";
import useProfile from "../../hooks/useProfile";
import ProfileInfo from "./ProfileInfo";

const ProfileApi = () => {
  const [profile] = useProfile();
  return (
    <div>
      {profile.map((item) => (
        <ProfileInfo key={item.id} item={item}></ProfileInfo>
      ))}
    </div>
  );
};

export default ProfileApi;
