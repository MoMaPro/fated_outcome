//todo: import d2 from "./images/D2.png";
import d4 from "./images/D4.png";
import d6 from "./images/D6.png";
import d8 from "./images/D8.png";
import d10 from "./images/D10.png";
import d12 from "./images/D12.png";
import d20 from "./images/D20.png";
import d100 from "./images/D100.png";

export const Dice4 = d4;
export const Dice6 = d6;
export const Dice8 = d8;
export const Dice10 = d10;
export const Dice12 = d12;
export const Dice20 = d20;
export const Dice100 = d100;

export default function getDiceShape(dType) {
  switch (dType) {
    case "d4":
      return d4;
    case "d6":
      return d6;
    case "d8":
      return d8;
    case "d10":
      return d10;
    case "d12":
      return d12;
    case "d20":
      return d20;
    case "d100":
      return d100;
    default:
      return d6;
  }
}
