import React from 'react'
import {connect} from 'react-redux'
import {browserHistory} from 'react-router'
import {fetchEmotion} from '../reducers/tone'
import {fetchNouns, fetchPeople, fetchPlaces} from '../reducers/words'

class StoryInput extends React.Component {
  constructor(props) {
    super(props)
    this.analyze = this.analyze.bind(this)
  }

  analyze(evt) {
    evt.preventDefault()
    this.props.analyzeEmotion(evt.target.storyInput.value)
    this.props.analyzeNouns(evt.target.storyInput.value)
    this.props.analyzePeople(evt.target.storyInput.value)
    this.props.analyzePlaces(evt.target.storyInput.value)
    browserHistory.push('/startstory')
  }

  render() {
    return (
      <div>
        <form onSubmit={this.analyze}>
          <div className="form-group">
            <textarea type="text" className="form-control" placeholder="Story" name="storyInput" required/>
          </div>
          <button className="btn btn-default">Submit</button>
        </form>
        <div>
          <h2>Emotion/Mood: {this.props.emotion}</h2>
          <h2>Nouns: {this.props.nouns}</h2>
          <h2>People: {this.props.people}</h2>
          <h2>Places: {this.props.places}</h2>
        </div>
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
      places: state.words.places
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
      }
    }
  }
)(StoryInput)

