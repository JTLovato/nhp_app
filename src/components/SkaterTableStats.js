import React, {useState, useEffect} from 'react'

function SkaterTableStats(props) {

    const [playerStat, setPlayerStat] = useState(null);
    useEffect(() => {
        getInfoData();

        async function getInfoData() {
            const statx = await fetch(`https://statsapi.web.nhl.com/api/v1/people/${props.id}/stats?stats=statsSingleSeason&season=${props.season}`)
            .then(response => response.json());
            setPlayerStat(statx);
        }
    }, [props.id, props.season]);


    // console.log(props.id)
    // console.log(props.season)
    // console.log(playerStat)
    
    // BLOCK BELOW PUTS CURRENT SEASON INTO DASH FORM
    const string_chop = function(str, size){
        if (str == null) return [];
        str = String(str);
        size = ~~size;
    return size > 0 ? str.match(new RegExp('.{1,' + size + '}', 'g')) : [str];
    }

    try {
        return (
            <tr className="tables-line">
                {playerStat && (
                    <div className="tables-line">
                    <td>{string_chop(playerStat.stats[0].splits[0].season, 4).join('-')}</td>
                    <td>{playerStat.stats[0].splits[0].stat.games}</td> 
                    <td>{playerStat.stats[0].splits[0].stat.goals}</td>
                    <td>{playerStat.stats[0].splits[0].stat.assists}</td>
                    <td>{playerStat.stats[0].splits[0].stat.points}</td>
                    <td>{playerStat.stats[0].splits[0].stat.plusMinus}</td>
                    <td>{playerStat.stats[0].splits[0].stat.penaltyMinutes}</td>
                    <td>{playerStat.stats[0].splits[0].stat.powerPlayGoals}</td>
                    <td>{playerStat.stats[0].splits[0].stat.powerPlayPoints}</td>
                    <td>{playerStat.stats[0].splits[0].stat.shortHandedGoals}</td>
                    <td>{playerStat.stats[0].splits[0].stat.shortHandedPoints}</td>
                    <td>{playerStat.stats[0].splits[0].stat.gameWinningGoals}</td>
                    <td>{playerStat.stats[0].splits[0].stat.overTimeGoals}</td>
                    <td>{playerStat.stats[0].splits[0].stat.shots}</td>
                    <td>{playerStat.stats[0].splits[0].stat.shotPct}</td>
                </div>
            )}
        </tr>
    )

    } catch(e) {
        console.log(e)
        return (
            null
        )
    }

}

export default SkaterTableStats
