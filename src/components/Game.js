import React from 'react'
import { Link } from 'react-router-dom';

function Game(props) {

    function timeChange(date) {
        console.log(date) 
        let fixedTime = new Date(date).toLocaleString(); //From Universal time to local time
        fixedTime = String(fixedTime); //Stringifies it for easier charcater removal
        let gameStart = fixedTime.split(",") //Splits the time into section; Date and Time
        gameStart[1] = gameStart[1].split(" "); // Splits the time into two sections; the actual time and the AM/PM
        gameStart[1][1] = gameStart[1][1].slice(0, -3) // Removes the extraneous time, ex: 5:00:00 to 5:00
        let space = " " 
        gameStart[1][1] = gameStart[1][1].concat(space) //Re-adds the space that was taken out
        return gameStart;
    }

    function acronymMaker(name) {
        if (name === "Anaheim Ducks") {
            return "ANA"
        } else if (name === "Arizona Coyotes") {
            return "ARI"
        } else if (name === "Boston Bruins") {
            return "BOS"
        } else if (name === "Buffalo Sabres") {
            return "BUF"
        } else if (name === "Calgary Flames") {
            return "CGY"
        } else if (name === "Carolina Hurricanes") {
            return "CAR"
        } else if (name === "Chicago Blackhawks") {
            return "CHI"
        } else if (name === "Columbus Blue Jackets") {
            return "CBJ"
        } else if (name === "Colorado Avalanche") {
            return "COL"
        } else if (name === "Dallas Stars") {
            return "DAL"
        } else if (name === "Detroit Red Wings") {
            return "DET"
        } else if (name === "Edmonton Oilers") {
            return "EDM"
        } else if (name === "Florida Panthers") {
            return "FLA"
        } else if (name === "Los Angeles Kings") {
            return "LAK"
        } else if (name === "Minnesota Wild") {
            return "MIN"
        } else if (name === "Montréal Canadiens") {
            return "MTL"
        } else if (name === "New Jersey Devils") {
            return "NJD"
        } else if (name === "New York Islanders") {
            return "NYI"
        } else if (name === "New York Rangers") {
            return "NYR"
        } else if (name === "Ottawa Senators") {
            return "OTT"
        } else if (name === "Philadelphia Flyers") {
            return "PHI"
        } else if (name === "San Jose Sharks") {
            return "SJS"
        } else if (name === "Pittsburgh Penguins") {
            return "PIT"
        } else if (name === "Seattle Kraken") {
            return "SEA"
        } else if (name === "St Louis Blues") {
            return "STL"
        } else if (name === "Tampa Bay Lightning") {
            return "TBL"
        } else if (name === "Toronto Maple Leafs") {
            return "TOR"
        } else if (name === "Vancouver Canucks") {
            return "VAN"
        } else if (name === "Vegas Golden Knights") {
            return "VGK"
        } else if (name === "Washington Capitals") {
            return "WSH"
        } else if (name === "Nashville Predators") {
            return "NSH"
        } else if (name === "Winnipeg Jets") {
            return "WPG"
        } else 
            return "?"
    }

    // console.log(props.game.gamePk)

    return (
        <Link to={`/game/${props.game.gamePk}`} className="game-info">
            <div className="teams-info">
                <div className="team-seperator">
                    <img src={`./img/team_logos/${props.game.teams.away.team.name}.png`} alt="Team Logo" />
                    <h5>{acronymMaker(props.game.teams.away.team.name)}</h5>
                </div>
                <div className="team-seperator">
                    <h3>Vs</h3>
                </div>
                <div className="team-seperator">
                    <img src={`./img/team_logos/${props.game.teams.home.team.name}.png`} alt="Team Logo" />
                    <h5>{acronymMaker(props.game.teams.home.team.name)}</h5>
                </div>
            </div>
            <p>{timeChange(props.game.gameDate)[1]}</p>
        </Link>
    )
}

export default Game
