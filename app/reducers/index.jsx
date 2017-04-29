import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  tone: require('./tone').default,
  words: require('./words').default,
  renders: require('./renders').default
})

export default rootReducer
