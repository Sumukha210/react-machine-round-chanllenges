import { IPosition, ITransferList } from "./types";

interface TransferContainerProps {
  list: ITransferList[];
  position: IPosition;
  onTransferListSelect: (key: string, position: IPosition) => void;
}

const TransferContainer: React.FC<TransferContainerProps> = ({
  list,
  position,
  onTransferListSelect,
}) => {
  return (
    <div className="shadow-md shadow-gray-400 h-[300px]  px-3 py-4 rounded-md space-y-4">
      {list.map(({ isSelected, position: pos, text }) => (
        <div
          onClick={() => onTransferListSelect(text, position)}
          key={text}
          className={`${position != pos && "hidden"} ${
            isSelected && "bg-black text-white"
          } border border-gray-400  text-center p-2 hover:bg-gray-400 cursor-pointer`}
        >
          <h3 className="font-medium capitalize">{text}</h3>
        </div>
      ))}
    </div>
  );
};

export default TransferContainer;
