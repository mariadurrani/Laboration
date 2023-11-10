import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import FetchPosts from "./components/Fetch/FetchPosts.js";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Home />
        <Routes>
          <Route path="/" exact component={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
