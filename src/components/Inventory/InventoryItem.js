import { displayTray } from "./wares";
const InventoryItem = ({ handleAdd, dType, productImage }) => {
  const handler = () => handleAdd(dType);
  return (
    <div
      style={{
        width: "126px",
        height: "100%",
        background: `url(${displayTray})`,
        backgroundSize: "90%",
        backgroundRepeat: "no-repeat",
        margin: 0,
        padding: 0,
      }}
      onClick={handler}
    >
      <img src={productImage} alt={dType} width={"100%"} />
    </div>
  );
};

export default InventoryItem;
