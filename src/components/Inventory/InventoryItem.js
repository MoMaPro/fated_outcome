const InventoryItem = ({ handleAdd, dType }) => {
  const handler = () => handleAdd(dType);
  return (
    <button style={{ width: "100%" }} onClick={handler}>
      {dType}
    </button>
  );
};

export default InventoryItem;
