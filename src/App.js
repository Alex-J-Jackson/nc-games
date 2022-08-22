import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Reviews from "./components/Reviews";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Reviews />} />
        <Route path="/reviews/:category" element={<Reviews />} />
      </Routes>
    </div>
  );
}

export default App;
