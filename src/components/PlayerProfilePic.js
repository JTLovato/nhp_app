import player_not_found from '../components/player-not-found.jpg'

function PlayerProfilePic(props) {

    function getPics() {
        let pic = `
        https://tsnimages.tsn.ca/ImageProvider/PlayerHeadshot?seoId=${props.firstName}-${props.lastName}
        `;
        return pic
    }
    return (
        <img className="player-pic" src={getPics()} onError={(e)=>{e.target.src=`${player_not_found}`}} alt="Player Profile"/>
    )
    
}
export default PlayerProfilePic
