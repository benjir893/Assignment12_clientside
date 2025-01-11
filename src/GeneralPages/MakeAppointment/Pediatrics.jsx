import React from "react";
import { Link } from "react-router-dom";

const Pediatrics = ({ item }) => {
  const { image, name, specialty, department, schedule } = item;
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="pic" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <div className="flex md:flex-col-2 gap-10">
          <div className="">
            <p>{specialty}</p>
            <p>{department}</p>
          </div>
          <div className="">
            <p>schedule</p>
            <p>Monday: {schedule.monday}</p>
            <p>Tuesday: {schedule.tuesday}</p>
            <p>Wednesday: {schedule.wednesday}</p>
            <p>Thursday: {schedule.thursday}</p>
            <p>Friday: {schedule.friday}</p>
            <p>Saturday: {schedule.saturday}</p>
            <p>Sunday: {schedule.sunday}</p>
          </div>
        </div>
        <div className="card-actions justify-end">
          <Link to={-1}>
            <button className="btn btn-primary">back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Pediatrics;
