
import {useState} from 'react'

import CentralStandings from "../components/divisions/CentralStandings"
import AtlanticStandings from "../components/divisions/AtlanticStandings"
import PacificStandings from "../components/divisions/PacificStandings"
import MetropolitanStandings from "../components/divisions/MetropolitanStandings"
import WesternConf from "../components/divisions/WesternConf"
import EasternConf from "../components/divisions/EasternConf"
import LeagueStandings from "../components/divisions/LeagueStandings"

function NHLStandings() {

    const [hideDiv, setHideDiv] = useState();
    const [hideConf, setHideConf] = useState("false");
    const [hideLeag, setHideLeag] = useState("false");

    const showDiv = () => {
        if (hideDiv) {
            setHideDiv(!hideDiv);
            setHideConf("false");
            setHideLeag("false");
        }
    }
    const showConf = () => {
        if (hideConf) {
            setHideDiv("false");
            setHideConf(!hideConf);
            setHideLeag("false");
        }
    }
    const showLeag = () => {
        if (hideLeag) {
            setHideDiv("false");
            setHideConf("false");
            setHideLeag(!hideLeag);
        }
    }




    return (
        <div className="teams-container">
            <div className="standings-button-container">
                <div className="button" onClick={showDiv}>
                    <svg>
                        <rect x="0" y="0" fill="none" width="100%" height="100%"/>
                    </svg>
                    Division
                </div> 
                <div className="button" onClick={showConf}>
                    <svg>
                        <rect x="0" y="0" fill="none" width="100%" height="100%"/>
                    </svg>
                    Conference
                </div>
                <div className="button" onClick={showLeag} >
                    <svg>
                        <rect x="0" y="0" fill="none" width="100%" height="100%"/>
                    </svg>
                    League
                </div>
            </div>
            <div id="divisions"  className={hideDiv ? "hide" : "standings-container"}>
                <AtlanticStandings />
                <MetropolitanStandings />
                <PacificStandings />
                <CentralStandings />
            </div>
            <div id="conferences" className={hideConf ? "hide" : "standings-container"}>
                <WesternConf />
                <EasternConf />
            </div>
            <div id="league" className={hideLeag ? "hide" : "standings-container"}>
                <LeagueStandings />
            </div>
        </div>
    )
    
}
export default NHLStandings
