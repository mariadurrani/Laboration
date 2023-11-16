import React, { useState } from "react";
import "./NewPostStyles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

function NewPost() {
  const [formData, setFormData] = useState({
    title: "",
    body: "",
  });

  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (formData.title.trim() !== "") {
      // Clear any previous error messages
      setError("");

      fetch("https://dummyjson.com/posts/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: formData.title,
          userId: 5,
          /* other post data */
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Post successfully added:", data);
          // Optionally, you can reset the form or take other actions here
        })
        .catch((error) => {
          console.error("Error adding post:", error);
        });
    } else {
      // Set an error message when the title is empty
      setError("Title is required.");
    }
  };

  return (
    <div className="container">
      <div className="post-box">
        <div className="innerpost-container">
          <div className="titles">
            <h2>Add a new post</h2>
            <div className="profile-container">
              <p>Choose account:</p>
              <FontAwesomeIcon
                icon={faCircleUser}
                size="xl"
                style={{ color: "#7ea8ec" }}
              />
            </div>
          </div>

          <form onSubmit={handleFormSubmit}>
            <label>
              <input
                type="text"
                id="title"
                placeholder="Title"
                value={formData.title}
                onChange={handleInputChange}
              />
            </label>
            <label>
              <input
                type="text"
                id="body"
                placeholder="Text"
                value={formData.body}
                onChange={handleInputChange}
              />
            </label>
            <button type="submit" className="post-btn">
              Post
            </button>
          </form>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
      </div>
    </div>
  );
}

export default NewPost;
