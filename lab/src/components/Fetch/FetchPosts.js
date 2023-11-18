import axios from "axios";
import { useState, useEffect } from "react";
import SelectedPost from "../Pages/Page";

function FetchPosts() {
  const [data, setData] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/posts`)
      .then((res) => setData(res.data.posts));
    axios
      .get(`https://dummyjson.com/users`)
      .then((res) => setUsers(res.data.users));
  }, []);

  const displayFullPost = (post) => {
    // Förstår inte varför namnet inte kommer på hela inlägget.
    const user = users.find((user) => user.id === post.userId); 

    setSelectedPost(post);

    axios
      .get(`https://dummyjson.com/posts/${post.id}/comments`)
      .then((res) => {
        setComments(res.data.comments);
        console.log("Comments:", res.data);
      })
      .catch((error) => {
        console.error("Error fetching comments:", error);
      });
  };

  const goBack = () => {
    setSelectedPost(null);
    setComments([]);
  };

  return (
    <div>
      {selectedPost ? (
        <SelectedPost
          selectedPost={selectedPost}
          comments={comments}
          goBack={goBack}
        />
      ) : (
        <div className="posts">
          <h2>All Posts</h2>

          {data.map((post) => {
            const { title, body, tags, id } = post;
            const truncatedBody =
              body.length > 60 ? `${body.substring(0, 60)}...` : body;
            const user = users.find((user) => user.id === post.userId);

            return (
              <div className="home-posts" key={id}>
                <div className="postcard">
                  <div className="p-card" onClick={() => displayFullPost(post)}>
                    <div className="upper-part">
                      <p>
                        {user
                          ? `${user.firstName} ${user.lastName}`
                          : "Unknown User"}
                      </p>
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
