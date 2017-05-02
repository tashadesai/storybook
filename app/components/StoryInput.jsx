import React from 'react'
import {connect} from 'react-redux'
import {browserHistory} from 'react-router'
import {fetchEmotion, setStoryText} from '../reducers/tone'
import {fetchNouns, fetchPeople, fetchPlaces} from '../reducers/words'

class StoryInput extends React.Component {
  constructor(props) {
    super(props)
    this.analyze = this.analyze.bind(this)
  }

  analyze(evt) {
    evt.preventDefault()
    this.props.setStoryText(evt.target.storyInput.value)
    this.props.analyzeEmotion(evt.target.storyInput.value)
    this.props.analyzeNouns(evt.target.storyInput.value)
    this.props.analyzePeople(evt.target.storyInput.value)
    this.props.analyzePlaces(evt.target.storyInput.value)
    this.props.setStoryText(evt.target.storyInput.value)
    browserHistory.push('/choosechars')
  }

  render() {
    return (
      <div className="mw5 mw7-ns center bg-washed-yellow  pa3 ph5-ns">
      <img src="http://i.imgur.com/07XEMie.png"/>
        <form onSubmit={this.analyze} className="center">
          <div className="form-group">
            <textarea rows="100" cols="78" type="text" className="form-control" placeholder="Tell me a story..." name="storyInput" required/>
          </div>
          <button className="btn btn-default">Submit</button>
        </form>
      </div>
    )
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
  },
  function mapDispatchToProps(dispatch) {
    return {
      analyzeEmotion: (input) => {
        dispatch(fetchEmotion(input))
      },
      analyzeNouns: (input) => {
        dispatch(fetchNouns(input))
      },
      analyzePeople: (input) => {
        dispatch(fetchPeople(input))
      },
      analyzePlaces: (input) => {
        dispatch(fetchPlaces(input))
      },
      setStoryText: (input) => {
        dispatch(setStoryText(input))
      }
    }
  }
)(StoryInput)

