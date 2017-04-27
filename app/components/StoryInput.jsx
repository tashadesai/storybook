import React from 'react'
import {connect} from 'react-redux'
import {fetchEmotion} from '../reducers/tone'
// import ReviewContainer from './ReviewContainer'
// import {getSingleGlassesReviews} from '../reducers/reviews'

class StoryInput extends React.Component {
  constructor(props) {
    super(props)
    this.emotionAnalysis = this.emotionAnalysis.bind(this)
  }

  emotionAnalysis(evt) {
    evt.preventDefault()
    this.props.analyzeEmotion(evt.target.storyInput.value)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.emotionAnalysis}>
          <div className="form-group">
            <textarea type="text" className="form-control" placeholder="Story" name="storyInput"/>
          </div>
          <button className="btn btn-default">Submit</button>
        </form>
        <div>
          <h2>emotion: {this.props.emotion}</h2>
        </div>
      </div>
    )
  }
}

export default connect(
  function mapStateToProps(state) {
    return {
      emotion: state.tone.emotion,
      storyText: state.tone.storyText
    }
  },
  function mapDispatchToProps(dispatch) {
    return {
      analyzeEmotion: (input) => {
        dispatch(fetchEmotion(input))
      }
    }
  }
)(StoryInput)

