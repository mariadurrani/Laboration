// FetchUserTwo.js
import { useState, useEffect } from "react";
import axios from "axios";

function FetchUserTwo({ setDataTwo }) {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/users/2`)
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
        setDataTwo(res.data); 
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [setDataTwo]);

  return (
    <>
      <div key={user.id}>
        <p>{user.firstName}</p>
      </div>
    </>
  );
}

export default FetchUserTwo;

