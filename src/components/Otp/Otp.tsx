import { ChangeEvent, useRef, useState } from "react";
import styled from "styled-components";

interface OtpProps {}

type inputElement = ChangeEvent<HTMLInputElement>;

const Otp: React.FC<OtpProps> = () => {
  const NUMBER_OF_INPUTS = 4;
  const fillValues = [...Array(NUMBER_OF_INPUTS).fill("")];
  const [inputValues, setInputValues] = useState(fillValues);
  const fieldsetRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const moveCursor = (ele: inputElement) => {
    const inputVal = Number(ele.target.dataset?.inputnum);

    if (!fieldsetRef.current || !buttonRef.current) return;

    if (inputVal + 1 >= NUMBER_OF_INPUTS) {
      buttonRef.current.removeAttribute("disabled");
      buttonRef.current.focus();
      return;
    }

    console.log(inputVal);
    if (inputVal < NUMBER_OF_INPUTS) {
      fieldsetRef.current.childNodes[inputVal + 1].focus();
    }
  };

  const handleInputFieldChange = (index: number) => (e: inputElement) => {
    setInputValues((prev) => {
      const newVal = [...prev];
      newVal[index] = e.target.value;

      return newVal;
    });

    moveCursor(e);
  };

  return (
    <section className="grid place-items-center min-h-screen">
      <div className="bg-gray-100 w-[300px] rounded-md pt-10">
        <div className="text-center">
          <h2 className="text-center text-3xl font-bold">Verification</h2>
          <p className="font-semibold text-gray-600">
            Enter verification code sent your <br /> Mobile number +91 921223444{" "}
          </p>
        </div>

        <fieldset
          ref={fieldsetRef}
          className="grid grid-cols-4 gap-3 my-8 px-6"
        >
          {fillValues.map((_, index) => (
            <InputField
              data-inputnum={index}
              type="number"
              className="border aspect-square rounded-sm outline-blue-800 text-center text-2xl"
              key={index}
              value={inputValues[index]}
              onChange={handleInputFieldChange(index)}
            />
          ))}
        </fieldset>

        <button
          ref={buttonRef}
          disabled
          className="block disabled:bg-blue-300 disabled:cursor-not-allowed  bg-blue-500 text-white text center font-bold text-lg w-full py-3"
        >
          Submit
        </button>
      </div>
    </section>
  );
};

export default Otp;

const InputField = styled.input`
  /* Chrome, Safari, Edge, Opera */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  &[type="number"] {
    -moz-appearance: textfield;
  }
`;
