import React from "react";
import DoctorsInfo from "./DoctorsInfo";

const Doctors = ({doctors}) => {
  return (
    <div>
      {doctors.map((item) => (
        <DoctorsInfo key={item._id} item={item}></DoctorsInfo>
      ))}
    </div>
  );
};

export default Doctors;
