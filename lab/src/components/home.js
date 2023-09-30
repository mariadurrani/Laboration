import "./HomeStyles.css";
import HomeData from "./HomeData";

function Home() {
  return (
    <div>
      <h2>Popular Posts</h2>
      <div className="home-posts">
        <div className="postcard">
          <HomeData user="User" heading="Title" text="Description" />

          <HomeData user="User" heading="Title" text="Description" />

          <HomeData user="User" heading="Title" text="Description" />

          <HomeData user="User" heading="Title" text="Description" />

          <HomeData user="User" heading="Title" text="Description" />

          <HomeData user="User" heading="Title" text="Description" />
        </div>
      </div>
    </div>
  );
}

export default Home;
