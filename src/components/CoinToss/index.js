// Write your code here
// Write your code here
import {Component} from 'react'

import './index.css'

const HeadsImgUrl = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const TailsImgUrl = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {headsCount: 0, tailsCount: 0, imageUrl: HeadsImgUrl}

  onClickTossCoin = () => {
    const {headsCount, tailsCount} = this.state
    let tossImage = ''
    let latestHeadsCount = headsCount
    let latestTailsCount = tailsCount

    const randomResult = Math.floor(Math.random() * 2)
    if (randomResult === 0) {
      latestHeadsCount += 1
      tossImage = HeadsImgUrl
    } else {
      latestTailsCount += 1
      tossImage = TailsImgUrl
    }
    this.setState({
      headsCount: latestHeadsCount,
      tailsCount: latestTailsCount,
      imageUrl: tossImage,
    })
  }

  render() {
    const {headsCount, tailsCount, imageUrl} = this.state
    const totalCount = tailsCount + headsCount
    return (
      <div className="app-container">
        <div className="coin-toss-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <img className="coin-image" src={imageUrl} alt="toss result" />
          <button
            className="button"
            onClick={this.onClickTossCoin}
            type="button"
          >
            Toss Coin
          </button>
          <div className="result-count-container">
            <p className="result-sum">Total: {totalCount}</p>
            <p className="result-sum">Heads: {headsCount}</p>
            <p className="result-sum">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
