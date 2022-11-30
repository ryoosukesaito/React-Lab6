import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  // const [title, setTitle] = useState("");
  // const [body, setBody] = useState("");

  const [visible, setVisible] = useState(5);

  const getPostsData = () => {
    console.log("Fetching...");
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_limit=35")
      .then((res) => {
        setPosts(res.data);
        console.log(posts);
      })
      .catch((error) => setError(error.message));
  };

  const loadMore = () => {
    setVisible(visible + 5);
  };

  // const getPostsData1 = async () => {
  //   let arrayOfArticles = [];
  //   try {
  //     const data = await axios.get(
  //       "https://jsonplaceholder.typicode.com/posts?_limit=10"
  //     );
  //     arrayOfArticles = data.data;
  //   } catch (error) {
  //     console.log(error);
  //     setError(error.message);
  //   }

  //   try {
  //     setData(arrayOfArticles);
  //     for (let i = 0; i < arrayOfArticles.length; i++) {
  //       const article = arrayOfArticles[i];
  //       setTitle(article.title);
  //       setBody(article.body);
  //       console.log(article.title);
  //       console.log(article.body);
  //     }

  //     console.log(arrayOfArticles[2].title);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    getPostsData();
  }, []);

  if (!posts) {
    getPostsData();
  }

  return (
    <div className="App">
      <h1>React Lab 6</h1>
      <div className="msg">
        {/* {posts ? JSON.stringify(posts[0]) : error ? error : "loading"} */}
        {posts
          ? posts.slice(0, visible).map((post) => (
              <div className="post list-item" key={post.id}>
                <p>{post.title}</p>
                {/* <p>{post.body}</p> */}
              </div>
            ))
          : error
          ? error
          : "loading"}
      </div>
      {visible < posts.length && (
        <button className="btn" onClick={loadMore}>
          Refetch
        </button>
      )}
    </div>
  );
}

export default App;
