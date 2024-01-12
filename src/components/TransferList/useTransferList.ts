import { useState } from "react";
import { IPosition, ITransferList } from "./types";

const data: ITransferList[] = [
  { position: "left", text: "first", isSelected: false },
  { position: "left", text: "second", isSelected: false },
  { position: "left", text: "third", isSelected: false },
  { position: "left", text: "fourth", isSelected: false },
];

const useTransferList = () => {
  const [list, setList] = useState<ITransferList[]>(data);

  const moveList = (pos: IPosition) => {
    setList((prev) => {
      return prev.map((item) => {
        if (item.isSelected) {
          return { ...item, isSelected: false, position: pos };
        }
        return item;
      });
    });
  };

  const handleSelectListItem = (key: string, pos: IPosition) => {
    setList((prev) => {
      return prev.map((item) => {
        if (item.text === key) {
          return { ...item, isSelected: !item.isSelected, position: pos };
        }
        return item;
      });
    });
  };

  const handlePositionArrowClick = (pos: IPosition) => () => {
    moveList(pos);
  };

  return { list, handlePositionArrowClick, handleSelectListItem };
};

export default useTransferList;
