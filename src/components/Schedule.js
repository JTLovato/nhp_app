import React, {useState, useEffect} from 'react'
import Game from './Game';

function Schedule() {

    const [schedule, setSchedule] = useState(null);
    useEffect(() => {
        getInfoData();

    async function getInfoData() {
        const infoData = await fetch(`https://statsapi.web.nhl.com/api/v1/schedule`)
        .then(response => response.json());
        setSchedule(infoData);
        }
    }, []);

    // console.log(schedule['dates'][0].games[0].gamePk)



    return (
        <div className="schedule-container-games">
            {schedule && schedule['dates'][0].games.map((game, index) => (
                <div key={index} className="each-game" >
                    <Game
                        game={game}
                    />
                </div>
            ))}
        </div>
    )
}

export default Schedule
