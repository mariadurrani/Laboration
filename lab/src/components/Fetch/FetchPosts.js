import axios from "axios";
import { useState, useEffect } from "react";
import SelectedPost from "../Pages/Page";

function FetchPosts() {
  const [data, setData] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/posts`)
      .then((res) => setData(res.data.posts));
  }, []);

  const displayFullPost = (post) => {
    setSelectedPost(post);
  };

  const goBack = () => {
    setSelectedPost(null);
  };

  return (
    <div>
      {selectedPost ? (
        <SelectedPost selectedPost={selectedPost} goBack={goBack} /> // Use the SelectedPost component
      ) : (
        <div className="posts">
          <h2>All Posts</h2>

          {data.map((post) => {
            const { userId, title, body, tags, id } = post;
            const truncatedBody =
              body.length > 60 ? `${body.substring(0, 60)}...` : body;
            return (
              <div className="home-posts" key={id}>
                <div className="postcard">
                  <div className="p-card" onClick={() => displayFullPost(post)}>
                    <div className="upper-part">
                      <p>{userId}</p>
                      <p className="tags"> {tags ? `#${tags}` : null}</p>
                    </div>
                    <h4>{title}</h4>
                    <p className="body">{truncatedBody}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default FetchPosts;
