// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  increaseMangoCount = () => {
    this.setState(prevCount => ({mango: prevCount.mango + 1}))
  }

  increaseBananaCount = () => {
    this.setState(prevCount => ({banana: prevCount.banana + 1}))
  }

  render() {
    const {mango, banana} = this.state

    return (
      <div className="bg-container">
        <div className="container-2">
          <h1 className="heading">
            Bob ate <span className="counts">{mango}</span> mangoes{' '}
            <span className="counts">{banana}</span> bananas
          </h1>
          <div className="fruits-container">
            <div className="card">
              <img
                className="fruit-image"
                alt="mango"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              />
              <button
                className="button"
                onClick={this.increaseMangoCount}
                type="button"
              >
                Eat Mango
              </button>
            </div>

            <div className="card">
              <img
                className="fruit-image"
                alt="banana"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              />
              <button
                className="button"
                onClick={this.increaseBananaCount}
                type="button"
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
