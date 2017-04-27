import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  tone: require('./tone').default
})

export default rootReducer
