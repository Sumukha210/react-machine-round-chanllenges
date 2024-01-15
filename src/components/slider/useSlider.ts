import { useEffect, useState } from "react";
import { IuseSlider } from "./types";

const useSlider = ({ slideToShow, containerPadding, slideGap }: IuseSlider) => {
  const [windowSize, setWindowSize] = useState(1200);
  const [activeSlideSet, setActiveSlideSet] = useState(0);

  const slideWidth = Math.round(
    (windowSize - (containerPadding! * 2 - slideGap! * slideToShow)) /
      slideToShow -
      containerPadding!
  );

  useEffect(() => {
    const screenSize = innerWidth;
    setWindowSize(screenSize);
  }, []);

  const handleNextBtn = () => {
    setActiveSlideSet((prev) => prev + slideToShow);
  };

  const handlePrevBtn = () => {
    setActiveSlideSet((prev) => prev - slideToShow);
  };

  return { handleNextBtn, handlePrevBtn, slideWidth, activeSlideSet };
};

export default useSlider;
