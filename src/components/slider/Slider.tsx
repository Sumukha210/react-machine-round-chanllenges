import { twMerge } from "tailwind-merge";
import SlideArrowBtn from "./SlideArrowBtn";
import { SliderWrapper } from "./styles";
import { IuseSlider } from "./types";
import useSlider from "./useSlider";

interface SliderProps extends IuseSlider {
  children: React.ReactNode;
  numberOfSlides: number;
  className?: string;
}

const Slider: React.FC<SliderProps> = ({
  slideGap = 10,
  slideToShow,
  containerPadding = 32,
  children,
  numberOfSlides,
  className,
}) => {
  const { activeSlideSet, handleNextBtn, handlePrevBtn, slideWidth } =
    useSlider({ slideToShow, slideGap, containerPadding });

  return (
    <section className={twMerge(`mt-10 ${className}`)}>
      <SliderWrapper
        className="flex items-center"
        slideWidth={slideWidth}
        activeSlideSet={activeSlideSet}
        style={{
          paddingInline: `${containerPadding}px`,
          columnGap: `${slideGap}px`,
        }}
      >
        {children}
      </SliderWrapper>

      <div className="flex items-center justify-center mt-10 gap-x-4 font-semibold">
        <SlideArrowBtn
          type="prev"
          onClickHandler={handlePrevBtn}
          disabled={activeSlideSet === 0}
        />

        <SlideArrowBtn
          type="next"
          onClickHandler={handleNextBtn}
          disabled={activeSlideSet > numberOfSlides - slideToShow}
        />
      </div>
    </section>
  );
};

export default Slider;
