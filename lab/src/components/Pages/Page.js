import "./Page.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";

const SelectedPost = ({ selectedPost, comments, goBack }) => {
  const [reactions, setReactions] = useState(selectedPost.reactions);

  const incrementReactions = () => {
    setReactions(reactions + 1);
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
            {reactions}
          </p>
        </div>

        <h3>Comments:</h3>
        <ul>
          <input
            type="text"
            id="comment"
            placeholder="Add a comment..."
          ></input>
          {comments.map((comment) => (
            <li key={comment.id}>
              <table>
                <tbody>
                  <td>{comment.user.username} </td>
                  <td>{comment.body} </td>
                </tbody>
              </table>
            </li>
          ))}
        </ul>

        <button onClick={goBack}>Go Back</button>
      </div>
    </>
  );
};

export default SelectedPost;
