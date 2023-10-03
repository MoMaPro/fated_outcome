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
  width: 10rem;
  height: 100%;
  background: url(${displayTray});
  background-size: 90%;
  background-repeat: no-repeat;
  margin: 0;
  padding: 0;
  @media (max-width: 600px) {
    width: 9rem;
  }
  &:hover {
    cursor: pointer;
  }
`;
