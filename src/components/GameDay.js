import React, {useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import Live from './daily/Live';
import Preview from './daily/Preview';
import Recap from './daily/Recap';

function GameDay() {

    const { id } = useParams();

    const [game, setGame] = useState(null);
    useEffect(() => {
        getInfoData();

    async function getInfoData() {
        const infoData = await fetch(`http://statsapi.web.nhl.com/api/v1/game/${id}/content`)
        .then(response => response.json());
        setGame(infoData);
        }
    }, [id]);

    // console.log(game.editorial.articles.items)
    function gameType() {
        if (game.editorial.recap.items.length === 0 && game.editorial.articles.items.length === 0) {
            return <Preview game={game} id={id} />
        } else if (game.editorial.recap.items.length === 0 && game.editorial.articles.items.length > 0) {
            return <Live game={game} id={id}/>
        } else {
            return <Recap game={game} id={id}/>
        }
    }

    return (
        <div>
            {game && (
                <div>
                    {gameType()}
                </div>
            )}
        </div>
    )
}

export default GameDay
