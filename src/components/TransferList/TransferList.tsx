import TransferContainer from "./TransferContainer";
import UseTransferList from "./useTransferList";

const TransferList = () => {
  const { list, handlePositionArrowClick, handleSelectListItem } =
    UseTransferList();

  const ArrowStyles =
    "border-[2px] border-gray-500 rounded-full h-12 w-12 text-xs grid place-items-center font-bold hover:bg-gray-400";

  return (
    <div className="grid place-items-center min-h-screen">
      <section className="max-w-2xl w-full">
        <header className="text-center mb-20">
          <h1 className="text-4xl font-bold">Transfer List</h1>
        </header>

        <div className="grid grid-cols-12 gap-10">
          <section className="col-span-4">
            <TransferContainer
              list={list}
              position="left"
              onTransferListSelect={handleSelectListItem}
            />
          </section>

          <section className="col-span-4 self-center ">
            <div className="space-y-6 text-center mx-auto grid place-items-center">
              <button
                onClick={handlePositionArrowClick("right")}
                className={ArrowStyles}
              >
                Right
              </button>
              <button
                onClick={handlePositionArrowClick("left")}
                className={ArrowStyles}
              >
                Left
              </button>
            </div>
          </section>

          <section className="col-span-4">
            <TransferContainer
              list={list}
              position="right"
              onTransferListSelect={handleSelectListItem}
            />
          </section>
        </div>
      </section>
    </div>
  );
};

export default TransferList;
