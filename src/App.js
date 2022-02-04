import Teams from './screens/Teams';
import Homepage from './screens/Homepage';
import EachTeam from './components/EachTeam';
import NHLStandings from './screens/NHLStandings'
import PageNotFound from './screens/PageNotFound'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Player from './components/Player';
import GameDay from './components/GameDay';
import Signin from './screens/Signin';

function App() {

    const NoPageMatch = () => {
    return (
      <PageNotFound />
    );
  };




  return (
    <BrowserRouter>
      <div className="main" style={{ 
        backgroundImage: "url(../img/ice-bg.jpg)",
        backgroundColor: "#ffffff",
      }}>
        <nav>
          <Link to="/">
            <img src={"../img/bostons-team.png"} className="brand" alt=""/>
          </Link>
          <div className="colorHold">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
        <div className="">
          <Routes>

            <Route path="/" element={<Homepage />} exact></Route>
            <Route path="/signin" element={<Signin />} exact></Route>
            <Route path="/teams" element={<Teams />} exact></Route> 
            <Route path="/standings" element={<NHLStandings />} exact/>
            <Route exact path='/:id' element={<EachTeam/>} />
            <Route exact path="/player/:id" element={<Player />} />
            <Route exact path="/game/:id" element={<GameDay />} />

            <Route component={NoPageMatch} />
          </Routes>
        </div>
        <footer>
        <div className="colorHoldFooter">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <a href="https://www.johntlovato.com" target="_blank" rel="noopener noreferrer">A Project By John T Lovato</a>
          <div className="colorHoldFooter">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App  