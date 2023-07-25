import { displayTray } from "./wares";
const InventoryItem = ({ handleAdd, dType, productImage }) => {
  const handler = () => handleAdd(dType);
  return (
    <button
      style={{
        width: "100%",
        background: `url(${displayTray})`,
        backgroundSize: "100%",
        padding: 0,
      }}
      onClick={handler}
    >
      <img src={productImage} alt={dType} width={"100%"} />
    </button>
  );
};

export default InventoryItem;
