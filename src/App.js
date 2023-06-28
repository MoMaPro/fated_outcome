import { Routes, Route } from "react-router-dom";
import { FOContainer, Homework } from "./components";
import { DiceState } from "./components/FOContainer/logic";
import Header from "./components/Header";
import "./App.css";

function App() {
  const diceState = DiceState();
  return (
    <div style={{ height: "100%" }}>
      <Header />
      <Routes>
        <Route path="/" element={<FOContainer diceState={diceState} />} />
        <Route path="/homework" element={<Homework />} />
      </Routes>
    </div>
  );
}

export default App;
