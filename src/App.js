import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Reviews from "./components/Reviews";
import NavBar from "./components/NavBar";
import ReviewSingleWithComments from "./components/ReviewSingleWithComments";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Reviews />} />
        <Route path="/:category" element={<Reviews />} />
        <Route
          path="/reviews/:review_id"
          element={<ReviewSingleWithComments />}
        />
      </Routes>
    </div>
  );
}

export default App;
