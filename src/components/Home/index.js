// Write your code here
import './index.css'

import {Link} from 'react-router-dom'

import Loader from 'react-loader-spinner'

import {Component} from 'react'

import TeamCard from '../TeamCard'

class Home extends Component {
  state = {teamCardList: [], isLoading: true}

  componentDidMount() {
    this.getTeamCardList()
  }

  getTeamCardList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const updatedData = data.teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))

    this.setState({teamCardList: updatedData, isLoading: false})
  }

  render() {
    const {teamCardList, isLoading} = this.state

    return (
      <div className="bg-container">
        <div className="main-heading-logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="logo-image"
          />

          <h1 className="main-heading">IPL Dashboard</h1>
        </div>

        <div className="teams-card-container">
          {isLoading ? (
            <div data-testid="loader">
              <Loader
                type="TailSpin"
                height={50}
                width={50}
                color="#5755a7"
                className="loaderStyle"
                data-testid="loader"
              />
            </div>
          ) : (
            teamCardList.map(each => (
              <li key={each.id} className="list-style">
                <Link to={`/team-matches/${each.id}`}>
                  <TeamCard teamCardList={each} />
                </Link>
              </li>
            ))
          )}
        </div>
      </div>
    )
  }
}
export default Home
