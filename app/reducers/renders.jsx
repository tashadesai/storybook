import axios from 'axios'

// const GET_RENDER = 'GET_RENDER'
const GET_CHARACTERS = 'GET_CHARACTERS'

const defaultState = {}


const reducer = (state=defaultState, action) => {
  const newState = Object.assign({}, state)

  switch (action.type) {
  case GET_CHARACTERS:
    newState[action.characterName] = action.characterImg
    break

  default:
    return state
  }

  return newState
}

export const getCharacters = (characterName, characterImg) => ({
  type: GET_CHARACTERS, characterName, characterImg
})

export const fetchCharacters= (name, image) =>
  getCharacters(name, image)


export default reducer
