import React from 'react'
import {connect} from 'react-redux'
import {browserHistory} from 'react-router'
import Anger from './Anger'
import Disgust from './Disgust'
import Fear from './Fear'
import Joy from './Joy'
import Sadness from './Sadness'

function StartStory(props) {
  function renderScene(event) {
    event.preventDefault()
    var emotion = props.emotion.toLowerCase()
    console.log(emotion)
    browserHistory.push('/' + emotion)
  }

  if (props.emotion) {
    return <button className="btn btn-default" onClick={renderScene}>Step into your tale...</button>
  } else {
    return <h1>Loading...</h1>
  }
}
export default connect(
  function mapStateToProps(state) {
    return {
      emotion: state.tone.emotion,
      storyText: state.tone.storyText,
      nouns: state.words.nouns,
      people: state.words.people,
      places: state.words.places
    }
  }
)(StartStory)


// return (
//     <div>
//       <button className="btn btn-default" onClick={renderScene}>Step into your tale...</button>
//       {console.log(props)}
//     </div>
//   )
