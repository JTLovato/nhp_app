import {Link} from 'react-router-dom'
import { useState, useEffect } from 'react';

function AtlanticDivision() {
    const [teams, setTeams] = useState(null);
    useEffect(() => {
        getData();

    async function getData() {
        const response = await fetch("https://statsapi.web.nhl.com/api/v1/teams");
        const data = await response.json();

        setTeams(data) ;
        }
    }, []);


    return (
        <div>
        {teams && (
            <div className="container">
                <h2>Atlantic Division</h2>
                {teams['teams'].map((team, index) => (
                    (team.division.name === "Atlantic" && (
                        <Link 
                            to={`/${team.id}`} 
                            key={index} 
                            className="team-container"
                            teamId={team.id}
                        >
                            <img className="team-logo" src={`./img/team_logos/${team.name}.png`} alt={`${team.name} Main Logo`} />
                            <h2>{team.name}</h2>
                        </Link>
                    ))
                ))}
            </div>
        )}
        </div>
    )
    
}
export default AtlanticDivision
