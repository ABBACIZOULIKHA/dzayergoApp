import React from 'react'
import img1 from "../Images/Icons/detail_icon.png"
import img2 from "../Images/Icons/Delete_icon.png"
import SearchBar from './searchBar'

export default function tablePoint() {
  return (
  <div className='flex flex-col'>
     <SearchBar/> 
     <div className='flex flex-col mx-10 my-7 text-sm   '>
        <div  className='shadow-xl flex flex-row gap-32   py-3 mb-2 rounded-full bg-[#FBBE85]'><div className='ml-4 w-32'> point d'intret</div> <div  className='w-20'>Localisation </div> <div className='w-20'>Categorie</div><div> Action</div> </div>
        <div  className='shadow-xl flex flex-row gap-32  border-2 py-2 mb-1 rounded-full border-lightgris '><div className='ml-4 w-32'> Plage Matares</div> <div  className='w-20'>Tipaza </div> <div className='w-20'>Plage</div><div className='flex flex-row'> <div className='mx-2'><img className='w-6 h-5' src={img1}/> </div> <div></div> <img  className='w-6 h-5' src={img2}/>   </div> </div>
        <div  className='shadow-xl flex flex-row gap-32  border-2 py-2 mb-1 rounded-full border-lightgris '><div className='ml-4 w-32'> Cap Carbon</div> <div   className='w-20'>Béjaia </div> <div className='w-20'>Plage</div><div className='flex flex-row'> <div className='mx-2'><img  className='w-6 h-5'src={img1}/> </div> <div></div> <img   className='w-6 h-5'src={img2}/>   </div> </div>
        <div  className='shadow-xl flex flex-row gap-32  border-2 py-2 mb-1 rounded-full border-lightgris'><div className='ml-4 w-32'> Ruines Romain</div> <div   className='w-20'>Tipaza </div> <div className='w-20'>Monument</div><div className='flex flex-row'> <div className='mx-2'><img className='w-6 h-5' src={img1}/> </div> <div></div> <img  className='w-6 h-5' src={img2}/>   </div> </div>
        <div  className='shadow-xl flex flex-row gap-32  border-2 py-2 mb-1 rounded-full border-lightgris'><div className='ml-4 w-32'> Farouk Land</div> <div   className='w-20'>Annaba </div> <div className='w-20'>Parc</div><div className='flex flex-row'> <div className='mx-2'><img  className='w-6 h-5'src={img1}/> </div> <div></div> <img   className='w-6 h-5'src={img2}/>   </div> </div>
        <div  className='shadow-xl flex flex-row gap-32  border-2 py-2 mb-1 rounded-full border-lightgris'><div className='ml-4 w-32'> Couronne</div> <div  className='w-20' >Tipaza </div> <div className='w-20'>Restaurant</div><div className='flex flex-row'> <div className='mx-2'><img  className='w-6 h-5'src={img1}/> </div> <div></div> <img   className='w-6 h-5'src={img2}/>   </div> </div>
        <div  className='shadow-xl flex flex-row gap-32  border-2 py-2 mb-1 rounded-full border-lightgris'><div className='ml-4 w-32'> Ben Aknon</div> <div   className='w-20'>Alger </div> <div className='w-20'>Parc</div><div className='flex flex-row'> <div className='mx-2'><img  className='w-6 h-5'src={img1}/> </div> <div></div> <img   className='w-6 h-5'src={img2}/>   </div> </div>
        <div  className='shadow-xl flex flex-row gap-32  border-2 py-2 mb-1 rounded-full border-lightgris'><div className='ml-4 w-32'> Set</div> <div   className='w-20'>Tipaza </div> <div className='w-20'>Plage</div><div className='flex flex-row'> <div className='mx-2'><img className='w-6 h-5' src={img1}/> </div> <div></div> <img  className='w-6 h-5' src={img2}/>   </div> </div>
     </div>

     <div className='flex flex-row-reverse gap-1 '>
      <div className='bg-rose rounded-full py-1 px-3 text-white'>suivant</div>
      <div className='rounded-full shadow-2xl py-1 px-3 border-2 border-lightgris'>5</div>
      <div className='rounded-full shadow-2xl py-1 px-3 border-2 border-lightgris'>4</div>     
      <div className='rounded-full shadow-2xl py-1 px-3 border-2 border-lightgris'>3</div>
      <div className='rounded-full shadow-2xl py-1 px-3 border-2 border-lightgris'>2</div>
      <div className='rounded-full shadow-2xl py-1 px-3 border-2 border-lightgris'>1</div>
      <div className='bg-rose rounded-full py-1 px-3 text-white'>Précédent</div>
     </div>
  </div>
  )
}
