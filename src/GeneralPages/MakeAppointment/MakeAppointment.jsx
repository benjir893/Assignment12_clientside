import { useParams } from "react-router-dom";
import imgbanner from "../../../src/assets/makeappBan.jpeg";
import useDoctors from "../../hooks/useDoctors";
import Cover from "../Department/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Profile from "./Profile";
import ProfileApi from "./ProfileApi";
import Cardiology from "./Cardiology";
import Doctors from "./Doctors";
import Pediatrics from "./Pediatrics";
import Dermatology from "./Dermatology";
import Endocrinology from "./Endocrinology";

const MakeAppointment = () => {
  const departments = [
    "Cardiology",
    "Pediatrics",
    "Dermatology",
    "Endocrinology",
  ];
  const { department } = useParams();
  console.log(department);
  const initialIndex = departments.indexOf(department);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [doctors] = useDoctors();
  const cardiology = doctors.filter((item) => item.department === "Cardiology");
  const pediatrics = doctors.filter((item) => item.department === "Pediatrics");
  const dermatology = doctors.filter(
    (item) => item.department === "Dermatology"
  );
  const endocrinology = doctors.filter(
    (item) => item.department === "Endocrinology"
  );

  return (
    <div className="">
      <Helmet>
        <title>Benjir|MakeAppointment</title>
      </Helmet>
      <Profile></Profile>
      {/* <ProfileApi></ProfileApi> */}
      {/* <Cover image={imgbanner} title={"make an appointment"}></Cover> */}
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Cardiology</Tab>
          <Tab>Pediatrics</Tab>
          <Tab>Dermatology</Tab>
          <Tab>Endocrinology</Tab>
        </TabList>
        <TabPanel>
          {cardiology.map((item) => (
            <Cardiology key={item._id} item={item}></Cardiology>
          ))}
          {/* <Doctors doctors={cardiology}></Doctors> */}
        </TabPanel>
        <TabPanel>
          {pediatrics.map((item) => (
            <Pediatrics key={item._id} item={item}></Pediatrics>
          ))}
        </TabPanel>
        <TabPanel>{
          dermatology.map(item =><Dermatology key={item._id} item = {item}></Dermatology>)
          }</TabPanel>
        <TabPanel>
          {
            endocrinology.map(item =><Endocrinology key={item._id} item={item}></Endocrinology>)
          }
        </TabPanel>
      </Tabs>
    </div>
  );
};
export default MakeAppointment;
