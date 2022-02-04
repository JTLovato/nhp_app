import React, { useState, useEffect } from 'react'

function Recap(props) {

    const [boxScore, setBoxScore] = useState(null);
    useEffect(() => {
        getInfoData();

    async function getInfoData() {
        const infoData = await fetch(`https://statsapi.web.nhl.com/api/v1/game/${props.id}/boxscore`)
        .then(response => response.json());
        setBoxScore(infoData);
        }
    }, [props.id]);

    return (
        <div>
            {boxScore && (
                <div className="scoreBox-container">
                    <div className="score-container">
                        <div className="team-score-container" >
                            <img src={`../img/team_logos/${boxScore.teams.away.team.name}.png`} alt={boxScore.teams.away.team.name}></img>
                            <h1>{boxScore.teams.away.teamStats.teamSkaterStats.goals}</h1>
                        </div>
                        <div className="team-score-container">
                        <h1>{boxScore.teams.home.teamStats.teamSkaterStats.goals}</h1>
                            <img src={`../img/team_logos/${boxScore.teams.home.team.name}.png`} alt={boxScore.teams.home.team.name}></img>
                        </div>
                    </div>
                </div>
            )}        
        </div>
    )
}

export default Recap