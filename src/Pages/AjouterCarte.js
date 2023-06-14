import logo from "../Images/Icons/logo_long.png"
import { Link } from 'react-router-dom';


const AjouterCarte = () => {
    return ( 

    <div className=" h-screen w-full flex flex-col  ">
         <div className="h-24 bg-violet w-full flex flex-row justify-between items-center py-3 px-2">
          <Link to='/'>  <img src={logo} className=" ml-10  w-46 h-16" alt="" /> </Link> 
          <p> NomPrenom </p>
          <div className="flex flex-row justify-between ">
          <button className="bg-tchini px-12 "> hiiiiiiiiiii </button>
          <button className="bg-beige px-12  "> hello </button>
          </div>
         

         </div>
         <div className="bg-tchini">

         </div>
    </div> );
}
 
export default AjouterCarte;