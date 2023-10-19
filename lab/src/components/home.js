import "./HomeStyles.css";
import HomeData from "./HomeData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <div>
      <h2>Popular Posts</h2>
      <div className="home-posts">
        <div className="postcard">
          <HomeData
            user="User"
            heading="Title"
            text="Description"
            tags="#english #history #crime"
          />

          <HomeData
            user="User"
            heading="Title"
            text="Description"
            tags="#english #history #crime"
          />

          <HomeData
            user="User"
            heading="Title"
            text="Description"
            tags="#english #history #crime"
          />

          <HomeData
            user="User"
            heading="Title"
            text="Description"
            tags="#english #history #crime"
          />

          <HomeData
            user="User"
            heading="Title"
            text="Description"
            tags="#english #history #crime"
          />

          <HomeData
            user="User"
            heading="Title"
            text="Description"
            tags="#english #history #crime"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
