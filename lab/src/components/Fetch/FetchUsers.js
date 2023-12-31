import { useState, useEffect } from "react";
import axios from "axios";

function FetchUser({ setData }) {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/users/1`)
      .then((res) => {
        console.log(res.data); 
        setUser(res.data);
        setData(res.data); 

      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [setData]);

  return (
    <>
      <div key={user.id}>
        <p>{user.firstName}</p>
      </div>
    </>
  );
}

export default FetchUser;
