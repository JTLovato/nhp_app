import PlayerInfoBasics from "./PlayerInfoBasics"
import {useParams} from 'react-router-dom'
import PlayerProfilePic from "./PlayerProfilePic";

function Player() {
    
    const { id } = useParams();

    // TEST API
    // console.log(id)
    
    return (
        <div className="player-page-container">
            <PlayerProfilePic id={id}/>
            <PlayerInfoBasics id={id}/>
        </div>
    )
    
}
export default Player
