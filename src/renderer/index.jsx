'use strict'

import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './component/app'
import TomatoApp from './reducers'

require('./index.scss')
require('../../vendor/photon/sass/photon.scss')
require('../../vendor/Font-Awesome/scss/font-awesome.scss')

const store = createStore(TomatoApp)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
