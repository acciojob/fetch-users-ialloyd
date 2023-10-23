
import React, { useEffect, useState } from "react";
import './../styles/App.css';
import axios from 'axios';

const App = () => {

  const [obj, setData] = useState({})

  function func() {

      axios.get('https://reqres.in/api/users')
        .then(data => setData({ ...data }))
        .catch(err => console.log(err))

  }
  console.log(obj)

  return (
    <div>
      {/* Do not remove the main div */}
      <nav>
        <div>
          <h1>Blue Whales</h1>
          <button onClick={func} className="btn">Get User List</button>
        </div>
      </nav>
      <main>
        <table>
          <tr>
            <th>FirstName</th>
            <th>LasttName</th>
            <th>Email</th>
            <th>Avatar</th>
          </tr>
          {
            (!Object.keys(obj).length && <p>No data found</p>)||(Object.keys(obj).length &&
            
            obj.data.data.map( profile=><>
              <tr>
                <td>{profile.first_name}</td>
                <td>{profile.last_name}</td>
                <td>{profile.email}</td>
                <td><img src={profile.avatar}/></td>
              </tr>
            </>)
            )
          }
        </table>
      </main>
    </div>
  )
}

export default App
