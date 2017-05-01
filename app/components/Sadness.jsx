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
    this.posOne = this.posOne.bind(this)
  }

  posOne(x, y, z) {
    const first = x - 2.474
    const second = y - 0.723
    const third = z - 0.21

    return '' + first + ' ' + second + ' ' + third + ''
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
      <Scene fog="type: linear; color: #AAB; far: 30; near: ">
        <a-assets>
          <img id="skyTexture" src="https://cdn.aframe.io/a-painter/images/sky.jpg"/>
        </a-assets>

        <Entity primitive="a-plane" src="#skyTexture" rotation="-90 0 0" height="100" width="100"/>
        <Entity primitive="a-light" type="ambient" color="#445451"/>
        <Entity primitive="a-light" type="point" intensity="0.5" position="2 14 4"/>
        <Entity primitive="a-light" type="point" intensity="0.5" position="-12.869 5.177 27.03"/>
        <Entity primitive="a-sky" height="2048" radius="30" src="#skyTexture" theta-length="90" width="2048"/>
        <Entity star/>
        <Entity primitive="a-plane" material="opacity:0.99" position="-10.6 4.111 17.16" side="double" transparent="true" scale="6 1 1" src="http://i.imgur.com/XkoUyij.png" rotation="0 0 0" height="1" width="1"/>

        <Entity primitive="a-plane" material="opacity:0.99" position="-10.6 3.098 14.11" rotation="90 -81.7 0" scale="3.536 1 1" side="double" transparent="true" src="http://i.imgur.com/HXELLJV.png" height="1" width="1"/>
        <Entity primitive="a-plane" material="opacity:0.99" position="-13.91 1.884 6.613" rotation="90 -51.5 0" scale="6.010 1 1" side="double" transparent="true" src="http://i.imgur.com/HXELLJV.png" height="1" width="1"/>
        <Entity primitive="a-plane" material="opacity:0.99" position="-20.4 1.35 4.92" rotation="73.1 163.1 167.1" scale="8.91 1 1" side="double" transparent="true" src="http://i.imgur.com/HXELLJV.png" height="1" width="1"/>
        <Entity primitive="a-plane" material="opacity:0.99" position="-25.6 0.605 -1.87" rotation="90 -74.3 0" scale="8.14 1 1" side="double" transparent="true" src="http://i.imgur.com/HXELLJV.png" height="1" width="1"/>
        <Entity primitive="a-plane" material="opacity:0.99" position="-22.8 0.289 -7.88" rotation="90 -145 0" scale="8.14 1 1" side="double" transparent="true" src="http://i.imgur.com/HXELLJV.png" height="1" width="1"/>
        <Entity primitive="a-plane" material="opacity:0.99" position="-13.7 0.455 -6.86" rotation="90 -35 0" scale="13.4 1 1" side="double" transparent="true" src="http://i.imgur.com/HXELLJV.png" height="1" width="1"/>
        <Entity primitive="a-plane" material="opacity:0.99" position="-0.44 0.516 -6.56" rotation="90 18.9 0" scale="16.16 2 1" side="double" transparent="true" src="http://i.imgur.com/HXELLJV.png" height="1" width="1"/>
        <Entity primitive="a-plane" material="opacity:0.99" position="13.29 1.682 -2.42" rotation="76.71 -5.04 -123" scale="18.24 3.010 1" side="double" transparent="true" src="http://i.imgur.com/HXELLJV.png" height="1" width="1"/>
        <Entity primitive="a-plane" material="opacity:0.99" position="14.61 2.43 10.61" rotation="90 49.73 0" scale="11.27 3.01 1" side="double" transparent="true" src="http://i.imgur.com/HXELLJV.png" height="1" width="1"/>
        <Entity primitive="a-plane" material="opacity:0.99" position="8.299 3.255 18.59" rotation="90 40.5 0" scale="9.2 3 1" side="double" transparent="true" src="http://i.imgur.com/HXELLJV.png" height="1" width="1"/>
        <Entity primitive="a-plane" material="opacity:0.99" position="1.386 3.608 16.89" rotation="90 111 0" scale="9.28 3 1" side="double" transparent="true" src="http://i.imgur.com/HXELLJV.png" height="1" width="1"/>

        <Entity text={{value: this.state.splitStory[0], align: 'center'}} position={{x: -10.711, y: 3.963, z: 11.96}} scale={{x: 2, y: 2, z: 2}}/>
        {
          this.state.splitStory[0] && charNameArr[0] && this.state.splitStory[0].toLowerCase().indexOf(charNameArr[0]) > -1 &&
            <Entity primitive="a-plane" material="opacity:0.99" transparent="true" position="-13.184 3.324 11.75" src={this.props.characters[charNameArr[0]]} rotation="0 0 0" height="1" width="1"/>
        }
        {this.state.splitStory[0] && charNameArr[1] && this.state.splitStory[0].toLowerCase().indexOf(charNameArr[1]) > -1 &&
            <Entity primitive="a-plane" material="opacity:0.99" transparent="true" position="-12.1 3.321 11.798" src={this.props.characters[charNameArr[1]]} rotation="0 32.31 0" height="1" width="1"/>
        }
        {this.state.splitStory[0] && charNameArr[2] && this.state.splitStory[0].toLowerCase().indexOf(charNameArr[2]) > -1 &&
            <Entity primitive="a-plane" material="opacity:0.99" transparent="true" position="-15.1 3.324 11.01" src={this.props.characters[charNameArr[2]]} rotation="0 35.409 0" height="1" width="1"/>
        }
        {this.state.splitStory[0] && charNameArr[3] && this.state.splitStory[0].toLowerCase().indexOf(charNameArr[3]) > -1 &&
            <Entity primitive="a-plane" material="opacity:0.99" transparent="true" position="-13.717 3.321 12.860" src={this.props.characters[charNameArr[3]]} rotation="0 49.56 0" height="1" width="1"/>
        }

        <Entity text={{value: this.state.splitStory[1], align: 'center'}} rotation={{x: 0, y: 12.5, z: 0}} position={{x: -15.654, y: 3.062, z: 5.339}} scale={{x: 2, y: 2, z: 2}} rotation={{x: 0, y: 26.814, z: 0}}/>
        {
          this.state.splitStory[1] && charNameArr[0] && this.state.splitStory[1].toLowerCase().indexOf(charNameArr[0]) > -1 &&
            <Entity primitive="a-plane" material="opacity:0.99999" transparent="true" position="-14.3 2.655 5.859" src={this.props.characters[charNameArr[0]]} transparent="true" rotation="0 0 0" height="1" width="1"/>
        }
        {this.state.splitStory[1] && charNameArr[1] && this.state.splitStory[1].toLowerCase().indexOf(charNameArr[1]) > -1 &&
            <Entity primitive="a-plane" material="opacity:0.99999" transparent="true" position="-13.2 2.655 6.363" src={this.props.characters[charNameArr[1]]} transparent="true" rotation="0 0 0" height="1" width="1"/>
        }
        {this.state.splitStory[1] && charNameArr[2] && this.state.splitStory[1].toLowerCase().indexOf(charNameArr[2]) > -1 &&
            <Entity primitive="a-plane" material="opacity:0.99999" transparent="true" position="-12.2 2.655 7.017" src={this.props.characters[charNameArr[2]]} transparent="true" rotation="0 0 0" height="1" width="1"/>
        }
        {this.state.splitStory[1] && charNameArr[3] && this.state.splitStory[1].toLowerCase().indexOf(charNameArr[3]) > -1 &&
            <Entity primitive="a-plane" material="opacity:0.99999" transparent="true" position="-11.7 2.655 7.716" src={this.props.characters[charNameArr[3]]} transparent="true" rotation="0 0 0" height="1" width="1"/>
        }

        <Entity text={{value: this.state.splitStory[2], align: 'center'}} position={{x: -24.6, y: 2, z: 3.318}} rotation={{x: 0, y: 61.3, z: 0}} scale={{x: 2, y: 2, z: 2}}/>
        {
          this.state.splitStory[2] && charNameArr[0] && this.state.splitStory[2].toLowerCase().indexOf(charNameArr[0]) > -1 &&
            <Entity primitive="a-plane" material="opacity:0.99999" position="4 1 0" position={this.posOne(-24.6, 2, 3.318)} src={this.props.characters[charNameArr[0]]} rotation="0 90 0" height="1" width="1"/>
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

        <Entity text={{value: this.state.splitStory[3], align: 'center'}} position={{x: -26.8, y: 1.327, z: -5.21}} scale={{x: 2, y: 2, z: 2}}/>
        {
          this.state.splitStory[3] && charNameArr[0] && this.state.splitStory[3].toLowerCase().indexOf(charNameArr[0]) > -1 &&
            <Entity primitive="a-plane" material="opacity:0.99999" position="6 1 0" position="-30.4 1.327 -5.21" src={this.props.characters[charNameArr[0]]} rotation="0 90 0" height="1" width="1"/>
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

        <Entity text={{value: this.state.splitStory[4], align: 'center'}} position={{x: -19.5, y: 0.935, z: -10.2}} rotation={{x: 0, y: -21.887, z: 0}} scale={{x: 2, y: 2, z: 2}}/>
        {
          this.state.splitStory[4] && charNameArr[0] && this.state.splitStory[4].toLowerCase().indexOf(charNameArr[0]) > -1 &&
            <Entity primitive="a-plane" material="opacity:0.99999" position="8 1 0" position="-23.1 0.935 -10.2" src={this.props.characters[charNameArr[0]]} rotation="0 90 0" height="1" width="1"/>
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

        <Entity text={{value: this.state.splitStory[5], align: 'center'}} position={{x: -8.45, y: 2, z: -3.92}} rotation={{x: 0, y: -130, z: 0}} scale={{x: 2, y: 2, z: 2}}/>
        {
          this.state.splitStory[5] && charNameArr[0] && this.state.splitStory[5].toLowerCase().indexOf(charNameArr[0]) > -1 &&
            <Entity primitive="a-plane" material="opacity:0.99999" position="10 1 0" position="-8.45 2 -3.92" src={this.props.characters[charNameArr[0]]} rotation="0 90 0" height="1" width="1"/>
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

        <Entity text={{value: this.state.splitStory[6], align: 'center'}} position={{x: 6.777, y: 2, z: -9.39}} rotation={{x: 0, y: -67.27, z: 0}} scale={{x: 2, y: 2, z: 2}}/>
        {
          this.state.splitStory[6] && charNameArr[0] && this.state.splitStory[6].toLowerCase().indexOf(charNameArr[0]) > -1 &&
            <Entity primitive="a-plane" material="opacity:0.99999" position="12 1 0" position={this.posOne(6.777, 2, -9.39)} src={this.props.characters[charNameArr[0]]} rotation="0 90 0" height="1" width="1"/>
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

        <Entity text={{value: this.state.splitStory[7], align: 'center'}} position={{x: 16.66, y: 4.801, z: 3.738}} rotation={{x: 0, y: -139, z: 0}} scale={{x: 2, y: 2, z: 2}}/>
        {
          this.state.splitStory[7] && charNameArr[0] && this.state.splitStory[7].toLowerCase().indexOf(charNameArr[0]) > -1 &&
            <Entity primitive="a-plane" material="opacity:0.99999" position="14 1 0" position={this.posOne(16.66, 4.801, 3.738)} src={this.props.characters[charNameArr[0]]} rotation="0 90 0" height="1" width="1"/>
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

        <Entity text={{value: this.state.splitStory[8], align: 'center'}} position={{x: 11.53, y: 4.639, z: 14.21}} rotation={{x: 0, y: 150.4, z: 0}} scale={{x: 2, y: 2, z: 2}}/>
        {
          this.state.splitStory[8] && charNameArr[0] && this.state.splitStory[8].toLowerCase().indexOf(charNameArr[0]) > -1 &&
            <Entity primitive="a-plane" material="opacity:0.99999" position="16 1 0" position={this.posOne(11.53, 4.639, 14.21)} src={this.props.characters[charNameArr[0]]} rotation="0 90 0" height="1" width="1"/>
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

        <Entity text={{value: this.state.splitStory[9], align: 'center'}} position={{x: 5.329, y: 4.976, z: 20.04}} rotation={{x: 0, y: -180, z: 0}} scale={{x: 2, y: 2, z: 2}}/>
        {
          this.state.splitStory[9] && charNameArr[0] && this.state.splitStory[9].toLowerCase().indexOf(charNameArr[0]) > -1 &&
            <Entity primitive="a-plane" material="opacity:0.99999" position="18 1 0" position={this.posOne(5.329, 4.976, 20.04)} src={this.props.characters[charNameArr[0]]} rotation="0 90 0" height="1" width="1"/>
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

        <Entity text={{value: this.state.splitStory[10], align: 'center'}} position={{x: 0.251, y: 4.56, z: 12.86}} rotation={{x: 0, y: 7.277, z: 0}} scale={{x: 2, y: 2, z: 2}}/>
        {
          this.state.splitStory[10] && charNameArr[0] && this.state.splitStory[10].toLowerCase().indexOf(charNameArr[0]) > -1 &&
            <Entity primitive="a-plane" material="opacity:0.99999" position="20 1 0" position={this.posOne(0.251, 4.56, 12.86)} src={this.props.characters[charNameArr[0]]} rotation="0 90 0" height="1" width="1"/>
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

        <Entity text={{value: this.state.splitStory[11], align: 'center'}} position={{x: -2.88, y: 2, z: 7.711}} rotation={{x: 0, y: -180, z: 0}} scale={{x: 2, y: 2, z: 2}}/>
        {
          this.state.splitStory[11] && charNameArr[0] && this.state.splitStory[11].toLowerCase().indexOf(charNameArr[0]) > -1 &&
            <Entity primitive="a-plane" material="opacity:0.99999" position="22 1 0" position={this.posOne(-2.88, 2, 7.711)} src={this.props.characters[charNameArr[0]]} rotation="0 90 0" height="1" width="1"/>
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

        <Entity text={{value: this.state.splitStory[12], align: 'center'}} position={{x: 24, y: 2, z: -1}} scale={{x: 2, y: 2, z: 2}}/>
        {
          this.state.splitStory[12] && charNameArr[0] && this.state.splitStory[12].toLowerCase().indexOf(charNameArr[0]) > -1 &&
            <Entity primitive="a-plane" material="opacity:0.99999" position="24 1 0" position={this.posOne(24, 2, -1)} src={this.props.characters[charNameArr[0]]} rotation="0 90 0" height="1" width="1"/>
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

        <Entity position="-10.185 2.689 19.628" rotation="-6.532 15.584 3.552">
        <Entity primitive="a-camera">
          <Entity primitive="a-cursor" animation__click={{property: 'scale', startEvents: 'click', from: '0.1 0.1 0.1', to: '1 1 1', dur: 150}}/>
        </Entity>
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
