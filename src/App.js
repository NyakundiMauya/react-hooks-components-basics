import React from "react";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

function App() {

  const artiles = [
    {
      id: 1,
      title: "Article 1",
      date: "May 1, 2023",
      preview: "This is the preview of Article 1."
    },
    {
      id: 2,
      title: "Article 2",
      date: "May 2, 2023",
      preview: "This is the preview of Article 2."
    },
    {
      id: 3,
      title: "Article 3",
      date: "May 3, 2023",
      preview: "This is the preview of Article 3."
    }
  ];

  return (
    <div>
      <Header name="My Blog" />
      <main>
        <About
          imgSrc="https://via.placeholder.com/215"
          imgAlt="blog logo"
          aboutText="This is my blog about interesting things."
        />
        <ArticleList articles={artiles} />
      </main>
    </div>
  );
}



export default App;
