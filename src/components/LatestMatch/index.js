const LatestMatch = props => {
  const {latestMatchDetails} = props
  const formattedData = {
    umpires: latestMatchDetails.umpires,
    result: latestMatchDetails.result,
    manOfTheMatch: latestMatchDetails.man_of_the_match,
    id: latestMatchDetails.id,
    date: latestMatchDetails.date,
    venue: latestMatchDetails.venue,
    competingTeam: latestMatchDetails.competing_team,
    competing_team_logo: latestMatchDetails.competing_team_logo,
    // use value of the key 'competing_team' for alt as `competing team ${competing_team}`
    first_innings: latestMatchDetails.first_innings,
    second_innings: latestMatchDetails.second_innings,
    match_status: latestMatchDetails.match_status,
  }
  return console.log(formattedData)
}

export default LatestMatch
