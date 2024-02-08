import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {eachTeamCard} = props
  const {id, name, teamImageUrl} = eachTeamCard
  return (
    <Link to={`/team-matches/${id}`} className="link-items">
      {' '}
      <div className="each-team-card">
        <img src={teamImageUrl} alt="team logo" className="image-logo" />
        <p className="team-name">{name}</p>
      </div>
    </Link>
  )
}

export default TeamCard
