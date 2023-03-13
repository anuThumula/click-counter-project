// Write your code here
import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onClickingButton = () => {
    this.setState(prevState => {
      console.log(`previous state value ${prevState}`)
      return {count: prevState.count + 1}
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">
          The Button has been clicked <span className="count">{count} </span>
          times
        </h1>
        <p className="para">Click the button to increase the count!</p>
        <div className="button-cont">
          <button
            className="button"
            type="button"
            onClick={this.onClickingButton}
          >
            Click Me!
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
