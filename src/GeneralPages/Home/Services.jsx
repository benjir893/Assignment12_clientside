import React, { useEffect, useState } from "react";
import Subtitle from "../Banners/Subtitle";
import { data } from "autoprefixer";
import { key } from "localforage";
import ServicesDisplay from "./ServicesDisplay";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("service.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <Subtitle
        title={"our services"}
        subtitle={"Meet Our Department Heads"}
      ></Subtitle>
      <div className="lg:grid grid-cols-2 gap-3 content-center">
        {services?.map((service) => (
          <ServicesDisplay
            key={service._id}
            service={service}
          ></ServicesDisplay>
        ))}
      </div>
    </div>
  );
};

export default Services;
