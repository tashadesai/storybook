import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  tone: require('./tone').default,
  words: require('./words').default
})

export default rootReducer
