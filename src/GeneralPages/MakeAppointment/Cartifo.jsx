import React from "react";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const Cartifo = ({ item }) => {
  const { user } = useAuth();
  const navigate = useNavigate()
  const location = useLocation()
  const {
    _id,
    name,
    specialty,
    contact,
    next_visit,
    assigned_status,
    image,
    patient_email,
    comment,
    physician_fee,
  } = item;

  const handleSetappointment = (docs) => {
    if (user && user.email) {
      // todo
      const cartItem = {
        itemId:_id,
        name,
        specialty,
        contact,
        next_visit,
        assigned_status,
        image,
        patient_email: user.email,
        comment,
        physician_fee,

      }
      axios.post('http://localhost:5000/assignedphysician', cartItem)
      .then(res =>{
        console.log(res.data)
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "New entry has been saved",
            showConfirmButton: false,
            timer: 1500
          });

      })
    } else {
      Swal.fire({
        title: "Do you want to log in?",
        text: "You need to Login first",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login',{state:{from:location}} )
        }
      });
    }
  };

  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleSetappointment(item)}
            className="btn btn-primary"
          >
            Set Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cartifo;
