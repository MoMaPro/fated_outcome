const InventoryItem = ({ handleAdd, dType, productImage }) => {
  const handler = () => handleAdd(dType);
  return (
    <button style={{ width: "100%" }} onClick={handler}>
      <img src={productImage} alt={dType} />
    </button>
  );
};

export default InventoryItem;
