import React, { useState } from "react";
import theme from "../../../styles/theme";
import styled from "styled-components";
import * as images from "./images";

// //MORE WITH PROPERTIES
// //task-02: Create a helper function and then Create a react solution that
// //would have a function as a property as well as something else be it a string,
// // number or object. Have your custom function consume the other property
// //in some way within your soultion

// //Style to your hearts content
function shuffleArray(array) {
  let currentIndex = array.length;
  let temporaryValue, randomIndex;
  console.log(images);
  while (0 !== currentIndex) {
    //Pick a remaining element
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    //Swap with current element
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

const Solution = ({ myFunction, data }) => {
  //Shuffling the spellbook Array
  const [shuffledArray, setshuffledArray] = useState(
    myFunction([...data.SpellbookArray])
  );

  //Event handler for button ----->WIP
  const handleShuffle = () => {
    console.log(shuffledArray);
    setshuffledArray(myFunction([...data.SpellbookArray]));
  };

  console.log(shuffledArray);

  return (
    <SpellStyle>
      <div>
        <h2>Assorted Spellbooks</h2>
        <h4>{data.stringProp}</h4>
        <ul>
          {shuffledArray.map((spellbook) => {
            // console.log(spellbook);

            return (
              <li>
                <p>{spellbook.title}</p>
                {spellbook.image && (
                  <img src={spellbook.image} alt="spellbook" width="100px" />
                )}
              </li>
            );
          })}
        </ul>
        <button className="button" onClick={handleShuffle}>
          Shuffle
        </button>
      </div>
    </SpellStyle>
  );
};
//And Render Them
const Render = () => {
  const data = {
    stringProp: "Here's a list of the spellbooks we have for sale!",
    SpellbookArray: [
      { title: "Grimoire of Eternal Flame", image: images.fire },
      { title: "Tome of the Enchanted Forest", image: images.plant },
      { title: "Codex of the Undead", image: images.skull },
      { title: "Compendium of Water", image: images.water },
      {
        title: "Liber Novus of Celestial Wonders",
        image: images.biblicalAngel,
      },
    ],
  };
  return <Solution data={data} myFunction={shuffleArray} />;
};

//Styling
const SpellStyle = styled.div`
  h2 {
    color: ${() => theme.primary};
    background-color: ${() => theme.secondary};
  }
  h4 {
    color: ${() => theme.primary};
  }
  button {
    background-color: ${() => theme.secondary};
    color: ${() => theme.primary};
    margin: 1em;
    padding: 10px;
    border-radius: 10px;
  }
  button:hover {
    color: ${() => theme.secondary};
    background-color: ${() => theme.primary};
  }
`;

//leave code below alone
const solution = {
  title: "more_with_properties",
  summary:
    "task-02: Create a helper function and then Create a react solution that would have a function as a property as well as something else be it a string, number or object. Have your custom function consume the other property in some way within your soultion",
  item: <Render />,
};

export default solution; //MORE WITH PROPERTIES
