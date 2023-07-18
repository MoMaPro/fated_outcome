const InventoryItem = ({ handleAdd, dType, productImage }) => {
  const handler = () => handleAdd(dType);
  return (
    <button style={{ width: "100%", background: "none" }} onClick={handler}>
      <img src={productImage} alt={dType} width={"100%"} />
    </button>
  );
};

export default InventoryItem;
