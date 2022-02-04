import React, {useEffect, useState } from 'react'
import SkaterStats from './SkaterStats';
import GoalieStats from './GoalieStats';

function PlayerInfoBasics(props) {

    const [info, setInfo] = useState(null);
    useEffect(() => {
        getInfoData();

    async function getInfoData() {
        const infoData = await fetch(`https://statsapi.web.nhl.com/api/v1/people/${props.id}`)
        .then(response => response.json());
        setInfo(infoData);
        }
    }, [props.id]);

    // TEST API
    // console.log(info.people[0].primaryPosition.type)

    return (
        <div className="name-container">
            {info && (
                <div className="name-info-container">
                    <h1 className="back-name">{info.people[0].currentTeam.name}</h1>
                    {info.people[0].captain && (
                        <div className="captain-status">
                            <h1>Team Captain</h1>
                        </div>
                    )}
                    <div className="name-information">
                        <h1>{info.people[0].fullName}</h1>
                        <h1>||</h1>
                        <h1>#{info.people[0].primaryNumber}</h1>
                        <h1>||</h1>
                        <h1>{info.people[0].currentTeam.name}</h1>
                    </div>
                    <span></span>
                    <div className="name-information-lower">
                        <h4>Birthplace: {info.people[0].birthCity}, {info.people[0].birthCountry}</h4>
                        <h4>Height: {info.people[0].height}</h4>
                        <h4>Weight: {info.people[0].weight}</h4>
                        <h4>Pos: {info.people[0].primaryPosition.name}</h4>
                        <h4>Shoots: {info.people[0].shootsCatches}</h4>
                        <h4>Player ID: {info.people[0].id}</h4>
                    </div>
                    {info.people[0].primaryPosition.type === "Forward" && (
                        <div>
                            <SkaterStats id={info.people[0].id} />
                        </div>
                    )}
                    {info.people[0].primaryPosition.type === "Defenseman" && (
                        <div>
                            <SkaterStats id={info.people[0].id} />
                        </div>
                    )}
                    {info.people[0].primaryPosition.type === "Goalie" && (
                        <div>
                            <GoalieStats id={info.people[0].id} />
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}
export default PlayerInfoBasics
