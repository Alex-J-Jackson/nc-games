import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import { UserContext } from "./contexts/User";
import { useState } from "react";
import Reviews from "./components/Reviews";
import NavBar from "./components/NavBar";
import ReviewSingleWithComments from "./components/ReviewSingleWithComments";

function App() {
  const [user, setUser] = useState("cooljmessy");
  return (
    <UserContext.Provider value={{ user, setUser }}>
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
    </UserContext.Provider>
  );
}

export default App;
