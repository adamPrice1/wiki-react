import React from "react";
import Article from '../Article';


const ArticleList = (props) => {


  return (
    <div>
    {props.articles.map(post => {
      return (
        <Article
          title={post.title}
          snippet={post.snippet}
          key={post.pageid}
        />
      )
    })}
    </div>
  )
};

export default ArticleList;
