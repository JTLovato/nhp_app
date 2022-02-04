import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function MetropolitanStandings() {
  const [records, setRecords] = useState(null);
    useEffect(() => {
        getData();

        async function getData() {
            const response = await fetch("https://statsapi.web.nhl.com/api/v1/standings");
            const data = await response.json();

            setRecords(data) ; 
        }
    }, []);

    // TEST API
    // console.log(records)


    return (
        <div className="container">
        {records && ( 
            <div>
                <table className="standings-table">
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th className="title">Atlantic Division</th>
                            <th>Pts</th>
                            <th>GP</th>
                            <th>W</th>
                            <th>L</th>
                            <th>OTL</th>
                            <th>ROW</th>
                        </tr>
                    </thead>
                    <tbody>
                    {records['records'][1]['teamRecords'].map((record, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td><img className="standings-logo" src={`./img/team_logos/${record.team.name}.png`} alt="" /></td>
                            <Link 
                                to={`/${record.team.id}`} 
                                key={index}
                                className="standings-link"
                            >
                                <td>{record.team.name}</td>
                            </Link>
                            <td>{record.points}</td>
                            <td>{record.gamesPlayed}</td>
                            <td>{record.leagueRecord.wins}</td>
                            <td>{record.leagueRecord.losses}</td>
                            <td>{record.leagueRecord.ot}</td>
                            <td>{record.row}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        )}
        </div>
    )
    
}
export default MetropolitanStandings