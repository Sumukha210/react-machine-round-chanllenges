export type IPosition = "left" | "right";

export interface ITransferList {
  position: IPosition;
  text: string;
  isSelected: boolean;
}
