// Write your code here
import './index.css'

import Loader from 'react-loader-spinner'

import {Component} from 'react'

import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {
    teamBannerUrl: '',
    latestMatches: [],
    recentMatches: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamMatchesList()
  }

  getTeamMatchesList = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)

    const data = await response.json()

    const updatedData = data.recent_matches.map(each => ({
      id: each.id,
      competingTeamLogo: each.competing_team_logo,
      competingTeam: each.competing_team,
      result: each.result,
      matchStatus: each.match_status,
    }))

    this.setState({
      teamBannerUrl: data.team_banner_url,
      latestMatches: data.latest_match_details,
      recentMatches: updatedData,
      isLoading: false,
    })
  }

  render() {
    const {teamBannerUrl, latestMatches, recentMatches, isLoading} = this.state
    return isLoading ? (
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
      <div className="team-matches-container">
        <img src={teamBannerUrl} alt="team banner" className="team-banner" />

        <div className="Latest-matches-container">
          <div className="latest-match-col-1">
            <p className="competing-team">{latestMatches.competing_team}</p>
            <p className="competing-team">{latestMatches.date}</p>
            <p className="competing-team">{latestMatches.venue}</p>
            <p className="competing-team">{latestMatches.result}</p>
          </div>

          <div className="latest-match-col-2">
            <img
              src={latestMatches.competing_team_logo}
              className="competing-team-logo"
              alt={`latest match ${latestMatches.competing_team}`}
            />
          </div>

          <div className="latest-match-col-3">
            <p className="competing-team text-alighn">First Innings</p>
            <p className="competing-team text-alighn">
              {latestMatches.first_innings}
            </p>

            <p className="competing-team text-alighn">Second Innings</p>
            <p className="competing-team text-alighn">
              {latestMatches.second_innings}
            </p>

            <p className="competing-team text-alighn">Man Of The Match</p>
            <p className="competing-team text-alighn">
              {latestMatches.man_of_the_match}
            </p>

            <p className="competing-team text-alighn">umpires</p>
            <p className="competing-team text-alighn">
              {latestMatches.umpires}
            </p>
          </div>
        </div>

        <div className="recentMatchConatiner">
          {recentMatches.map(each => (
            <li key={each.id} className="list-style">
              <MatchCard matchCardDetails={each} />
            </li>
          ))}
        </div>
      </div>
    )
  }
}

export default TeamMatches
