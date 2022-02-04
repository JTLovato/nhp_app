
import { useState, useEffect } from 'react';
import {Link, useParams } from 'react-router-dom'

import PlayerCard from './PlayerCard'
import Team from './Team';
import TeamStats from './TeamStats';

function EachTeam() {

    const { id } = useParams();

    const [rosters, setRosters] = useState(null);
    useEffect(() => {
        getData();

    async function getData() {
        const data = await fetch(`https://statsapi.web.nhl.com/api/v1/teams/${id}/roster`).then(response => response.json());
        setRosters(data);
        }
    }, [id]);

    // TEST API 
    // console.log(rosters)

    const [hideRoster, setHideRoster] = useState();
    const [hideStats, setHideStats] = useState("false");

    const showRoster = () => {
        if (hideRoster) {
            setHideRoster(!hideRoster);
            setHideStats("false");
        }
    }
    const showStats = () => {
        if (hideStats) {
            setHideRoster("false");
            setHideStats(!hideStats);
        }
    }

return (
    <div className="">
            {rosters && (
                <div className="players-container">
                    <Team id={id} />
                    <div className="button-hold">
                        <div className="button" onClick={showRoster}>
                            <svg>
                                <rect x="0" y="0" fill="none" width="100%" height="100%"/>
                            </svg>
                            Roster
                        </div>
                        <div className="button" onClick={showStats}>
                            <svg>
                                <rect x="0" y="0" fill="none" width="100%" height="100%"/>
                            </svg>
                            Team Stats
                        </div>
                    </div>
                    <div id="roster-list"className={hideRoster ? "hide" : "roster-list"}>
                        <h1>Team Roster</h1>
                        {rosters['roster'].map((roster, index) => (
                            <div key={index}>
                                <PlayerCard
                                    id={roster.person.id}
                                    position={roster.position.name}
                                    jerseyNumber={roster.jerseyNumber}
                                    name={roster.person.fullName}
                                />
                            </div>
                        ))}
                    </div>
                    <div id="team-stats" className={hideStats ? "hide" : "team-stats"} >
                        <TeamStats id={id} />
                    </div>
                </div>
            )}
        </div>
    )}

export default EachTeam