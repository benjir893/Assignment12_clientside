import React, { useContext } from "react";
import { AuthContext } from "../../Authentication/AuthProvider";
import { Link } from "react-router-dom";
import AppointmentCart from "./AppointmentCart";

const ProfileInfo = ({ item }) => {
  const { user } = useContext(AuthContext);
  const { contact, address, assigned_physician, next_visit, status } = item;
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
              <p><span className="font-semibold">Currently Assigned Physician: </span></p>
              {/* <p>Name: {assigned_physician.name}</p>
              <p>Specialty: {assigned_physician.specialty}</p>
              <p>Contact: {assigned_physician.contact_number}</p>
              <p>Next Visit: {assigned_physician.next_visit}</p> */}
              <AppointmentCart></AppointmentCart>
            </div>
            <div className="flex md:flex-col-2 gap-1">
              <Link to={'/appointmentdetails'}><button className="btn btn-primary">Appointment Details</button></Link>
              <Link to={'/appointmentcart'}><button className="btn btn-primary">Make an Appointment</button></Link>
            </div>
          </div>
          <p>Satatus: <span className="text-lime-500">{status}</span></p>
        </>
      )}
    </div>
  );
};

export default ProfileInfo;
