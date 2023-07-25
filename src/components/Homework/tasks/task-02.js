import React, { useState } from "react";
import theme from "../../../styles/theme";
import styled from "styled-components";

//MORE WITH PROPERTIES
//task-02: Create a helper function and then Create a react solution that
//would have a function as a property as well as something else be it a string,
// number or object. Have your custom function consume the other property
//in some way within your soultion

//Goals:I want to create a spellbook that contains spells.
//Each spell has to have a lvl, name, range and description.
//Onclick the button adds the spells entered into the text fields below the form.

//Style to your hearts content
//State Management
const Spellbook = ({ spellbookName }) => {
  const [spells, setSpells] = useState([]);

  const handleAddSpell = (event) => {
    event.preventDefault();
    const { level, name, range, description } = event.target.elements;

    //Object with form input values
    const newSpell = {
      level: level.value,
      name: name.value,
      range: range.value,
      description: description.value,
    };
    //Adds new spells to the spell list
    setSpells((prevSpells) => [...prevSpells, newSpell]);

    event.target.reset();
  };

  return (
    <SpellStyle>
      <div>
        <img src={require("./images/skull.png")} alt="skull" width={"45%"} />
        <h2>{spellbookName}</h2>

        <p>
          <strong>
            Essential for wizards, a spellbook is a leather-bound tome with 100
            blank vellum pages suitable for recording spells.
          </strong>
        </p>
      </div>
      <div>
        <form onSubmit={handleAddSpell}>
          <label>
            Level:
            <input type="text" name="level" required />
          </label>
          <label>
            Name:
            <input type="text" name="name" required />
          </label>
          <label>
            Range:
            <input type="text" name="range" required />
          </label>
          <label>
            Description:
            <input type="text" name="description" required />
          </label>
          <button type="submit">Add Spell</button>
        </form>
        <div>
          {spells.map((info, index) => (
            <div key={index}>
              <h3>
                Level{info.level}: {info.name}
              </h3>
              <p>Range: {info.range}</p>
              <p>Description:{info.description}</p>
            </div>
          ))}
        </div>
      </div>
    </SpellStyle>
  );
};

//And Render Them
const Render = () => {
  return (
    <Spellbook spellbookName="Grimoire of Eternal Skull Crushing: Volume II " />
  );
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
export default solution;
