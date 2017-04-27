'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import store from './store'
import StoryInput from './components/StoryInput'
import Login from './components/Login'
import WhoAmI from './components/WhoAmI'
import NotFound from './components/NotFound'

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/">
        <IndexRedirect to="/storyinput" />
        <Route path="/storyinput" component={StoryInput} />
      </Route>
      <Route path='*' component={NotFound} />
    </Router>
  </Provider>,
  document.getElementById('main')
)
