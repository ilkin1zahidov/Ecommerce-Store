import "./assets/css/main.css";
import Navbar from "./components/navbar/navbar";
import {BrowserRouter,Route,Routes} from "react-router-dom";
//TODO: Icons
import Logo from './assets/img/logo.svg';
import SideBar from './assets/img/sideBar.svg';
import HomePage from './assets/img/HomePage.svg'
import CheckBag from './assets/img/checkBag.svg';
import Exit from './assets/img/exit.svg'
//---------------------------------------------------

//TODO:Pages
import Index from './pages/Index'
import CartDetails from "./components/card/CartDetails";
function App() {
  const navbarIcons = {
    HomePage,
    Logo,
    SideBar,
    CheckBag,
    Exit
  }
  return (
    <div className="App">
      <>
        <BrowserRouter>
          <Navbar
            image = {navbarIcons}
          />
            <Routes>
              <Route path='/' element={<Index/>} />
              <Route path='/card-details' element={<CartDetails/>} />
            </Routes>

        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
