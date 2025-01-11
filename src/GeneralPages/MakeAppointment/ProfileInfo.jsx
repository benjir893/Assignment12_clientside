import React, { useContext } from "react";
import { AuthContext } from "../../Authentication/AuthProvider";

const ProfileInfo = ({ item }) => {
  const { user } = useContext(AuthContext);
  const { contact, address, assigned_physician, status } = item;
  return (
    <div className="">
      {user.email === contact.email && (
        <>
          <p>Contact: {contact.phone}</p>
          <div className="flex md:flex-col-3 justify-between">
            <div className="">
              <address>
                <p>Street: {address.street}</p>
                <p>City: {address.city}</p>
                <p>State: {address.state}</p>
                <p>Zip_Code: {address.zip_code}</p>
              </address>
            </div>
            <div className="">
              <p><span className="font-semibold">Assigned Physician: </span></p>
              <p>Name: {assigned_physician.name}</p>
              <p>Specialty: {assigned_physician.specialty}</p>
              <p>Contact: {assigned_physician.contact_number}</p>
            </div>
            <div className="">
              <button className="btn btn-primary">Make an Appointment</button>
            </div>
          </div>
          <p>Satatus: <span className="text-lime-500">{status}</span></p>
        </>
      )}
    </div>
  );
};

export default ProfileInfo;
