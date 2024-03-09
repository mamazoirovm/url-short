import Image from "next/image";
import React from "react";
import Brand from "../../public/brand.svg";
import Detal from "../../public/detailed.svg";
import Fully from "../../public/fully.svg";
const Advanced = () => {
  return (
    <div>
      <div className="advanced">
        <h3>Advanced Statistics</h3>
        <p className="track">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div className="cards">
        <div className="card card-size">
          <div className="cirlce">
            <Image src={Brand} alt="Brand Recognition" />
          </div>
          <h5>Brand Recognition</h5>
          <p className="card-paragraph">
            Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </div>
        <div className="card card-size top">
          <div className="cirlce">
            <Image src={Detal} alt="Brand Recognition" />
          </div>
          <h5>Detailed Records</h5>
          <p className="card-paragraph">
          Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.
          </p>
        </div>
        <div className="card car-size topx2">
          <div className="cirlce">
            <Image src={Fully} alt="Brand Recognition" />
          </div>
          <h5>Fully Customizable</h5>
          <p className="card-paragraph">
          Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Advanced;
