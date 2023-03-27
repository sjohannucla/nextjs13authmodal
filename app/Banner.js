import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function Banner() {
  return (
    <div className="relative">
      <div className="absolute bottom-0 w-full bg-gradient-to-t from-gray-100 to-transparent" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={3000}
      >
       {/* <div>
          <img
            loading="lazy"
            src="/arches1.jpg"
             style={{ width: 1700, height: 1000 }}
            alt="Arches"
          />
        </div>  */}
        <div>
          <img
            loading="lazy"
            src="/SideView.jpeg"
             style={{ width: 1700, height: 800 }}
            alt="Home"
          />
        </div> 
        <div>
          <img
            loading="lazy"
            src="/poolatnight.jpeg"
             style={{ width: 1700, height: 900 }}
            alt="Home"
          />
        </div> 
        {/* <div>
          <img
            loading="lazy"
            src="https://links.papareact.com/gi1"
            style={{ width: 1700, height: 400 }}
          />
        </div> */}

        <div>
          <img loading="lazy" src="https://links.papareact.com/6ff" 
           style={{ width: 1700, height: 400 }}
           />
        </div>
        <div>
          <img loading="lazy" src="https://links.papareact.com/7ma" 
             style={{ width: 1700, height: 400 }}
            />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
