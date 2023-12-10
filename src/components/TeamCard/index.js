// Write your code here

import './index.css'

const TeamCard = props => {
  const {teamCardList} = props
  const {name, teamImageUrl} = teamCardList

  return (
    <div className="team-card">
      <img src={teamImageUrl} alt={name} className="image-logo" />

      <p className="team-name">{name}</p>
    </div>
  )
}

export default TeamCard
