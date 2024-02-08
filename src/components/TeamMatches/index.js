import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import './index.css'

class TeamMatches extends Component {
  state = {
    teamBannerUrl: '',
    latestMatchDetails: [],
    recentMatches: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getMatchDetails()
  }

  getMatchDetails = async () => {
    const {match} = this.props

    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    this.setState({
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
      isLoading: false,
    })
  }

  render() {
    const {
      teamBannerUrl,
      latestMatchDetails,
      recentMatches,
      isLoading,
    } = this.state
    console.log(latestMatchDetails)
    const {match} = this.props

    const {params} = match
    const {id} = params

    return (
      <div className={`team-matches-container bg-color-${id.toLowerCase()}`}>
        {isLoading ? (
          <div>
            <Loader type="Oval" color="#ffffff" height={50} />
          </div>
        ) : (
          <div>
            <img
              src={teamBannerUrl}
              alt="teamBannerUrl"
              className="team-banner"
            />
            <div className="latest-match-container">
              <LatestMatch latestMatchDetails={latestMatchDetails} id={id} />
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
