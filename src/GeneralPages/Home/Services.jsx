import Subtitle from "../Banners/Subtitle";
import ServicesDisplay from "./ServicesDisplay";
import useServices from "../../hooks/useServices";

const Services = () => {
  const [services] = useServices()
  return (
    <div>
      <Subtitle
        title={"our services"}
        subtitle={"Meet Our Department Heads"}
      ></Subtitle>
      <div className="lg:grid grid-cols-3 gap-3 content-center">
        {services.map((service) => (
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
