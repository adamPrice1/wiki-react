import React from "react";

const Article = (article) => {
  return (
    <div className="article">
      <h1> {article.title} </h1> <a href={`https://www.mediawiki.org/wiki/${article.title.split(' ').join('_')}`}> Read more </a>
      <p> {article.snippet} </p>
    </div>
  );
};

export default Article;
