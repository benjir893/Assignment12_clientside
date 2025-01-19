import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { axiosSecure } from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const Cardiology = ({ item }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const {
    _id,
    image,
    name,
    specialty,
    department,
    schedule,
    contact,
    visit_fee,
  } = item;

  const handleSetvisit = (item) => {
    if (user && user.email) {
      const carItem = {
        itemId: _id,
        image,
        name,
        specialty,
        next_visit: schedule.monday,
        contact,
        patient_email: user.email,
        comment: "no comment",
        assigned_status: "current",
        physician_fee: visit_fee,
      };
      axiosSecure.post("/assignedphysician", carItem).then((res) => {
        console.log(res.data);
        if(res.data.insertedId){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} has been assigned a visit for you`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    } else {
      Swal.fire({
        title: "Are you Logged in or Registered?",
        text: "You need to log in or register first!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes!",
      }).then((result) => {
        if (result.isConfirmed) {
         navigate('/login', {state:{from:location}})
        }
      });
    }
  };
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
          <button
            onClick={() => handleSetvisit(item)}
            className="btn btn-primary"
          >
            Set a Visit
          </button>
          {/* <Link to={'/setvisit'}><button className="btn btn-primary">Set a Visit</button></Link> */}
        </div>
      </div>
    </div>
  );
};

export default Cardiology;
