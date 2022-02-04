
import PlayerInfoBasics from "./PlayerInfoBasics"
import {useParams} from 'react-router-dom'
import player_not_found from '../components/player-not-found.jpg'

function Player() {

    const {name, id } = useParams();
    console.log(name)

    let firstName = name.split(' ').slice(0, -1).join(' ');
    let lastName = name.split(' ').slice(-1).join(' ');

    function getPics() {
        let pic = `
        https://tsnimages.tsn.ca/ImageProvider/PlayerHeadshot?seoId=${firstName}-${lastName}
        `;
        return pic
    }
    // TEST API

    return (
        <div className="player-page-container">
            <img 
                className="player-pic" 
                src={getPics()} 
                onError={(e)=>{e.target.src=`${player_not_found}`}} 
                alt="Player Profile"
            />
            <PlayerInfoBasics id={id}/>
        </div>
    )
    
}
export default Player
