
import PlayerProfilePic from "./PlayerProfilePic"
import {Link } from 'react-router-dom'

function PlayerCard(props) {

    let firstName = props.name.split(' ').slice(0, -1).join(' ');
    let lastName = props.name.split(' ').slice(-1).join(' ');

    return (
        <Link 
            to={`/player/${props.id}`} 
            className="player-container"
        >
            <div className="player-border">
                <div className="player-border-end">
            <div className="player-image">
                <PlayerProfilePic teamId={props.teamId} id={props.id}/>
            </div>
            <div className="player-info">
                <h4>{firstName}</h4>
                <h1>{lastName}</h1>
                <div className="player-info-under">
                    {props.jerseyNumber && (
                        <h5>#{props.jerseyNumber}</h5>
                    )}
                    <h5>{props.position}</h5>
                </div>
            </div>
            </div>
            </div>
        </Link>
    )
                }
export default PlayerCard
