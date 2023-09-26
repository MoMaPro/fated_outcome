import { displayTray } from "./wares";
import styled from "styled-components";

const InventoryItem = ({ iFunction, dType, productImage, index }) => {
  const handler = () => (dType === "mod" ? iFunction() : iFunction(dType));
  return (
    <ItemStyle style={{ zIndex: 9 - index }} onClick={handler}>
      <img src={productImage} alt={dType} width={"100%"} />
    </ItemStyle>
  );
};

export default InventoryItem;

const ItemStyle = styled.div`
  width: 126px;
  height: 100%;
  background: url(${displayTray});
  background-size: 90%;
  background-repeat: no-repeat;
  margin: 0 -16px 0 0;
  padding: 0;

  &:hover {
    cursor: pointer;
  }
`;
