import {Link} from 'react-router-dom'
// import Schedule from '../components/Schedule'
import Test from '../components/Test'


function Homepage() {

    return (
        <div className="homepage">
            {/* <div className="schedule-container">
                <Schedule />
            </div> */}
            <div className="search-container">
                <Link to="teams" className="searchBy">
                    <div className="searchButton">
                        <img src={"../img/bruins-logo.png"} alt="" />
                        <h2>Search Teams</h2>
                    </div>
                </Link>
                <Test />
                {/* <Link to="teams" className="searchBy">
                    <div className="searchButton">
                        <img src={"../img/player_search.png"} alt="" />
                        <h2>Individual Player</h2>
                    </div>
                </Link>
                <Link to="teams" className="searchBy">
                    <div className="searchButton">
                        <img src={"../img/compare_players.png"} alt="" />
                        <h2>Compare Players</h2>
                    </div>
                </Link> */}
                <Link to="standings" className="searchBy">
                    <div className="searchButton">
                        <img src={"../img/shield.png"} alt="" />
                        <h2>Standings</h2>
                    </div>
                </Link>
            </div>
        </div>
    )
    
}
export default Homepage