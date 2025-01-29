import React from 'react'
import {TextField} from '@mui/material'

function SearchUser() {
  
  const [news, setNews] = React.useState([]);
  let [searchText, setSearchText] = React.useState('');
  let [loading, setLoading] = React.useState(false);

    const searchUser =async() =>{
       
        const NEWS_API ="https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=5a6b12e8e14b4f4ba84d95b1790c7faf"
        const res = await fetch(NEWS_API);
        const data = await res.json();
        setNews(data.articles);
    }
  return (
    <div>
        <h3>Search User </h3>
        <TextField 
        fullWidth 
        label="Search News By Title" 
        value={searchText} 
        onChange={handleChange} 
        margin='normal'/>
        <button onClick={searchUser}>Search</button>
        {
          news.map((item) => {
            return(
            <div>{item.title}</div>
            );
          })
        }
    </div>
  )
}

export default SearchUser