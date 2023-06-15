import React from 'react'
import img1 from "../Images/Icons/research_icon.png"
import img2 from "../Images/Icons/affiche_icon.png"
import { Link } from 'react-router-dom';
export default function searchCarte() {
  return (
           <div className='flex flex-row-reverse mr-20'>
          <div className='flex flex-row border-2 border-lightgris shadow-2xl rounded-full py-2 px-5'>
            <img className="w-5 h-5" src={img1} alt=""/>
          <input className='px-2' placeholder='Rechercher'/>
          </div>
          <Link to="/AjouterCarte">  <button className='bg-rose text-white text-sm rounded-full mr-4 py-2 px-4'>Ajouter une carte</button>  </Link> 
          
         </div>
     
   
  )
}
