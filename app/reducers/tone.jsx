import axios from 'axios'

const GET_TONE_EMOTION = 'GET_TONE_EMOTION'
const GET_STORY_TEXT = 'GET_STORY_TEXT'

const defaultState = {
  emotion: '',
  storyText: []
}


const reducer = (state=defaultState, action) => {
  const newState = Object.assign({}, state)

  switch (action.type) {
  case GET_TONE_EMOTION:
    newState.emotion = action.emotion
    break

  case GET_STORY_TEXT:
    newState.storyText = action.storyText
    break

  default:
    return state
  }

  return newState
}

export const getEmotion = emotion => ({
  type: GET_TONE_EMOTION, emotion
})
export const getStoryText = storyText => ({
  type: GET_STORY_TEXT, storyText
})


export const fetchEmotion= (input) =>
  dispatch =>
    axios.post('/api/tone', {text: input})
      .then((data) => dispatch(getEmotion(data.data)))
      .catch(console.error)

export const setStoryText= (input) =>
  getStoryText(input)

export default reducer
