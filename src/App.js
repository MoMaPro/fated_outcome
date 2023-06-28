import { Routes, Route, Link } from "react-router-dom";
import { FOContainer, Homework } from "./components";
import { DiceState } from "./components/FOContainer/logic";
import "./App.css";

function App() {
  const diceState = DiceState();
  return (
    <div style={{ height: "100%" }}>
      <Routes>
        <Route path="/" element={<FOContainer diceState={diceState} />} />
        <Route path="/homework" element={<Homework />} />
      </Routes>
      <footer style={{ position: "absolute", bottom: "10px" }}>
        <Link style={{ margin: "5px" }} to="/">
          home
        </Link>

        <Link style={{ margin: "5px" }} to="/homework">
          homework
        </Link>
      </footer>
    </div>
  );
}

export default App;
