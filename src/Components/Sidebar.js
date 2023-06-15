import React  from 'react';

import Logo from "../Images/Icons/logo_long.png"
import stats_icon from "../Images/Icons/stats_icon.png" 
import profile from "../Images/Icons/profile_icon.png"
import PointInteret from "../Images/Icons/points_interets_icon.png"
import clients from "../Images/Icons/clients_icon.png"
import avis from "../Images/Icons/avis_icon.png"
import ajouter from "../Images/Icons/ajoutercarte_icon.png"
import employee from "../Images/Icons/employe_icon.png"
import history from "../Images/Icons/history_icon.png"
import Logout from "../Images/Icons/logout_icon.png"

import { Link } from 'react-router-dom';

const Sidebar = () => {
    return ( 
    <div className="h-screen w-[22%] flex flex-col fixed bg-violet rounded-tr-2xl rounded-br-2xl">
        <div className="p-8 flex items-center justify-center">
                <img src={Logo} alt="dzayer go" className=" w-36 " />
          </div>
    
        <div className="text-white text-xs ">

            
        <div className="flex flex-row items-end space-x-10 pl-8 py-3 hover:bg-white hover:bg-opacity-25 hover:border-l-4 hover:border-l-white  transition duration-500 ease-in-out   "> 
                <img src={stats_icon} className="w-7" alt="stats" />
           <Link to="/">  <p> Statistiques </p>  </Link>  
        </div>
    
          

       <div className="flex flex-row items-end space-x-10 pl-8 py-3 hover:bg-white hover:bg-opacity-25 hover:border-l-4 hover:border-l-white  transition duration-500 ease-in-out   "> 
                    <img src={profile} className="w-6" alt="stats" />
                    <Link to="/Profile">  <p> Profile </p>  </Link>  
                   
                </div>
      
            
           
             <div className="flex flex-row items-end space-x-10 pl-8 py-3 hover:bg-white hover:bg-opacity-25 hover:border-l-4 hover:border-l-white  transition duration-500 ease-in-out   "> 
                    <img src={PointInteret} className="w-6" alt="point d'interet" />
                    <Link to="/GestionPoints">  <p>  Gestion points d’interets </p>  </Link>  
                    
             </div>
        

            <div className="flex flex-row items-end space-x-10 pl-8 py-3 hover:bg-white hover:bg-opacity-25 hover:border-l-4 hover:border-l-white  transition duration-500 ease-in-out   "> 
                <img src={clients} className="w-6" alt="stats" />
                <Link to="/GestionClients">  <p>  Gestion des clients  </p>  </Link> 
              
            </div>

         
            <div className="flex flex-row items-end space-x-10 pl-8 py-3 hover:bg-white hover:bg-opacity-25 hover:border-l-4 hover:border-l-white  transition duration-500 ease-in-out   "> 
                <img src={avis} className="w-6" alt="stats" />
                <Link to="/GestionAvis">  <p> Gestion des Avis </p>  </Link> 
              
            </div>
         
            <div className="flex flex-row items-end space-x-10 pl-8 py-3 hover:bg-white hover:bg-opacity-25 hover:border-l-4 hover:border-l-white  transition duration-500 ease-in-out   "> 
                <img src={ajouter} className="w-6" alt="stats" />
                <Link to="/ListesCartes">  <p> Gestion des cartes </p>  </Link> 
                
            </div>
      
            <div className="flex flex-row items-end space-x-10 pl-8 py-3 hover:bg-white hover:bg-opacity-25 hover:border-l-4 hover:border-l-white  transition duration-500 ease-in-out   "> 
                <img src={employee} className="w-6" alt="stats" />
                  <Link to="/GestionEmploye">  <p> Gestion des employés</p>  </Link> 
               
            </div>
          
            <div className="flex flex-row items-end space-x-10 pl-8 py-3 hover:bg-white hover:bg-opacity-25 hover:border-l-4 hover:border-l-white  transition duration-500 ease-in-out   "> 
                <img src={history} className="w-6" alt="stats" />
                <Link to="/History">  <p>Historique taches</p>  </Link> 
                
            </div>   
        </div>

        <div className="flex flex-row items-end space-x-10 pl-8 pt-5 mt-7 hover:scale-10 hover:bg-opacity-25 border-t-2 border-t-opacity-25 border-t-white transition duration-500 ease-in-out   "> 
                <img src={Logout} className="w-6 hover:scale-125" alt="stats" />
                <p className="text-white text-sm"> Log out  </p>
        </div>


    </div> );

}
 
export default Sidebar;