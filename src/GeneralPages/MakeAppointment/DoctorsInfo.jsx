import React from "react";
import useDoctors from "../../hooks/useDoctors";

const DoctorsInfo = () => {
    const[mydocs]=useDoctors()
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img
          src={mydocs.image}
          alt="pic"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{mydocs.name}</h2>
        <p>{mydocs.specialty}</p>
        <p>{mydocs.department}</p>
        <p>SCHEDULE</p>
        {/* <p>{mydocs.schedule.monday}</p> */}
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Watch</button>
        </div>
      </div>
    </div>
  );
};

export default DoctorsInfo;
