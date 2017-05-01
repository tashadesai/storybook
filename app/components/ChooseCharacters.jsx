import React from 'react'
import {connect} from 'react-redux'
import {browserHistory} from 'react-router'
import {fetchEmotion} from '../reducers/tone'
import {fetchNouns, fetchPeople, fetchPlaces} from '../reducers/words'
import {fetchCharacters} from '../reducers/renders'

class StoryInput extends React.Component {
  constructor(props) {
    super(props)
    this.setCharacter = this.setCharacter.bind(this)
    this.start = this.start.bind(this)
  }

  setCharacter(evt) {
    evt.preventDefault()
    this.props.setChars(evt.target.character.value.toLowerCase(), evt.target.charimg.value)
  }

  start() {
    browserHistory.push('/startstory')
  }

  render() {
    return (
      <div className="mw7 mw8-ns center bg-light-gray pa3 ph5-ns">
      <h1>Who are the main characters in this story and what do they look like?</h1>
        <form onSubmit={this.setCharacter}>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Character Name" name='character' />
            <div className="dt--fixed">
              <div className="fl w-20 pa2"><input type="radio" name="charimg" value="http://i.imgur.com/3DH2GIX.png" /><img src="http://i.imgur.com/3DH2GIX.png" height="200"/></div>
              <div className="fl w-20 pa2"><input type="radio" name="charimg" value="http://i.imgur.com/IYb0dnp.png" /><img src="http://i.imgur.com/IYb0dnp.png" height="200"/></div>
              <div className="fl w-20 pa2"><input type="radio" name="charimg" value="http://i.imgur.com/jUU7b0p.png" /><img src="http://i.imgur.com/jUU7b0p.png" height="200"/></div>
              <div className="fl w-20 pa2"><input type="radio" name="charimg" value="http://i.imgur.com/Vuk0Gu3.png" /><img src="http://i.imgur.com/Vuk0Gu3.png" height="200"/></div>
              <div className="fl w-20 pa2"><input type="radio" name="charimg" value="http://i.imgur.com/VTHUgg6.png" /><img src="http://i.imgur.com/VTHUgg6.png" height="200"/></div>
            </div>
            <div className="dt--fixed">
               <div className="fl w-25 pa2"><input type="radio" name="charimg" value="http://i.imgur.com/ZiiTuME.png" /><img src="http://i.imgur.com/ZiiTuME.png" height="200"/></div>
               <div className="fl w-25 pa2"><input type="radio" name="charimg" value="http://i.imgur.com/PcKF5q0.png" /><img src="http://i.imgur.com/PcKF5q0.png" height="200"/></div>
               <div className="fl w-25 pa2"><input type="radio" name="charimg" value="http://i.imgur.com/7s01ecX.png" /><img src="http://i.imgur.com/7s01ecX.png" height="200"/></div>
               <div className="fl w-25 pa2"><input type="radio" name="charimg" value="http://i.imgur.com/p17szQt.png" /><img src="http://i.imgur.com/p17szQt.png" height="200"/></div>
            </div>
            <div className="dt--fixed">
               <div className="fl w-20 pa2"><input type="radio" name="charimg" value="http://i.imgur.com/r1rkBeq.png" /><img src="http://i.imgur.com/r1rkBeq.png" height="200"/></div>
               <div className="fl w-20 pa2"><input type="radio" name="charimg" value="http://i.imgur.com/qlkBn2n.png" /><img src="http://i.imgur.com/qlkBn2n.png" height="200"/></div>
               <div className="fl w-20 pa2"><input type="radio" name="charimg" value="http://i.imgur.com/miSnOs2.png" /><img src="http://i.imgur.com/miSnOs2.png" height="200"/></div>
               <div className="fl w-20 pa2"><input type="radio" name="charimg" value="http://i.imgur.com/qPeXrXf.png" /><img src="http://i.imgur.com/qPeXrXf.png" height="200"/></div>
               <div className="fl w-20 pa2"><input type="radio" name="charimg" value="http://i.imgur.com/JhlyBCI.png" /><img src="http://i.imgur.com/JhlyBCI.png" height="200"/></div>
            </div>
            </div>
          <button className="btn btn-default">Add character</button>
        </form>
        <button className="btn btn-default" onClick={this.start}>I'm ready</button>
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



