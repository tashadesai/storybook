import React from 'react'
import {connect} from 'react-redux'
import {browserHistory} from 'react-router'
import {fetchCharacter} from '../reducers/tone'
import Anger from './Anger'
import Disgust from './Disgust'
import Fear from './Fear'
import Joy from './Joy'
import Sadness from './Sadness'

class StartStory extends React.Component {
  constructor(props) {
    super(props)
    this.state = {characters: {}}
    this.renderScene = this.renderScene.bind(this)
  }

  renderScene(event) {
    event.preventDefault()
    var emotion = this.props.emotion.toLowerCase()
    console.log(emotion)
    browserHistory.push('/' + emotion)
  }

  render() {
    if (this.props.emotion) {
      return(
      <div className="mw7 mw8-ns center pa3 ph5-ns">
      <div className="fl w-third pa2"></div>
      <div className="fl w-third pa2">
      <button className="btn btn-default center" onClick={this.renderScene}>Step in to your story...</button>
      </div>
      <div className="fl w-third pa2"></div>
      </div>)
    } else {
      return (
        <div className="mw7 mw8-ns center pa3 ph5-ns">
      <div className="fl w-third pa2"></div>
      <div className="fl w-third pa2">
      <h1 className="center" >Loading...</h1>
      </div>
      <div className="fl w-third pa2"></div>
      </div>
      )
    }
  }
}

export default connect(
  function mapStateToProps(state) {
    return {
      emotion: state.tone.emotion,
      storyText: state.tone.storyText,
      nouns: state.words.nouns,
      people: state.words.people,
      places: state.words.places,
      characters: state.renders
    }
  }
)(StartStory)


// return (
//     <div>
//       <button className="btn btn-default" onClick={renderScene}>Step into your tale...</button>
//       {console.log(props)}
//     </div>
//   )
