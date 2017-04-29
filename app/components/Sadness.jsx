import React from 'react'
import {connect} from 'react-redux'
import 'aframe'
import 'aframe-animation-component'
import 'aframe-particle-system-component'
import 'babel-polyfill'
import {Entity, Scene} from 'aframe-react'

class Sadness extends React.Component {
  constructor(props) {
    super(props)
    this.state = {color: 'red'}
    this.splitText = this.splitText.bind(this)
  }

  changeColor() {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue']
    this.setState({
      color: colors[Math.floor(Math.random() * colors.length)]
    })
  }

  splitText() {
    var text = this.props.storyText
    let storyArr = text.split('\n')
    let parts = Math.ceil(storyArr.length / 12)
    let i = 0
    let storySplit = []
    console.log("PARTS ", parts)
    console.log("SPLIT", storyArr)

    while (i < storyArr.length) {
      var j = 0
      var string = ''
      while (storyArr[i + j] && j < parts) {
        string += storyArr[i + j]
        j++
      }
      storySplit.push(string)
      i = i + parts
    }
    return storySplit
  }

  // characterImages() {
  //   var characterRenders
  //   var charKeys = Object.keys(this.props.characters)

  //   for (var i = 0; i < this.state.splitStory.length; i++) {
  //     var section = this.state.splitStory[i]
  //     console.log('made it')
  //     for (var charName in this.props.characters) {
  //       if (section.indexOf(charName)) {
  //         characterRenders += <Entity primitive="a-plane" material="opacity:0.99999" position="0 1 0" src={this.props.characters[charName]} rotation="0 90 0" height="1" width="1"/>
  //       }
  //     }
  //   }
  // }

  componentWillMount() {
    this.setState({
      splitStory: this.splitText()
    })
  }

  render() {
    var characterRenders
    var charKeys = Object.keys(this.props.characters)

    for (var i = 0; i < this.state.splitStory.length; i++) {
      var section = this.state.splitStory[i]
      console.log('made it')
      for (var charName in this.props.characters) {
        if (section.indexOf(charName)) {
          console.log('also made it')
          characterRenders += <Entity primitive="a-plane" material="opacity:0.99999" position="0 1 0" src={this.props.characters[charName]} rotation="0 90 0" height="1" width="1"/>
          console.log("reners ", characterRenders)
        }
      }
    }

    return (
      <Scene>
        <a-assets>
          <img id="groundTexture" src="https://cdn.aframe.io/a-painter/images/floor.jpg"/>
          <img id="skyTexture" src="https://cdn.aframe.io/a-painter/images/sky.jpg"/>
        </a-assets>

        <Entity primitive="a-plane" src="#groundTexture" rotation="-90 0 0" height="100" width="100"/>
        {characterRenders}
        <Entity primitive="a-light" type="ambient" color="#445451"/>
        <Entity primitive="a-light" type="point" intensity="2" position="2 4 4"/>
        <Entity primitive="a-sky" height="2048" radius="30" src="#skyTexture" theta-length="90" width="2048"/>

        <Entity text={{value: 'Sadness', align: 'center'}} position={{x: 0, y: 2, z: -1}}/>
        <Entity text={{value: this.state.splitStory[0], align: 'center'}} position={{x: 0, y: 2, z: -1}}/>



        <Entity primitive="a-camera">
          <Entity primitive="a-cursor" animation__click={{property: 'scale', startEvents: 'click', from: '0.1 0.1 0.1', to: '1 1 1', dur: 150}}/>
        </Entity>
      </Scene>
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
  }
)(Sadness)
