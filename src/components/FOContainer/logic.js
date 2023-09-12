import { useEffect } from "react";
import { useState } from "react";

const DiceState = () => {
  const [modifier, setModifier] = useState(0);
  const [dice, setDice] = useState([]);
  const [total, setTotal] = useState();
  const [currentQuote, setCurrentQuote] = useState("Welcome to meow shop!");

  const handleModifier = (number) => {
    setModifier(number);
  };

  //Dice total & modifier
  useEffect(() => {
    if (dice.length > 0) {
      const newTotal =
        dice.reduce((acc, die) => acc + die.value, 0) + Number(modifier);
      setTotal(newTotal);
    }
  }, [dice, modifier, setTotal]);

  const handleRemoval = (dIndex) => {
    setDice((prevDice) => prevDice.filter((_, index) => index !== dIndex));
  };

  //Dice randomizer
  const diceChange = () => {
    if (dice.length === 0) {
      handleAdd("d20");
    } else {
      setDice((oldDice) =>
        oldDice.map(({ dType }) => {
          return { dType: dType, value: randomizor(dType) };
        })
      );
    }
  };

  //Adds dice
  const handleAdd = (dType) => {
    setDice((prevDice) => [
      ...prevDice,
      { dType: dType, value: randomizor(dType) },
    ]);
  };

  //Array of quotes/puns
  const quotearray = quotes;

  //shuffle function
  const shuffleArray = (array) => {
    let shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  //Clears field & shuffles quote in speech bubble
  const clearDiceState = () => {
    setDice([]);
    setTotal(undefined);
    const shuffledQuotes = shuffleArray(quotearray);
    setCurrentQuote(shuffledQuotes[0]);
  };

  return {
    dice,
    handleRemoval,
    diceChange,
    handleAdd,
    clearDiceState,
    handleModifier,
    modifier,
    total,
    currentQuote,
    setCurrentQuote,
    quotearray,
    shuffleArray,
  };
};

function randomizor(dType) {
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
      d = 100;
      break;
    default:
      d = 6;
      break;
  }
  let result = Math.ceil(Math.random() * d);
  return result;
}

export { randomizor, DiceState };

const quotes = [
  "frrreel the meower of the dice!!!",
  "Don't give up! Be purrsistent!",
  "Your fate could be a cat-tastrophe or purr-fection!",
  "With my guidance, your destiny's in good paws.",
  "Dice in fish, paw on heart, roll the future I foresaw!",
  "Fortune favors the feline! *wink*",
  "Chaos everywhere MEOW! *throws dice in the air*",
  "When Meowlin purrrrs the outcome stirs.",
  "The dice don't lie, but I might keep secrets.",
  "Making 'knead'-ed rolls since... well, always!",
  "Dice-covery is my specialty. *yaaaawn*",
  "Why did the bard bring a ladder to the dungeon? To reach the high 'notes'!",
  "What's a vampire's favorite fruit? A 'blood' orange, of course!",
  "Why did the rogue become a bard? He wanted to steal the show!",
  "What do you call a cleric who tells jokes?  heal-larious!",
  "The warlock's favorite snack? Hex-mex!",
  "Squirrely business is nuts!",
  "Magic 'beets' all expectations.",
  "Owl you need is a little magic.",
  "When a beholder needs glasses, it's a real eye-opener.",
  "I tried to make a deal with a devil, but it was a real hell-ish negotiation!",
  "What did the wizard say when he ran out of spell slots? I'm out of abracadabra!",
  "When in doubt, polymorph it out!",
  "When life gives you gelatinous cubes, make gelatinous cube-ade!",
];
