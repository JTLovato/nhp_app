
import SkaterTableStats from "./SkaterTableStats";

function SkaterStats(props) {

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



// console.log(props.id)

    return (
        <div className="name-container">
                <div className="">
                    {/* COMING SOON */}
                    {/* <div className="stat-button-container">
                        <div className="button">
                            <svg>
                                <rect x="0" y="0" fill="none" width="100%" height="100%"/>
                            </svg>
                            Career
                        </div>
                        <div className="button">
                            <svg>
                                <rect x="0" y="0" fill="none" width="100%" height="100%"/>
                            </svg>
                            Graphs
                        </div>
                        <div className="button">
                            <svg>
                                <rect x="0" y="0" fill="none" width="100%" height="100%"/>
                            </svg>
                            Last Five
                        </div>
                        <div className="button">
                            <svg>
                                <rect x="0" y="0" fill="none" width="100%" height="100%"/>
                            </svg>
                            Maps
                        </div>
                    </div> */}
                    <table className="tables">
                        <thead className="tables-line" id="table-head">
                            <th>Season</th>
                            <th>GP</th>
                            <th>G</th>
                            <th>A</th>
                            <th>Pts</th>
                            <th>+/-</th>
                            <th>PIM</th>
                            <th>PPG</th>
                            <th>PPP</th>
                            <th>SHG</th>
                            <th>SHP</th>
                            <th>GWG</th>
                            <th>OTG</th>
                            <th>S</th>
                            <th>S%</th>
                        </thead>
                        <tbody>
                            <SkaterTableStats season={currentSeason} id={props.id} />
                            <SkaterTableStats season={prevSeason} id={props.id} />
                            <SkaterTableStats season={twoSeasonsAgo} id={props.id} />
                            <SkaterTableStats season={threeSeasonsAgo} id={props.id} />
                            <SkaterTableStats season={fourSeasonsAgo} id={props.id} />
                            <SkaterTableStats season={fiveSeasonsAgo} id={props.id} />
                            <SkaterTableStats season={sixSeasonsAgo} id={props.id} />
                            <SkaterTableStats season={sevenSeasonsAgo} id={props.id} />
                            <SkaterTableStats season={eightSeasonsAgo} id={props.id} />
                            <SkaterTableStats season={nineSeasonsAgo} id={props.id} />
                            <SkaterTableStats season={tenSeasonsAgo} id={props.id} />
                            <SkaterTableStats season={elevenSeasonsAgo} id={props.id} />
                            <SkaterTableStats season={twelveSeasonsAgo} id={props.id} />
                            <SkaterTableStats season={thirteenSeasonsAgo} id={props.id} />
                            <SkaterTableStats season={fourteenSeasonsAgo} id={props.id} />
                            <SkaterTableStats season={fifteenSeasonsAgo} id={props.id} />
                            <SkaterTableStats season={sixteenSeasonsAgo} id={props.id} />
                            <SkaterTableStats season={seventeenSeasonsAgo} id={props.id} />
                            <SkaterTableStats season={eighteenSeasonsAgo} id={props.id} />
                            <SkaterTableStats season={nineteenSeasonsAgo} id={props.id} />
                            <SkaterTableStats season={twentySeasonsAgo} id={props.id} />
                        </tbody>
                    </table>
                </div>
        </div>
    )
    
}
export default SkaterStats
