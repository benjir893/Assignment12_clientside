import React from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useLocation, useNavigate } from "react-router-dom";

const SetvisitDisplay = ({ item }) => {
  const { user } = useAuth();
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
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSetvisit = (item) => {
    if (user && user.email) {
      const cartItem = {
        itemId: _id,
        image,
        name,
        specialty,
        department,
        next_visit: schedule,
        contact,
        patient_email: user.email,
        physician_fee: visit_fee,
        // comment,
      };

      axiosSecure.post("/assignedphysician", cartItem).then((res) => {
        console.log(res.data);
      });
    } else {
      alert("please log in first");
      navigate("/login", { state: { from: location } });
    }
  };
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img src={image} alt="pic" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{specialty}</p>
        <p>{contact}</p>
        <p>{user?.email}</p>
        <p>{visit_fee}</p>
        {/* <textarea
          placeholder="Add a comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="textarea textarea-bordered"
        ></textarea> */}
        <div className="card-actions justify-end">
          <button
            onClick={() => handleSetvisit(item)}
            className="btn btn-primary"
          >
            Set Visit
          </button>
        </div>
      </div>
    </div>
  );
};

export default SetvisitDisplay;
