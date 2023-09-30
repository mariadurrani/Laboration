function FetchData() {}

getUsers();
function getUsers() {
  fetch("https://dummyjson.com/users")
    .then((res) => res.json())

    .then(console.log);
}

getPosts();
function getPosts() {
  fetch("https://dummyjson.com/posts")
    .then((res) => res.json())

    .then(console.log);
}

addPost();
function addPost() {
  fetch("https://dummyjson.com/posts/add", {
    method: "POST",

    headers: { "Content-Type": "application/json" },

    body: JSON.stringify({
      title: "Lorem ipsum",

      userId: 5,

      /* other post data */
    }),
  })
    .then((res) => res.json())

    .then(console.log);
}

getComments();
function getComments() {
  fetch("https://dummyjson.com/posts")
    .then((res) => res.json())

    .then(console.log);
}

export default FetchData;
