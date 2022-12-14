import React from "react";
import { useState, useEffect } from "react";

const Node = () => {
  const url = `http://localhost:3001/bookmarks/category/node`;
  const [bookmarks, setBookmarks] = useState("");

  const getBookmarks = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setBookmarks(data.bookmarks);
      console.log(response);
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };
 
  useEffect(() => {
    getBookmarks();
  }, []);

  const loaded = () => {
    return (
      <div className="container">
        <h2>
            Node.js
        </h2>
        <div className="siteList">
          {bookmarks?.map((bookmark, index) => (
            <div className="site">
              <h3>{bookmark?.site}</h3>
              <a href={bookmark?.url}>{bookmark?.url}</a>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return (
    <div>
      {console.log(bookmarks)}
      {bookmarks ? loaded() : loading()}
    </div>
  );
};

export default Node;
