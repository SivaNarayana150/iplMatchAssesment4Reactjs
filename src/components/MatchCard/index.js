// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchCardDetails} = props
  const {
    competingTeamLogo,
    competingTeam,
    result,
    matchStatus,
  } = matchCardDetails
  const matchStatusStyle = matchStatus === 'Lost' ? 'red-style' : 'green-style'

  return (
    <div className="match-card-container">
      <img src={competingTeamLogo} className="logo-image" alt="logo" />
      <h1 className="texting">{competingTeam}</h1>
      <p className="texting">{result}</p>

      <p className={matchStatusStyle}>{matchStatus}</p>
    </div>
  )
}

export default MatchCard
