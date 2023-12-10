// Write your code here

import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamCardList} = props
  const {id, name, teamImageUrl} = teamCardList

  return (
    <Link to={`/ipl/${id}`}>
      <div className="team-card">
        <img src={teamImageUrl} alt={name} className="image-logo" />

        <h1 className="team-name">{name}</h1>
      </div>
    </Link>
  )
}

export default TeamCard
