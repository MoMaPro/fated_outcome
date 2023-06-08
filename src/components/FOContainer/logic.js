export default function randomizor(dType) {
  let d;
  switch (dType) {
    case "d4":
      d = 4;
      break;
    case "d6":
      d = 6;
      break;
    case "d8":
      d = 8;
      break;
    case "d10":
      d = 10;
      break;
    case "d12":
      d = 12;
      break;
    case "d20":
      d = 20;
      break;
    case "d100":
      d = 10;
      break;
    default:
      d = 6;
      break;
  }
  let result = Math.ceil(Math.random() * d);
  return dType == "d100" ? (result == 10 ? "00" : result * 10) : result;
}
