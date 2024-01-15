import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { twMerge } from "tailwind-merge";

interface SlideArrowBtn {
  type: "next" | "prev";
  className?: string;
  disabled?: boolean;
  onClickHandler: () => void;
}

const SlideArrowBtn: React.FC<SlideArrowBtn> = ({
  onClickHandler,
  type,
  className,
  disabled = false,
}) => {
  return (
    <button
      onClick={onClickHandler}
      className={twMerge(
        `border-[2px] border-gray-400 p-1 rounded-full hover:bg-gray-300 disabled:cursor-not-allowed ${className}`
      )}
      disabled={disabled}
    >
      {type === "prev" ? (
        <IoIosArrowRoundBack size={25} />
      ) : (
        <IoIosArrowRoundForward size={25} />
      )}
    </button>
  );
};

export default SlideArrowBtn;
