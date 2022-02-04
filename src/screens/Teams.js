
import AtlanticDivision from "../components/divisions/AtlanticDivision"
import CentralDivision from "../components/divisions/CentralDivision"
import MetropolitanDivision from "../components/divisions/MetropolitanDivision"
import PacificDivision from "../components/divisions/PacificDivision"


function Teams() {


    return (
        <div className="teams-container">
            <AtlanticDivision />
            <MetropolitanDivision />
            <CentralDivision />
            <PacificDivision />
        </div>
    )
    
}
export default Teams
