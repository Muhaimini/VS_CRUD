import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Routes, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { App } from './pages'
import { store } from './app'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style/app.css'

ReactDOM.render(
  <Routes>
    <Switch>
      <Provider store={store}>
        <Route component={App} />
      </Provider>
    </Switch>
  </Routes>,
  document.getElementById('root')
);

