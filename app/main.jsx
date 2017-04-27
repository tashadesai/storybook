'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import store from './store'
import StoryInput from './components/StoryInput'
import NotFound from './components/NotFound'
import StartStory from './components/StartStory'
import Anger from './components/Anger'
import Disgust from './components/Disgust'
import Fear from './components/Fear'
import Joy from './components/Joy'
import Sadness from './components/Sadness'

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/">
        <IndexRedirect to="/storyinput" />
        <Route path="/storyinput" component={StoryInput} />
      </Route>
      <Route path="/startstory" component={StartStory} />
      <Route path="/anger" component={Anger} />
      <Route path="/disgust" component={Disgust} />
      <Route path="/fear" component={Fear} />
      <Route path="/joy" component={Joy} />
      <Route path="/sadness" component={Sadness} />
      <Route path='*' component={NotFound} />
    </Router>
  </Provider>,
  document.getElementById('main')
)
