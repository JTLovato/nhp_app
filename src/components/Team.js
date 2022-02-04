import React from 'react'
import { useState, useEffect } from 'react';


function Team(props) {

    const [team, setTeam] = useState(null);
    useEffect(() => {
        getTeamData();

        async function getTeamData() {
            const response = await fetch(`https://statsapi.web.nhl.com/api/v1/teams/${props.id}`);
            const data = await response.json();

            setTeam(data) ; 
        }
    }, [props.id]);

    // TEST API
    // console.log(team)

    return (
        <div className="team-info-holder">
            {team && (
                <div className="team-info-container">
                    <img src={`./img/team_logos/${team.teams[0].name}.png`} alt="team logo" className="back-image" />
                    <img src={`./img/team_logos/${team.teams[0].name}.png`} alt="team logo" className="front-image" />
                    <div className="team-info-small">
                        <div className="team-info-small-name">{team.teams[0].teamName}</div>
                        <h2>{team.teams[0].locationName}</h2>
                        <h1>{team.teams[0].teamName}</h1>
                        <div className="tiny-team-info">
                            <h4>{team.teams[0].venue.name}</h4>
                            <h4>{team.teams[0].venue.city}</h4>
                            <h4>Est. {team.teams[0].firstYearOfPlay}</h4>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Team
