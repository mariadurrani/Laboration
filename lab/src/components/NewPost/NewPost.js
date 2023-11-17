import React, { useState, useEffect } from "react";
import "./NewPostStyles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import FetchUser from "../Fetch/FetchUsers";
import FetchUserTwo from "../Fetch/FetchUserTwo";

function NewPost() {
  const [formData, setFormData] = useState({
    title: "",
    body: "",
  });

  const [selectedIcon, setSelectedIcon] = useState(null);
  const [isClicked, setIsClicked] = useState(false);

  // Track user data
  const [userOneData, setUserOneData] = useState(null);
  const [userTwoData, setUserTwoData] = useState(null);

  const handleIconClick = (icon) => {
    setIsClicked(true);
    setSelectedIcon(icon);
  };

  useEffect(() => {
    // Cleanup function not required since there's no event listener
  }, []);

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
      setError("");

      // Get the user ID based on the selected icon
      const userId =
        selectedIcon === "user1" && userOneData
          ? userOneData.id
          : selectedIcon === "user2" && userTwoData
          ? userTwoData.id
          : null;

          

      if (userId !== null) {
        fetch("https://dummyjson.com/posts/add", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title: formData.title,
            userId: userId,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("Post successfully added:", data);
          })
          .catch((error) => {
            console.error("Error adding post:", error);
          });
      } else {
        setError("User data is not available.");
      }
    } else {
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
              <div className="icon-container">
                <FontAwesomeIcon
                  icon={faCircleUser}
                  size="xl"
                  style={{
                    color: "#7ea8ec",
                    border: selectedIcon === "user1" ? "2px solid yellow" : "",
                  }}
                  onClick={() => handleIconClick("user1")}
                />
                <p>
                  <FetchUser setData={setUserOneData} />
                </p>
                <p></p>
                <FontAwesomeIcon
                  icon={faCircleUser}
                  size="xl"
                  style={{
                    color: "#7ea8ec",
                    border: selectedIcon === "user2" ? "2px solid yellow" : "",
                  }}
                  onClick={() => handleIconClick("user2")}
                />
                <p>
                  <FetchUserTwo setDataTwo={setUserTwoData} />
                </p>
              </div>
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
