import React from 'react'
import FetchApi from '../pages/FetchApi'
import SearchUser from '../pages/SearchUser'

function Home() {
  return (
    <div>
        <h1>Welcome to Home Page</h1>
        <FetchApi/>
        <SearchUser/>
    </div>
  )
}

export default Home