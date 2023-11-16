import { useState, useEffect } from "react";
import axios from "axios";

function FetchUsers() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/users/1`)
      .then((res) => console.log(res.data));
  }, []);
  return <>
  <p></p>
  </>;
}

export default FetchUsers;
