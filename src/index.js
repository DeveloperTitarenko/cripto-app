import ReactDOM from 'react-dom'
import React from "react";
import App from './App'
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

import 'antd/dist/antd.css'

import store from './store/store'

const app =  (
  <BrowserRouter>
    <Provider store={store}>
      <App/>
    </Provider>
  </BrowserRouter>
)

ReactDOM.render(
  <>
    {app}
  </>
  ,
  document.getElementById('root')
)