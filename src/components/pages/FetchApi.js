import React from 'react'

function FetchApi() {
    const url = "https://api.github.com/users"
    const [users, setUsers] = React.useState([])
    const fetchUsers = async () => {
        const res = await fetch(url);        
        const data = await res.json();
        setUsers(data);
    }
  
  return (
    <div>
      <h3>Fetch Api</h3>
        <button onClick={fetchUsers}>Get Github Users</button>
        {
            users.map((user) => {
              return(
                <div key={user.id}>
                  <h4>{user.login}</h4>
                  <img src={user.avatar_url} alt="avatar" style={{width: "150px"}} />
                </div>  
              )
            })        
        }
    </div>
  )
}

export default FetchApi