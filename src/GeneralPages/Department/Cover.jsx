import React from "react";
import Subtitle from "../Banners/Subtitle";
import { Parallax } from "react-parallax";

const Cover = ({ image, title }) => {
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={image}
      bgImageAlt="the dog"
      strength={-200}
    >
      <div
        className="hero min-h-screen"
        // style={{
        //   backgroundImage: `url("${image}")`,
        // }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <Subtitle
              title={title}
              subtitle={"We Never Compromise with Quality"}
            ></Subtitle>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
