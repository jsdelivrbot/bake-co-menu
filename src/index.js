import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import {persistStore, autoRehydrate} from 'redux-persist'

import App from './components/app'
import reducers from './reducers'

const store = createStore(reducers, undefined, autoRehydrate())
persistStore(store)

// const createStoreWithMiddleware = applyMiddleware()(createStore)

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>
  , document.querySelector('.wrapper'))
