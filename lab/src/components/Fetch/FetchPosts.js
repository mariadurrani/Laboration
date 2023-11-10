import axios, { Axios } from "axios";
import { useState, useEffect } from "react";
import { set } from "react-hook-form";

function FetchPosts() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/posts`)
      .then((res) => setData(res.data.posts));
  }, []);

  return (
    <div>
      <h2>Popular Posts</h2>
      <div className="home-posts">
        <div className="postcard">
          {data.map((post) => {
            const { userId, title, body, tags } = post;
            return (
              <>
                <div className="p-card" key={userId}>
                  <p>{userId}</p>
                  <h4>{title}</h4>
                  <p>{body}</p>
                  <p className="tags">{tags}</p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default FetchPosts;
