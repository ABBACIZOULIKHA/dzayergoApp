import React from 'react'
import img1 from "../Images/Icons/research_icon.png"
import img2 from "../Images/Icons/affiche_icon.png"
export default function searchBar() {
  return (
    <div className='flex flex-col'>
        <div className='flex flex-row-reverse'>
          <div className='flex flex-row border-2 border-lightgris shadow-2xl rounded-full py-2 px-5'>
            <img className="w-5 h-5" src={img1} alt=""/>
          <input className='px-2' placeholder='Rechercher'/>
          </div>
          <button className='bg-rose text-white text-sm rounded-full mr-4 py-2 px-4'>Ajouter</button>
         
          <div className='flex flex-row items-center gap-2 mr-72'>
            <h2>Afficher</h2>
            <div className='flex flex-row space-x-3 rounded-full shadow-2xl border-2 border-lightgris py-2 px-5'>
            <img className="w-5 h-5" src={img2} alt=""/>
             <h1>10</h1>
            </div>
            <h1>entrées</h1>
          </div>

          
        </div>
     
    </div>
  )
}
