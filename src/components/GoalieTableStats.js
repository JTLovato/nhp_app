import React, {useState, useEffect} from 'react'

function GoalieTableStats(props) {

    const [goalieStat, setGoalieStat] = useState(null);
    useEffect(() => {
        getInfoData();

        async function getInfoData() {
            const statx = await fetch(`https://statsapi.web.nhl.com/api/v1/people/${props.id}/stats?stats=statsSingleSeason&season=${props.season}`)
            .then(response => response.json());
            setGoalieStat(statx);
        }
    }, [props.id, props.season]);


    // console.log(props.id)
    // console.log(props.season)
    // console.log(goalieStat)
    
    // BLOCK BELOW PUTS CURRENT SEASON INTO DASH FORM
    const string_chop = function(str, size){
        if (str == null) return [];
        str = String(str);
        size = ~~size;
    return size > 0 ? str.match(new RegExp('.{1,' + size + '}', 'g')) : [str];
    }


    function percentFix(num) {
        if (num) {
            return (Math.round(num * 100) / 100).toFixed(2)
        } else {
            return ("0.00")
        }
    }

    try {
        return (
            <tr className="tables-line">
                {goalieStat && (
                    <div className="tables-line">
                        <td>{string_chop(goalieStat.stats[0].splits[0].season, 4).join('-')}</td>
                        <td>{goalieStat.stats[0].splits[0].stat.games}</td> 
                        <td>{goalieStat.stats[0].splits[0].stat.gamesStarted}</td>
                        <td>{goalieStat.stats[0].splits[0].stat.wins}</td>
                        <td>{goalieStat.stats[0].splits[0].stat.losses}</td>
                        <td>{goalieStat.stats[0].splits[0].stat.ties}</td>
                        <td>{goalieStat.stats[0].splits[0].stat.ot}</td>
                        <td>{goalieStat.stats[0].splits[0].stat.saves}</td>
                        <td>{goalieStat.stats[0].splits[0].stat.goalsAgainst}</td>
                        <td>{percentFix(goalieStat.stats[0].splits[0].stat.goalAgainstAverage)}</td>
                        <td>{percentFix(goalieStat.stats[0].splits[0].stat.savePercentage)}%</td>
                        <td>{percentFix(goalieStat.stats[0].splits[0].stat.shortHandedSavePercentage)}%</td>
                        <td>{goalieStat.stats[0].splits[0].stat.shutouts}</td>
                        <td>{goalieStat.stats[0].splits[0].stat.timeOnIce}</td>
                        <td>{goalieStat.stats[0].splits[0].stat.timeOnIce}</td>
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


export default GoalieTableStats
