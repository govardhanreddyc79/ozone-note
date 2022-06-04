import "./App.css";
import react from "react";
import { Home } from "./pages";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      </div>
      )
}

export default App;
