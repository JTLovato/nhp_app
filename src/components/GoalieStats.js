
import GoalieTableStats from "./GoalieTableStats";

function GoalieStats(props) {

    let currentYear = new Date().getFullYear();
    let prevYear = new Date().getFullYear() - 1;
    let currentSeason = String(prevYear) + String(currentYear)
    let prevSeason = String(prevYear - 1) + String(prevYear)
    let twoSeasonsAgo = String(prevYear - 2) + String(prevYear - 1)
    let threeSeasonsAgo = String(prevYear - 3) + String(prevYear - 2)
    let fourSeasonsAgo = String(prevYear - 4) + String(prevYear - 3)
    let fiveSeasonsAgo = String(prevYear - 5) + String(prevYear - 4)
    let sixSeasonsAgo = String(prevYear - 6) + String(prevYear - 5)
    let sevenSeasonsAgo = String(prevYear - 7) + String(prevYear - 6)
    let eightSeasonsAgo = String(prevYear - 8) + String(prevYear - 7)
    let nineSeasonsAgo = String(prevYear - 9) + String(prevYear - 8)
    let tenSeasonsAgo = String(prevYear - 10) + String(prevYear - 9)
    let elevenSeasonsAgo = String(prevYear -11) + String(prevYear - 10)
    let twelveSeasonsAgo = String(prevYear - 12) + String(prevYear - 11)
    let thirteenSeasonsAgo = String(prevYear - 13) + String(prevYear - 12)
    let fourteenSeasonsAgo = String(prevYear - 14) + String(prevYear - 13)
    let fifteenSeasonsAgo = String(prevYear - 15) + String(prevYear - 14)
    let sixteenSeasonsAgo = String(prevYear - 16) + String(prevYear - 15)
    let seventeenSeasonsAgo = String(prevYear - 17) + String(prevYear - 16)
    let eighteenSeasonsAgo = String(prevYear - 18) + String(prevYear - 17)
    let nineteenSeasonsAgo = String(prevYear - 19) + String(prevYear - 18)
    let twentySeasonsAgo = String(prevYear - 20) + String(prevYear - 19)



    return (
        <div className="name-container">
            <div className="">
                {/* COMING SOON */}
                {/* <div className="stat-button-container">
                    <button className="">Table</button>
                    <button className="">Graphs</button>
                    <button className="">Last Five</button>
                    <button className="">Maps</button>
                </div> */}
                <table className="tables">
                    <thead className="tables-line">
                        <th>Season</th>
                        <th>G</th>
                        <th>GS</th>
                        <th>W</th>
                        <th>L</th>
                        <th>T</th>
                        <th>OT</th>
                        <th>SA</th>
                        <th>GA</th>
                        <th>GAA</th>
                        <th>SV%</th>
                        <th>SH SV%</th>
                        <th>SO</th>
                        <th>MIN</th>
                        <th>TOI</th>
                    </thead>
                    <tbody>
                        <GoalieTableStats season={currentSeason} id={props.id} />
                        <GoalieTableStats season={prevSeason} id={props.id} />
                        <GoalieTableStats season={twoSeasonsAgo} id={props.id} />
                        <GoalieTableStats season={threeSeasonsAgo} id={props.id} />
                        <GoalieTableStats season={fourSeasonsAgo} id={props.id} />
                        <GoalieTableStats season={fiveSeasonsAgo} id={props.id} />
                        <GoalieTableStats season={sixSeasonsAgo} id={props.id} />
                        <GoalieTableStats season={sevenSeasonsAgo} id={props.id} />
                        <GoalieTableStats season={eightSeasonsAgo} id={props.id} />
                        <GoalieTableStats season={nineSeasonsAgo} id={props.id} />
                        <GoalieTableStats season={tenSeasonsAgo} id={props.id} />
                        <GoalieTableStats season={elevenSeasonsAgo} id={props.id} />
                        <GoalieTableStats season={twelveSeasonsAgo} id={props.id} />
                        <GoalieTableStats season={thirteenSeasonsAgo} id={props.id} />
                        <GoalieTableStats season={fourteenSeasonsAgo} id={props.id} />
                        <GoalieTableStats season={fifteenSeasonsAgo} id={props.id} />
                        <GoalieTableStats season={sixteenSeasonsAgo} id={props.id} />
                        <GoalieTableStats season={seventeenSeasonsAgo} id={props.id} />
                        <GoalieTableStats season={eighteenSeasonsAgo} id={props.id} />
                        <GoalieTableStats season={nineteenSeasonsAgo} id={props.id} />
                        <GoalieTableStats season={twentySeasonsAgo} id={props.id} />
                    </tbody>
                </table>
            </div>
        </div>
    )
    
}
export default GoalieStats
