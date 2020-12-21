import logo from './logo.svg';
import './App.css';
import ArticleList from './components/ArticleList'
import React, {useState, useEffect} from "react";


function App() {

  const handleSearchChange = (e) => {
    setSearchValue(prevVal => e.target.value)
    getSearchResults(e.target.value)
  }

  const [articles, setArticles] = useState({query: {search: [] }})

  const [searchValue, setSearchValue] = useState("")

  async function getSearchResults(query) {
    if(query != ""){
      let results = await fetch(`https://www.mediawiki.org/w/api.php?origin=*&action=query&list=search&format=json&srsearch=${query}`,{headers:{origin:"*"}})
      setArticles(await results.json())
    }
  }

  return (
    <div className="App">
      <h1> Search </h1>
      <input type="text" id="article-search" value={searchValue} onChange={handleSearchChange}/>
      <ArticleList articles={articles.query.search} />
    </div>
  );
}

export default App;
