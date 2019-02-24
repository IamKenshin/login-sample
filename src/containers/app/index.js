import React from 'react'
import {Route} from 'react-router-dom'
import Home from '../home'
import Register from '../register'
import Login from '../login'

const App = () => (
    <div>
        <main>
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />            
        </main>
    </div>
)

export default App