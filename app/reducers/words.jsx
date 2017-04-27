import axios from 'axios'

const GET_NOUNS = 'GET_NOUNS'
const GET_PEOPLE = 'GET_PEOPLE'
const GET_PLACES = 'GET_PLACES'

const defaultState = {
  nouns: [],
  people: [],
  places: []
}


const reducer = (state=defaultState, action) => {
  const newState = Object.assign({}, state)

  switch (action.type) {
  case GET_NOUNS:
    newState.nouns = action.nouns
    break

  case GET_PEOPLE:
    newState.people = action.people
    break

  case GET_PLACES:
    newState.places = action.places
    break

  default:
    return state
  }

  return newState
}

export const getNouns = nouns => ({
  type: GET_NOUNS, nouns
})

export const getPeople = people => ({
  type: GET_PEOPLE, people
})

export const getPlaces = places => ({
  type: GET_PLACES, places
})

export const fetchNouns= (input) =>
  dispatch =>
    axios.post('/api/words/nouns', {text: input})
      .then((foundNouns) =>
        dispatch(getNouns(foundNouns.data)))
      .catch(console.error)

export const fetchPeople= (input) =>
  dispatch =>
    axios.post('/api/words/people', {text: input})
      .then((foundPeople) => dispatch(getPeople(foundPeople.data)))
      .catch(console.error)

export const fetchPlaces= (input) =>
  dispatch =>
    axios.post('/api/words/places', {text: input})
      .then((foundPlaces) => dispatch(getPlaces(foundPlaces.data)))
      .catch(console.error)

export default reducer
