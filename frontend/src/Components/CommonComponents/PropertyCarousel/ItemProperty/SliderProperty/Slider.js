import React, { useState } from "react";
import Dot from "./Dot";
import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";

const Slider = ({ imgSrc }) => {
  const [activeSlide, setActiveSlide] = useState(1);

  function handleLeftArrow() {
    console.log("sdfdss");
    if (activeSlide === 1) {
      setActiveSlide(activeSlide);
    } else {
      let newActiveSlide = activeSlide - 1;
      setActiveSlide(newActiveSlide);
    }
  }

  function handleRightArrow() {
    if (activeSlide === 5) {
      setActiveSlide(activeSlide);
    } else {
      let newActiveSlide = activeSlide + 1;
      setActiveSlide(newActiveSlide);
    }
  }

  function handleDots(e) {
    let newActiveSlide = +e.currentTarget.value;
    setActiveSlide(newActiveSlide);
  }

  return (

    <div className="slider-images relative ">
      {imgSrc.map((img, index) => (
        <img
          key={index}
          className={`w-full h-56 ${activeSlide === ++index ? "block" : "hidden"
            } `}
          src={`../images/properties/${img}`}
          alt="Slider-1"
        />
      ))}


      <LeftArrow handleLeftArrow={handleLeftArrow} />
      <RightArrow handleRightArrow={handleRightArrow} />

      <div className="dots absolute left-0 right-0 mx-auto top-[90%] flex justify-center gap-x-4 ">
        <Dot
          handleDots={handleDots}
          activeSlide={activeSlide}
          slideNumber={1}
        />
        <Dot
          handleDots={handleDots}
          activeSlide={activeSlide}
          slideNumber={2}
        />
        <Dot
          handleDots={handleDots}
          activeSlide={activeSlide}
          slideNumber={3}
        />
        <Dot
          handleDots={handleDots}
          activeSlide={activeSlide}
          slideNumber={4}
        />
        <Dot
          handleDots={handleDots}
          activeSlide={activeSlide}
          slideNumber={5}
        />
      </div>
    </div>
  );
};

export default Slider;
