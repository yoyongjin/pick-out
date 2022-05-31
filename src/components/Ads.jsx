import React from "react";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Ads = () => {
  return (
    <Carousel>
      <div>
        <img
          src="https://ui.alopex.io/development/component/carousel/img/1.jpg"
          alt="carousel1"
        />
        <p className="legend">1</p>
      </div>
      <div>
        <img
          src="https://ui.alopex.io/development/component/carousel/img/2.jpg"
          alt="carousel1"
        />
        <p className="legend">2</p>
      </div>
      <div>
        <img
          src="https://ui.alopex.io/development/component/carousel/img/3.jpg"
          alt="carousel1"
        />
        <p className="legend">3</p>
      </div>
      <div>
        <img
          src="https://ui.alopex.io/development/component/carousel/img/4.jpg"
          alt="carousel1"
        />
        <p className="legend">4</p>
      </div>
    </Carousel>
  );
};

export default Ads;
