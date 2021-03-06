import React from 'react'
import { render } from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import App from './containers/app'

import './styles/styles.sass'

const target = document.querySelector('#root')

render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    target
)