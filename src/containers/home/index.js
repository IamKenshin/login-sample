
import React from 'react'
import {Link} from 'react-router-dom'


const Home = props => (
  <div>
    <h1>Home</h1>

    <div>
        <Link to="/register">Register</Link>
    </div>
  </div>
)

export default Home