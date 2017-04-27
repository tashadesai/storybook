import axios from 'axios'

const GET_TONE_EMOTION = 'GET_TONE_EMOTION'

const defaultState = {
  emotion: ''
}


const reducer = (state=defaultState, action) => {
  const newState = Object.assign({}, state)

  switch (action.type) {
  case GET_TONE_EMOTION:
    newState.emotion = action.emotion
    break

  default:
    return state
  }

  return newState
}

export const getEmotion = emotion => ({
  type: GET_TONE_EMOTION, emotion
})


export const fetchEmotion= (input) =>
  dispatch =>
    axios.post('/api/tone', {text: input})
      .then((data) => {
        console.log("data.data is THiS ", data.data.document_tone, "data is this ", data)
        var allEmotions = data.data.document_tone.tone_categories[0].tones;
        var max = 0;
        var topEmotion;
        allEmotions.forEach((emotion) =>{
          if (emotion.score > max) {
            max = emotion.score;
            topEmotion = emotion.tone_name;
          }
        })
        dispatch(getEmotion(topEmotion))
      })
      .catch(console.error)

export default reducer;
