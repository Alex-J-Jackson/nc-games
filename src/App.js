import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import { UserContext } from "./contexts/User";
import { useState } from "react";
import Reviews from "./components/Reviews";
import NavBar from "./components/NavBar";
import ReviewSingleWithComments from "./components/ReviewSingleWithComments";
import ReviewForm from "./components/ReviewForm";

function App() {
  const [user, setUser] = useState("cooljmessy");
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Reviews />} />
          <Route path="/categories" element={<Reviews />} />
          <Route path="/categories/:category" element={<Reviews />} />
          <Route
            path="/reviews/:review_id"
            element={<ReviewSingleWithComments />}
          />
          <Route path="/post-review" element={<ReviewForm />} />
          <Route
            path="/:badpage/*"
            element={
              <p>
                <strong>404</strong>
                <br />
                The requested URL was not found on this server.
              </p>
            }
          />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
