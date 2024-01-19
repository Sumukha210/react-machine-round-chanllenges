import { ChangeEvent, useEffect, useRef, useState } from "react";
import styled from "styled-components";

interface OtpProps {}

type inputElement = ChangeEvent<HTMLInputElement>;

const Otp: React.FC<OtpProps> = () => {
  const NUMBER_OF_INPUTS = 4;
  const fillValues = [...Array(NUMBER_OF_INPUTS).fill("")];
  const [inputValues, setInputValues] = useState(fillValues);
  const fieldsetRef = useRef<HTMLFieldSetElement>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (fieldsetRef.current) {
      const firstInput = fieldsetRef.current.childNodes[0];
      setInputFocus(firstInput);
    }
  }, []);

  const setInputFocus = (ele: ChildNode) =>
    ele instanceof Element && (ele as HTMLElement).focus();

  const moveCursor = (ele: React.ChangeEvent<HTMLInputElement>) => {
    const inputVal = Number(ele.target.dataset?.inputnum);

    if (!fieldsetRef.current || !buttonRef.current) return;

    if (inputVal + 1 >= NUMBER_OF_INPUTS) {
      buttonRef.current.removeAttribute("disabled");
      buttonRef.current.focus();
      return;
    }

    const nextInput = fieldsetRef.current.childNodes[inputVal + 1];
    setInputFocus(nextInput);
  };

  const handleInputFieldChange = (index: number) => (e: inputElement) => {
    const inputVal = e.target.value;
    setInputValues((prev) => {
      const newVal = [...prev];
      if (newVal[index]?.length) {
        newVal[index] = inputVal[1];

        return newVal;
      }
      newVal[index] = inputVal;

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
