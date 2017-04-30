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

  componentWillMount() {
    this.setState({
      splitStory: this.splitText()
    })
  }

  render() {
    const charNameArr = Object.keys(this.props.characters)

    return (
      <Scene>
        <a-assets>
          <img id="groundTexture" src="https://cdn.aframe.io/a-painter/images/floor.jpg"/>
          <img id="skyTexture" src="https://cdn.aframe.io/a-painter/images/sky.jpg"/>
        </a-assets>

        <Entity primitive="a-plane" color="" rotation="-90 0 0" height="100" width="100"/>
        <Entity primitive="a-light" type="ambient" color="#445451"/>
        <Entity primitive="a-light" type="hemisphere" intensity="1" position="2 4 4"/>
        <Entity primitive="a-sky" height="2048" radius="30" src="#skyTexture" theta-length="90" width="2048"/>

        <Entity text={{value: this.state.splitStory[0], align: 'center'}} position={{x: -10.711, y: 2.637, z: 18.729}}/>
        {
          this.state.splitStory[0] && charNameArr[0] && this.state.splitStory[0].toLowerCase().indexOf(charNameArr[0]) > -1 &&
            <Entity primitive="a-plane" material="opacity:0.99" position="-11.614 0.853 18.577" src={this.props.characters[charNameArr[0]]} rotation="0 0 0" height="1" width="1"/>
        }
        {this.state.splitStory[0] && charNameArr[1] && this.state.splitStory[0].toLowerCase().indexOf(charNameArr[1]) > -1 &&
            <Entity primitive="a-plane" material="opacity:0.99" position="-11.457 0.931 18.565" src={this.props.characters[charNameArr[1]]} rotation="0 0 0" height="1" width="1"/>
        }
        {this.state.splitStory[0] && charNameArr[2] && this.state.splitStory[0].toLowerCase().indexOf(charNameArr[2]) > -1 &&
            <Entity primitive="a-plane" material="opacity:0.99999" position="0 5 0" src={this.props.characters[charNameArr[2]]} rotation="0 0 0" height="1" width="1"/>
        }
        {this.state.splitStory[0] && charNameArr[3] && this.state.splitStory[0].toLowerCase().indexOf(charNameArr[3]) > -1 &&
            <Entity primitive="a-plane" material="opacity:0.99999" position="0 7 0" src={this.props.characters[charNameArr[3]]} rotation="0 0 0" height="1" width="1"/>
        }

        <Entity text={{value: this.state.splitStory[1], align: 'center'}} position={{x: 2, y: 2, z: -1}}/>
        {
          this.state.splitStory[1] && charNameArr[0] && this.state.splitStory[1].toLowerCase().indexOf(charNameArr[0]) > -1 &&
            <Entity primitive="a-plane" material="opacity:0.99999" position="2 1 0" src={this.props.characters[charNameArr[0]]} rotation="0 90 0" height="1" width="1"/>
        }
        {this.state.splitStory[1] && charNameArr[1] && this.state.splitStory[1].toLowerCase().indexOf(charNameArr[1]) > -1 &&
            <Entity primitive="a-plane" material="opacity:0.99999" position="2 3 0" src={this.props.characters[charNameArr[1]]} rotation="0 90 0" height="1" width="1"/>
        }
        {this.state.splitStory[1] && charNameArr[2] && this.state.splitStory[1].toLowerCase().indexOf(charNameArr[2]) > -1 &&
            <Entity primitive="a-plane" material="opacity:0.99999" position="2 5 0" src={this.props.characters[charNameArr[2]]} rotation="0 90 0" height="1" width="1"/>
        }
        {this.state.splitStory[1] && charNameArr[3] && this.state.splitStory[1].toLowerCase().indexOf(charNameArr[3]) > -1 &&
            <Entity primitive="a-plane" material="opacity:0.99999" position="2 7 0" src={this.props.characters[charNameArr[3]]} rotation="0 90 0" height="1" width="1"/>
        }

        <Entity text={{value: this.state.splitStory[2], align: 'center'}} position={{x: 4, y: 2, z: -1}}/>
        {
          this.state.splitStory[2] && charNameArr[0] && this.state.splitStory[2].toLowerCase().indexOf(charNameArr[0]) > -1 &&
            <Entity primitive="a-plane" material="opacity:0.99999" position="4 1 0" src={this.props.characters[charNameArr[0]]} rotation="0 90 0" height="1" width="1"/>
        }
        {this.state.splitStory[2] && charNameArr[1] && this.state.splitStory[2].toLowerCase().indexOf(charNameArr[1]) > -1 &&
            <Entity primitive="a-plane" material="opacity:0.99999" position="4 3 0" src={this.props.characters[charNameArr[1]]} rotation="0 90 0" height="1" width="1"/>
        }
        {this.state.splitStory[2] && charNameArr[2] && this.state.splitStory[2].toLowerCase().indexOf(charNameArr[2]) > -1 &&
            <Entity primitive="a-plane" material="opacity:0.99999" position="4 5 0" src={this.props.characters[charNameArr[2]]} rotation="0 90 0" height="1" width="1"/>
        }
        {this.state.splitStory[2] && charNameArr[3] && this.state.splitStory[2].toLowerCase().indexOf(charNameArr[3]) > -1 &&
            <Entity primitive="a-plane" material="opacity:0.99999" position="4 7 0" src={this.props.characters[charNameArr[3]]} rotation="0 90 0" height="1" width="1"/>
        }

        <Entity text={{value: this.state.splitStory[3], align: 'center'}} position={{x: 6, y: 2, z: -1}}/>
        {
          this.state.splitStory[3] && charNameArr[0] && this.state.splitStory[3].toLowerCase().indexOf(charNameArr[0]) > -1 &&
            <Entity primitive="a-plane" material="opacity:0.99999" position="6 1 0" src={this.props.characters[charNameArr[0]]} rotation="0 90 0" height="1" width="1"/>
        }
        {this.state.splitStory[3] && charNameArr[1] && this.state.splitStory[3].toLowerCase().indexOf(charNameArr[1]) > -1 &&
            <Entity primitive="a-plane" material="opacity:0.99999" position="6 3 0" src={this.props.characters[charNameArr[1]]} rotation="0 90 0" height="1" width="1"/>
        }
        {this.state.splitStory[3] && charNameArr[2] && this.state.splitStory[3].toLowerCase().indexOf(charNameArr[2]) > -1 &&
            <Entity primitive="a-plane" material="opacity:0.99999" position="6 5 0" src={this.props.characters[charNameArr[2]]} rotation="0 90 0" height="1" width="1"/>
        }
        {this.state.splitStory[3] && charNameArr[3] && this.state.splitStory[3].toLowerCase().indexOf(charNameArr[3]) > -1 &&
            <Entity primitive="a-plane" material="opacity:0.99999" position="6 7 0" src={this.props.characters[charNameArr[3]]} rotation="0 90 0" height="1" width="1"/>
        }

        <Entity text={{value: this.state.splitStory[4], align: 'center'}} position={{x: 8, y: 2, z: -1}}/>
        {
          this.state.splitStory[4] && charNameArr[0] && this.state.splitStory[4].toLowerCase().indexOf(charNameArr[0]) > -1 &&
            <Entity primitive="a-plane" material="opacity:0.99999" position="8 1 0" src={this.props.characters[charNameArr[0]]} rotation="0 90 0" height="1" width="1"/>
        }
        {this.state.splitStory[4] && charNameArr[1] && this.state.splitStory[4].toLowerCase().indexOf(charNameArr[1]) > -1 &&
            <Entity primitive="a-plane" material="opacity:0.99999" position="8 3 0" src={this.props.characters[charNameArr[1]]} rotation="0 90 0" height="1" width="1"/>
        }
        {this.state.splitStory[4] && charNameArr[2] && this.state.splitStory[4].toLowerCase().indexOf(charNameArr[2]) > -1 &&
            <Entity primitive="a-plane" material="opacity:0.99999" position="8 5 0" src={this.props.characters[charNameArr[2]]} rotation="0 90 0" height="1" width="1"/>
        }
        {this.state.splitStory[4] && charNameArr[3] && this.state.splitStory[4].toLowerCase().indexOf(charNameArr[3]) > -1 &&
            <Entity primitive="a-plane" material="opacity:0.99999" position="8 7 0" src={this.props.characters[charNameArr[3]]} rotation="0 90 0" height="1" width="1"/>
        }

        <Entity text={{value: this.state.splitStory[5], align: 'center'}} position={{x: 10, y: 2, z: -1}}/>
        {
          this.state.splitStory[5] && charNameArr[0] && this.state.splitStory[5].toLowerCase().indexOf(charNameArr[0]) > -1 &&
            <Entity primitive="a-plane" material="opacity:0.99999" position="10 1 0" src={this.props.characters[charNameArr[0]]} rotation="0 90 0" height="1" width="1"/>
        }
        {this.state.splitStory[5] && charNameArr[1] && this.state.splitStory[5].toLowerCase().indexOf(charNameArr[1]) > -1 &&
            <Entity primitive="a-plane" material="opacity:0.99999" position="10 3 0" src={this.props.characters[charNameArr[1]]} rotation="0 90 0" height="1" width="1"/>
        }
        {this.state.splitStory[5] && charNameArr[2] && this.state.splitStory[5].toLowerCase().indexOf(charNameArr[2]) > -1 &&
            <Entity primitive="a-plane" material="opacity:0.99999" position="10 5 0" src={this.props.characters[charNameArr[2]]} rotation="0 90 0" height="1" width="1"/>
        }
        {this.state.splitStory[5] && charNameArr[3] && this.state.splitStory[5].toLowerCase().indexOf(charNameArr[3]) > -1 &&
            <Entity primitive="a-plane" material="opacity:0.99999" position="10 7 0" src={this.props.characters[charNameArr[3]]} rotation="0 90 0" height="1" width="1"/>
        }

        <Entity text={{value: this.state.splitStory[6], align: 'center'}} position={{x: 12, y: 2, z: -1}}/>
        {
          this.state.splitStory[6] && charNameArr[0] && this.state.splitStory[6].toLowerCase().indexOf(charNameArr[0]) > -1 &&
            <Entity primitive="a-plane" material="opacity:0.99999" position="12 1 0" src={this.props.characters[charNameArr[0]]} rotation="0 90 0" height="1" width="1"/>
        }
        {this.state.splitStory[6] && charNameArr[1] && this.state.splitStory[6].toLowerCase().indexOf(charNameArr[1]) > -1 &&
            <Entity primitive="a-plane" material="opacity:0.99999" position="12 3 0" src={this.props.characters[charNameArr[1]]} rotation="0 90 0" height="1" width="1"/>
        }
        {this.state.splitStory[6] && charNameArr[2] && this.state.splitStory[6].toLowerCase().indexOf(charNameArr[2]) > -1 &&
            <Entity primitive="a-plane" material="opacity:0.99999" position="12 5 0" src={this.props.characters[charNameArr[2]]} rotation="0 90 0" height="1" width="1"/>
        }
        {this.state.splitStory[6] && charNameArr[3] && this.state.splitStory[6].toLowerCase().indexOf(charNameArr[3]) > -1 &&
            <Entity primitive="a-plane" material="opacity:0.99999" position="12 7 0" src={this.props.characters[charNameArr[3]]} rotation="0 90 0" height="1" width="1"/>
        }

        <Entity text={{value: this.state.splitStory[7], align: 'center'}} position={{x: 14, y: 2, z: -1}}/>
        {
          this.state.splitStory[7] && charNameArr[0] && this.state.splitStory[7].toLowerCase().indexOf(charNameArr[0]) > -1 &&
            <Entity primitive="a-plane" material="opacity:0.99999" position="14 1 0" src={this.props.characters[charNameArr[0]]} rotation="0 90 0" height="1" width="1"/>
        }
        {this.state.splitStory[7] && charNameArr[1] && this.state.splitStory[7].toLowerCase().indexOf(charNameArr[1]) > -1 &&
            <Entity primitive="a-plane" material="opacity:0.99999" position="14 3 0" src={this.props.characters[charNameArr[1]]} rotation="0 90 0" height="1" width="1"/>
        }
        {this.state.splitStory[7] && charNameArr[2] && this.state.splitStory[7].toLowerCase().indexOf(charNameArr[2]) > -1 &&
            <Entity primitive="a-plane" material="opacity:0.99999" position="14 5 0" src={this.props.characters[charNameArr[2]]} rotation="0 90 0" height="1" width="1"/>
        }
        {this.state.splitStory[7] && charNameArr[3] && this.state.splitStory[7].toLowerCase().indexOf(charNameArr[3]) > -1 &&
            <Entity primitive="a-plane" material="opacity:0.99999" position="14 7 0" src={this.props.characters[charNameArr[3]]} rotation="0 90 0" height="1" width="1"/>
        }

        <Entity text={{value: this.state.splitStory[8], align: 'center'}} position={{x: 16, y: 2, z: -1}}/>
        {
          this.state.splitStory[8] && charNameArr[0] && this.state.splitStory[8].toLowerCase().indexOf(charNameArr[0]) > -1 &&
            <Entity primitive="a-plane" material="opacity:0.99999" position="16 1 0" src={this.props.characters[charNameArr[0]]} rotation="0 90 0" height="1" width="1"/>
        }
        {this.state.splitStory[8] && charNameArr[1] && this.state.splitStory[8].toLowerCase().indexOf(charNameArr[1]) > -1 &&
            <Entity primitive="a-plane" material="opacity:0.99999" position="16 3 0" src={this.props.characters[charNameArr[1]]} rotation="0 90 0" height="1" width="1"/>
        }
        {this.state.splitStory[8] && charNameArr[2] && this.state.splitStory[8].toLowerCase().indexOf(charNameArr[2]) > -1 &&
            <Entity primitive="a-plane" material="opacity:0.99999" position="16 5 0" src={this.props.characters[charNameArr[2]]} rotation="0 90 0" height="1" width="1"/>
        }
        {this.state.splitStory[8] && charNameArr[3] && this.state.splitStory[8].toLowerCase().indexOf(charNameArr[3]) > -1 &&
            <Entity primitive="a-plane" material="opacity:0.99999" position="16 7 0" src={this.props.characters[charNameArr[3]]} rotation="0 90 0" height="1" width="1"/>
        }

        <Entity text={{value: this.state.splitStory[9], align: 'center'}} position={{x: 18, y: 2, z: -1}}/>
        {
          this.state.splitStory[9] && charNameArr[0] && this.state.splitStory[9].toLowerCase().indexOf(charNameArr[0]) > -1 &&
            <Entity primitive="a-plane" material="opacity:0.99999" position="18 1 0" src={this.props.characters[charNameArr[0]]} rotation="0 90 0" height="1" width="1"/>
        }
        {this.state.splitStory[9] && charNameArr[1] && this.state.splitStory[9].toLowerCase().indexOf(charNameArr[1]) > -1 &&
            <Entity primitive="a-plane" material="opacity:0.99999" position="18 3 0" src={this.props.characters[charNameArr[1]]} rotation="0 90 0" height="1" width="1"/>
        }
        {this.state.splitStory[9] && charNameArr[2] && this.state.splitStory[9].toLowerCase().indexOf(charNameArr[2]) > -1 &&
            <Entity primitive="a-plane" material="opacity:0.99999" position="18 5 0" src={this.props.characters[charNameArr[2]]} rotation="0 90 0" height="1" width="1"/>
        }
        {this.state.splitStory[9] && charNameArr[3] && this.state.splitStory[9].toLowerCase().indexOf(charNameArr[3]) > -1 &&
            <Entity primitive="a-plane" material="opacity:0.99999" position="18 7 0" src={this.props.characters[charNameArr[3]]} rotation="0 90 0" height="1" width="1"/>
        }

        <Entity text={{value: this.state.splitStory[10], align: 'center'}} position={{x: 20, y: 2, z: -1}}/>
        {
          this.state.splitStory[10] && charNameArr[0] && this.state.splitStory[10].toLowerCase().indexOf(charNameArr[0]) > -1 &&
            <Entity primitive="a-plane" material="opacity:0.99999" position="20 1 0" src={this.props.characters[charNameArr[0]]} rotation="0 90 0" height="1" width="1"/>
        }
        {this.state.splitStory[10] && charNameArr[1] && this.state.splitStory[10].toLowerCase().indexOf(charNameArr[1]) > -1 &&
            <Entity primitive="a-plane" material="opacity:0.99999" position="20 3 0" src={this.props.characters[charNameArr[1]]} rotation="0 90 0" height="1" width="1"/>
        }
        {this.state.splitStory[10] && charNameArr[2] && this.state.splitStory[10].toLowerCase().indexOf(charNameArr[2]) > -1 &&
            <Entity primitive="a-plane" material="opacity:0.99999" position="20 5 0" src={this.props.characters[charNameArr[2]]} rotation="0 90 0" height="1" width="1"/>
        }
        {this.state.splitStory[10] && charNameArr[3] && this.state.splitStory[10].toLowerCase().indexOf(charNameArr[3]) > -1 &&
            <Entity primitive="a-plane" material="opacity:0.99999" position="20 7 0" src={this.props.characters[charNameArr[3]]} rotation="0 90 0" height="1" width="1"/>
        }

        <Entity text={{value: this.state.splitStory[11], align: 'center'}} position={{x: 22, y: 2, z: -1}}/>
        {
          this.state.splitStory[11] && charNameArr[0] && this.state.splitStory[11].toLowerCase().indexOf(charNameArr[0]) > -1 &&
            <Entity primitive="a-plane" material="opacity:0.99999" position="22 1 0" src={this.props.characters[charNameArr[0]]} rotation="0 90 0" height="1" width="1"/>
        }
        {this.state.splitStory[11] && charNameArr[1] && this.state.splitStory[11].toLowerCase().indexOf(charNameArr[1]) > -1 &&
            <Entity primitive="a-plane" material="opacity:0.99999" position="22 3 0" src={this.props.characters[charNameArr[1]]} rotation="0 90 0" height="1" width="1"/>
        }
        {this.state.splitStory[11] && charNameArr[2] && this.state.splitStory[11].toLowerCase().indexOf(charNameArr[2]) > -1 &&
            <Entity primitive="a-plane" material="opacity:0.99999" position="22 5 0" src={this.props.characters[charNameArr[2]]} rotation="0 90 0" height="1" width="1"/>
        }
        {this.state.splitStory[11] && charNameArr[3] && this.state.splitStory[11].toLowerCase().indexOf(charNameArr[3]) > -1 &&
            <Entity primitive="a-plane" material="opacity:0.99999" position="22 7 0" src={this.props.characters[charNameArr[3]]} rotation="0 90 0" height="1" width="1"/>
        }

        <Entity text={{value: this.state.splitStory[12], align: 'center'}} position={{x: 24, y: 2, z: -1}}/>
        {
          this.state.splitStory[12] && charNameArr[0] && this.state.splitStory[12].toLowerCase().indexOf(charNameArr[0]) > -1 &&
            <Entity primitive="a-plane" material="opacity:0.99999" position="24 1 0" src={this.props.characters[charNameArr[0]]} rotation="0 90 0" height="1" width="1"/>
        }
        {this.state.splitStory[12] && charNameArr[1] && this.state.splitStory[12].toLowerCase().indexOf(charNameArr[1]) > -1 &&
            <Entity primitive="a-plane" material="opacity:0.99999" position="24 3 0" src={this.props.characters[charNameArr[1]]} rotation="0 90 0" height="1" width="1"/>
        }
        {this.state.splitStory[12] && charNameArr[2] && this.state.splitStory[12].toLowerCase().indexOf(charNameArr[2]) > -1 &&
            <Entity primitive="a-plane" material="opacity:0.99999" position="24 5 0" src={this.props.characters[charNameArr[2]]} rotation="0 90 0" height="1" width="1"/>
        }
        {this.state.splitStory[12] && charNameArr[3] && this.state.splitStory[12].toLowerCase().indexOf(charNameArr[3]) > -1 &&
            <Entity primitive="a-plane" material="opacity:0.99999" position="24 7 0" src={this.props.characters[charNameArr[3]]} rotation="0 90 0" height="1" width="1"/>
        }

        <Entity primitive="a-camera" position="-10.933 2.864 19.587" rotation="-17.533 8.824 1.719">
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


//looping through character renders instead of hardcoding, on top of each other
// {Object.keys(this.props.characters).map(key => (
//           this.state.splitStory[0].toLowerCase().indexOf(key) > -1 &&
//             <Entity primitive="a-plane" material="opacity:0.99999" position="0 1 0" src={this.props.characters[key]} rotation="0 90 0" height="1" width="1"/>
//           )
//         )}

// var characterRenders
//     var charKeys = Object.keys(this.props.characters)

//     for (var i = 0; i < this.state.splitStory.length; i++) {
//       var section = this.state.splitStory[i]
//       console.log('made it')
//       for (var charName in this.props.characters) {
//         if (section.indexOf(charName)) {
//           console.log('also made it')
//           characterRenders += <Entity primitive="a-plane" material="opacity:0.99999" position="0 1 0" src={this.props.characters[charName]} rotation="0 90 0" height="1" width="1"/>
//           console.log("reners ", characterRenders)
//         }
//       }
//     }
