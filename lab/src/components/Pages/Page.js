import "./Page.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";

const SelectedPost = ({ selectedPost, comments, goBack }) => {
  const [reactions, setReactions] = useState(selectedPost.reactions);
  const [commentInput, setCommentInput] = useState("");

  const incrementReactions = () => {
    setReactions(reactions + 1);
  };

  const handleCommentChange = (e) => {
    setCommentInput(e.target.value);
  };

  const addComment = () => {
    fetch("https://dummyjson.com/comments/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        body: commentInput,
        postId: selectedPost.id,
        userId: 5,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
       
        console.log(data);
      })
      .catch((error) => {
        console.error("Error adding comment:", error);
      });
  };

  return (
    <>
      <div className="post">
        <div className="upper-part">
          <p>{selectedPost.userId}</p>
          <p className="tags">
            {selectedPost.tags ? `#${selectedPost.tags}` : null}
          </p>
        </div>
        <h2>{selectedPost.title}</h2>
        <p>{selectedPost.body}</p>
        <div className="reactions">
          <p>
            <FontAwesomeIcon
              icon={faThumbsUp}
              className="thumbsUp"
              onClick={incrementReactions}
            />
          <p></p>
            {reactions}
          </p>
        </div>
        <br></br>
        <br></br>
        <ul>
          <input
            type="text"
            id="comment"
            placeholder="Add a comment..."
            value={commentInput}
            onChange={handleCommentChange}
          />
          <button onClick={addComment}>Send</button>
          <table>
            {comments.map((comment) => (
              <li key={comment.id}>
                <tbody>
                  <td>@{comment.user.username} </td>
                  <td>{comment.body} </td>
                </tbody>
              </li>
            ))}
          </table>
        </ul>
        <button onClick={goBack}>Go Back</button>
      </div>
    </>
  );
};

export default SelectedPost;
