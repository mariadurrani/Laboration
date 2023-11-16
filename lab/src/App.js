import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import FetchUsers from "./components/Fetch/FetchUsers";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NewPost from "./components/NewPost/NewPost";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <FetchUsers />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newpost" element={<NewPost />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
