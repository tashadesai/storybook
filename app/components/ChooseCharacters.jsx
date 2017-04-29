import React from 'react'
import {connect} from 'react-redux'
import {browserHistory} from 'react-router'
import {fetchEmotion} from '../reducers/tone'
import {fetchNouns, fetchPeople, fetchPlaces} from '../reducers/words'
import {fetchCharacters} from '../reducers/renders'

class StoryInput extends React.Component {
  constructor(props) {
    super(props)
    this.setCharacterOne = this.setCharacterOne.bind(this)
    this.setCharacterTwo = this.setCharacterTwo.bind(this)
    this.setCharacterThree = this.setCharacterThree.bind(this)
    this.setCharacterFour = this.setCharacterFour.bind(this)
    this.start = this.start.bind(this)
  }

  setCharacterOne(evt) {
    evt.preventDefault()
    this.props.setChars(evt.target.character1.value.toLowerCase(), evt.target.firstname.value)
  }

  setCharacterTwo(evt) {
    evt.preventDefault()
    this.props.setChars(evt.target.character2.value.toLowerCase(), "img")
  }

  setCharacterThree(evt) {
    evt.preventDefault()
    this.props.setChars(evt.target.character3.value.toLowerCase(), "img")
  }

  setCharacterFour(evt) {
    evt.preventDefault()
    this.props.setChars(evt.target.character4.value.toLowerCase(), "img")
  }

  start() {
    browserHistory.push('/startstory')
  }

  render() {
    var i = 0
    while (i < 5) {
      i++
      var id = 'character' + i
      var func
      if (i === 1) func = this.setCharacterOne
      if (i === 2) func = this.setCharacterTwo
      if (i === 3) func = this.setCharacterThree
      if (i === 4) func = this.setCharacterFour

      return (
        <div>
        <h1>Who are the characters in this story and what do they look like?</h1>
          <form onSubmit={func}>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Character Name" name={id} />
              <input type="radio" name="firstname" value="http://i.imgur.com/6pdR4rG.png"/><img src="http://i.imgur.com/6pdR4rG.png"/>
            </div>
            <button className="btn btn-default">Add character</button>
          </form>
          <button className="btn btn-default" onClick={this.start}>I'm ready</button>
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
      characters: state.renders.characters
    }
  },
  function mapDispatchToProps(dispatch) {
    return {
      setChars: (name, image) => {
        dispatch(fetchCharacters(name, image))
      }
    }
  }
)(StoryInput)



