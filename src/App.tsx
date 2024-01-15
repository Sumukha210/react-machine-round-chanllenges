import { Slider } from "./components/slider";

const dataSlides = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

const App = () => {
  return (
    <>
      <main>
        <Slider
          containerPadding={50}
          slideToShow={3}
          slideGap={15}
          numberOfSlides={dataSlides.length}
        >
          {dataSlides.map((slide, index) => {
            return (
              <div
                key={index}
                className={`border border-gray-600 grid place-items-center h-32`}
              >
                <h3 className="text-5xl font-semibold">{slide}</h3>
              </div>
            );
          })}
        </Slider>
      </main>
    </>
  );
};

export default App;
