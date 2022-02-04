
import React from 'react'


// const [teamStats, setTeamStats] = useState(null);
// useEffect(() => {
//     getData();

// async function getData() {
//     const data = await fetch(`https://statsapi.web.nhl.com/api/v1/teams/${props.id}/stats`).then(response => response.json());
//     setTeamStats(data);
//     }
// }, [props.id]);


function Test() {

    
let game_data = []
let year = '2018'
let season_type = '02' 
let max_game_ID = 1110

let game_datax=[]

async function getDatax() {
    let i=1100;
    for(i; i< max_game_ID; i++){
        const response = await fetch(`http://statsapi.web.nhl.com/api/v1/game/${year}${season_type}${i}/feed/live`)
        const json = await response.json()
        game_datax.push(json)
        
    }
}
    getDatax(); 
console.log(game_datax)



    return (
        <div>
            {game_data && (
                <div>
               
                </div>
            )}
        </div>
    )
}

export default Test
