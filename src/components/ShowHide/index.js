/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-constant-condition */
/* eslint-disable react/button-has-type */
/* eslint-disable react/require-render-return */
/* eslint-disable no-undef */
// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {first: false, last: false}

  authfirst = () => {
    this.setState(prevState => ({first: !prevState.first}))
  }

  authlast = () => {
    this.setState(prevState => ({last: !prevState.last}))
  }

  rendcheckf = () => {
    if (this.state.first === false) {
      return <p className="card">Joe</p>
    }
    return null
  }

  rendcheckl = () => {
    if (this.state.last === false) {
      return <p className="card">Jonas</p>
    }
    return null
  }

  render() {
    return (
      <div className="bg-con">
        <h1 className="head">Show/Hide</h1>
        <div className="but-con">
          <button className="butt" onClick={this.authfirst}>
            Show/Hide FirstName
          </button>
          <button className="butt" onClick={this.authlast}>
            Show/Hide LastName
          </button>
        </div>
        <div className="card-con">
          {this.rendcheckf()}
          {this.rendcheckl()}
        </div>
      </div>
    )
  }
}

export default ShowHide
