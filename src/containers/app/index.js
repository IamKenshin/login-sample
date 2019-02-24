import React from 'react'
import {Route} from 'react-router-dom'
import Home from '../home'
import Register from '../register'
import Success from '../success'

const App = () => (
    <div>
        <main>
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/success" component={Success} />            
        </main>
    </div>
)

export default App