import logo from './logo.svg';
import './App.css';
import Statistics from './Pages/Statistics';
import Sidebar from './Components/Sidebar';
import Profile from './Pages/Profile';
import ProfileEmploye from './Pages/ProfileEmploye';
import GestionPoints from './Pages/GestionPoints';
import GestionClients from './Pages/GestionClients';
import GestionAvis from './Pages/GestionAvis';
import GestionEmploye from './Pages/GestionEmploye';
import History from './Pages/History';
import AjouterCarte from './Pages/AjouterCarte'
import Notification from './Pages/Notification';
import Login from './Pages/Login';
import ListesCartes from './Pages/ListesCartes'
import {BrowserRouter as Router , Route, Routes} from "react-router-dom"; 
import DetailPoint1 from './Pages/DetailPoint1';
import DetailPoint2 from './Pages/DetailPoint2';
import DetailPoint3 from './Pages/DetailPoint3' ;

function App() {
  return (
    <div className="App flex flex-row ">  
 
    <Router>
    
           <Routes>
            
            <Route path="/Login"  element={<Login/>}/>
           <Route index path="/" element={<Statistics/>}/>
           <Route path="/Profile"  element={<Profile/>}/>
           <Route path="/ProfileEmploye/:employe"  element={<ProfileEmploye/>}/>
           <Route path="/GestionPoints"  element={<GestionPoints/>}/>
           <Route path="/GestionClients" element={<GestionClients/>}/>
           <Route path="/GestionAvis"  element={<GestionAvis/>}/>
           <Route path="/AjouterCarte"  element={<AjouterCarte/>}/>
           <Route path="/GestionEmploye" element={<GestionEmploye/>}/>
           <Route path="/History"  element={<History/>}/>
           <Route path="/ListesCartes"  element={<ListesCartes/>}/>
           <Route path='/DetailPoint1/:point'  element={<DetailPoint1/>}/>
           <Route path='/DetailPoint2/:point'  element={<DetailPoint2/>}/>
           <Route path="/DetailPoint3"  element={<DetailPoint3/>}/>
           <Route path="/Notification"  element={<Notification/>}/>
           </Routes>  
     </Router>
    
   </div>
  );
}

export default App;
