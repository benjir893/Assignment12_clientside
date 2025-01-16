import React from "react";
import useAssignedphysician from "../../hooks/useAssignedphysician";
import AppointmentDetailsDisplay from "./AppointmentDetailsDisplay";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const AppointmentDetails = () => {
    const {user} = useAuth();
    const userEmail = user.email ||""
  const [physicians] = useAssignedphysician();
  const user_physicians = physicians.filter(item => item.patient_email === userEmail )
  return (
    <div className="">
      <div className="grid md:grid-cols-2 gap-2 justify-between">
        {user_physicians.map((item) => (
          <AppointmentDetailsDisplay
            key={item._id}
            item={item}
          ></AppointmentDetailsDisplay>
        ))}
      </div>
      <Link to={-1}>
        <button className="btn btn-ghost">Back</button>
      </Link>
    </div>
  );
};

export default AppointmentDetails;
