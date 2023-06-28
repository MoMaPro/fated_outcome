import { Routes, Route, Link } from "react-router-dom";
import { FOContainer, Homework } from "./components";
import { DiceState } from "./components/FOContainer/logic";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const diceState = DiceState();
  return (
    <div style={{ height: "100%" }}>
      <Routes>
        <Route path="/" element={<FOContainer diceState={diceState} />} />
        <Route path="/homework" element={<Homework />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
