import React from "react";

const AppointmentDetailsDisplay = ({ item }) => {
  const { name, specialty, contact, next_visit, assigned_status, image } = item;
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl mt-16">
        <figure>
          <img className="w-60 h-60 rounded-lg" src={image} alt="pic" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{specialty}</p>
          <p>{contact}</p>
          <p>{next_visit}</p>
          {assigned_status === "current" ? (
            <>
              <p className="text-red-500 font-semibold">{assigned_status}</p>
            </>
          ) : (
            <>
              <p className="text-lime-500">{assigned_status}</p>
            </>
          )}

          <div className="card-actions justify-end">
            <button className="btn btn-primary">Rate your physician</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentDetailsDisplay;
