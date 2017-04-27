import React from 'react'
import {connect} from 'react-redux'

function Sadness(props) {
  return (
    <div style={{marginTop: 50, marginLeft: 20, marginRight: 20}}>
      <div className="col-lg-6">
        <h3>Sadness</h3>
      </div>
    </div>
  )
}

export default connect(
)(Sadness)
