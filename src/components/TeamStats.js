import React from 'react'
import {useState, useEffect} from 'react'

function TeamStats(props) {

    const [teamStats, setTeamStats] = useState(null);
    useEffect(() => {
        getData();

    async function getData() {
        const data = await fetch(`https://statsapi.web.nhl.com/api/v1/teams/${props.id}/stats`)
        .then(response => response.json());
        setTeamStats(data);
        }
    }, [props.id]);

    function colorChange(num) {
        let onlyNum = num.substring(0, num.length - 2); //Removes the "nd" or "th" from number, i.e. "32nd" "4th"
        let numReversed = (32 - onlyNum) * 3.75; //Reverses the number, so green means good and red means bad.
        let style = "hsla(" + numReversed + ", 100%, 50%, 1)"; //turning the number into the color.
        return style
    }



    return (
        <div>  
            {teamStats && (
                <div className="team-stats-holder">
                    <h1>Team Stats</h1>
                    <div className="team-stat">
                        <h4>Games Played:</h4>
                        <h1>{teamStats.stats[0].splits[0].stat.gamesPlayed}</h1>
                        <h3>Rank: N/A</h3>
                    </div>
                    <div 
                        style={{backgroundColor: colorChange(teamStats.stats[1].splits[0].stat.wins), 
                        width: "150px",
                        height: "150px",
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center",
                        margin: "5px",
                        borderRadius: "5px",
                        border: "solid 3px #bebebe",
                        padding: "10px",
                        }}>
                        <h4>Games Won:</h4>
                        <h1>{teamStats.stats[0].splits[0].stat.wins}</h1>
                        <h3>Rank: {teamStats.stats[1].splits[0].stat.wins}</h3>
                    </div>
                    <div 
                        style={{backgroundColor: colorChange(teamStats.stats[1].splits[0].stat.losses),
                        width: "150px",
                        height: "150px",
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center",
                        margin: "5px",
                        borderRadius: "5px",
                        border: "solid 3px #bebebe",
                        padding: "10px",
                    }}>
                        <h4>Games Lost:</h4>
                        <h1>{teamStats.stats[0].splits[0].stat.losses}</h1>
                        <h3>Rank: {teamStats.stats[1].splits[0].stat.losses}</h3>
                    </div>
                    <div 
                        style={{backgroundColor: colorChange(teamStats.stats[1].splits[0].stat.ot),
                        width: "150px",
                        height: "150px",
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center",
                        margin: "5px",
                        borderRadius: "5px",
                        border: "solid 3px #bebebe",
                        padding: "10px",
                    }}>
                        <h4>Games Lost In OT:</h4>
                        <h1>{teamStats.stats[0].splits[0].stat.ot}</h1>
                        <h3>Rank: {teamStats.stats[1].splits[0].stat.ot}</h3>
                    </div>
                    <div 
                        style={{backgroundColor: colorChange(teamStats.stats[1].splits[0].stat.pts),
                        width: "150px",
                        height: "150px",
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center",
                        margin: "5px",
                        borderRadius: "5px",
                        border: "solid 3px #bebebe",
                        padding: "10px",
                    }}>
                        <h4>Points:</h4>
                        <h1>{teamStats.stats[0].splits[0].stat.pts}</h1>
                        <h3>Rank: {teamStats.stats[1].splits[0].stat.pts}</h3>
                    </div>
                    <div 
                        style={{backgroundColor: colorChange(teamStats.stats[1].splits[0].stat.ptPctg),
                        width: "150px",
                        height: "150px",
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center",
                        margin: "5px",
                        borderRadius: "5px",
                        border: "solid 3px #bebebe",
                        padding: "10px",
                    }}>
                        <h4>Point %</h4>
                        <h1>{teamStats.stats[0].splits[0].stat.ptPctg}%</h1>
                        <h3>Rank: {teamStats.stats[1].splits[0].stat.ptPctg}</h3>
                    </div>
                    <div 
                        style={{backgroundColor: colorChange(teamStats.stats[1].splits[0].stat.goalsPerGame),
                            width: "150px",
                            height: "150px",
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                            margin: "5px",
                            borderRadius: "5px",
                            border: "solid 3px #bebebe",
                            padding: "10px",
                        }}>
                        <h4>Goals For Per Game:</h4>
                        <h1>{teamStats.stats[0].splits[0].stat.goalsPerGame}</h1>
                        <h3>Rank: {teamStats.stats[1].splits[0].stat.goalsPerGame}</h3>
                    </div>
                    <div 
                        style={{backgroundColor: colorChange(teamStats.stats[1].splits[0].stat.goalsAgainstPerGame),
                            width: "150px",
                            height: "150px",
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                            margin: "5px",
                            borderRadius: "5px",
                            border: "solid 3px #bebebe",
                            padding: "10px",
                        }}>
                        <h4>Goals Against Per Game:</h4>
                        <h1>{teamStats.stats[0].splits[0].stat.goalsAgainstPerGame}</h1>
                        <h3>Rank: {teamStats.stats[1].splits[0].stat.goalsAgainstPerGame}</h3>
                    </div>
                    <div 
                        style={{backgroundColor: colorChange(teamStats.stats[1].splits[0].stat.powerPlayOpportunities),
                            width: "150px",
                            height: "150px",
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                            margin: "5px",
                            borderRadius: "5px",
                            border: "solid 3px #bebebe",
                            padding: "10px",
                        }}>
                        <h4>Powerplay Chances:</h4>
                        <h1>{teamStats.stats[0].splits[0].stat.powerPlayOpportunities}</h1>
                        <h3>Rank: {teamStats.stats[1].splits[0].stat.powerPlayOpportunities}</h3>
                    </div>
                    <div 
                        style={{backgroundColor: colorChange(teamStats.stats[1].splits[0].stat.powerPlayGoals),
                            width: "150px",
                            height: "150px",
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                            margin: "5px",
                            borderRadius: "5px",
                            border: "solid 3px #bebebe",
                            padding: "10px",
                        }}>
                        <h4>Powerplay Goals:</h4>
                        <h1>{teamStats.stats[0].splits[0].stat.powerPlayGoals}</h1>
                        <h3>Rank: {teamStats.stats[1].splits[0].stat.powerPlayGoals}</h3>
                    </div>
                    <div 
                        style={{backgroundColor: colorChange(teamStats.stats[1].splits[0].stat.powerPlayPercentage),
                            width: "150px",
                            height: "150px",
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                            margin: "5px",
                            borderRadius: "5px",
                            border: "solid 3px #bebebe",
                            padding: "10px",
                        }}>
                        <h4>Powerplay %:</h4>
                        <h1>{teamStats.stats[0].splits[0].stat.powerPlayPercentage}%</h1>
                        <h3>Rank: {teamStats.stats[1].splits[0].stat.powerPlayPercentage}</h3>
                    </div>
                    <div
                        style={{backgroundColor: colorChange(teamStats.stats[1].splits[0].stat.powerPlayGoalsAgainst),
                            width: "150px",
                            height: "150px",
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                            margin: "5px",
                            borderRadius: "5px",
                            border: "solid 3px #bebebe",
                            padding: "10px",
                        }}>
                        <h4>Powerplay Goals Against:</h4>
                        <h1>{teamStats.stats[0].splits[0].stat.powerPlayGoalsAgainst}</h1>
                        <h3>Rank: {teamStats.stats[1].splits[0].stat.powerPlayGoalsAgainst}</h3>
                    </div>
                    <div 
                        style={{backgroundColor: colorChange(teamStats.stats[1].splits[0].stat.penaltyKillPercentage),
                            width: "150px",
                            height: "150px",
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                            margin: "5px",
                            borderRadius: "5px",
                            border: "solid 3px #bebebe",
                            padding: "10px",
                        }}>
                        <h4>Penalty Kill %:</h4>
                        <h1>{teamStats.stats[0].splits[0].stat.penaltyKillPercentage}</h1>
                        <h3>Rank: {teamStats.stats[1].splits[0].stat.penaltyKillPercentage}%</h3>
                    </div>
                    <div 
                        style={{backgroundColor: colorChange(teamStats.stats[1].splits[0].stat.faceOffWinPercentage),
                            width: "150px",
                            height: "150px",
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                            margin: "5px",
                            borderRadius: "5px",
                            border: "solid 3px #bebebe",
                            padding: "10px",
                        }}>
                        <h4>Faceoff Win %:</h4>
                        <h1>{teamStats.stats[0].splits[0].stat.faceOffWinPercentage}</h1>
                        <h3>Rank: {teamStats.stats[1].splits[0].stat.faceOffWinPercentage}%</h3>
                    </div>
                </div>
            )}
        </div>
    )
}

export default TeamStats
