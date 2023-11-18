import FetchPosts from "../Fetch/FetchPosts";
import SelectedPost from "../Pages/Page";
import "./HomeStyles.css";

function Home() {
  return (
    <div className="home">
      <FetchPosts />
    </div>
  );
}

export default Home;
