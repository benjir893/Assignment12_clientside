import React from "react";

const ServicesDisplay = ({ service }) => {
  const { department, chairperson, image } = service;
  return (
    <div>
      <div className="lg:flex flex-row gap-4">
        <img className="w-20 h-20 rounded-full" src={image} alt="" />
        <div className="">
          <h1>{department}</h1>
          <h1>{chairperson}</h1>
        </div>
      </div>
    </div>
  );
};

export default ServicesDisplay;
