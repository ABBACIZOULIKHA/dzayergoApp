import React from 'react'
import img1 from "../Images/Icons/detail_icon.png"
import img2 from "../Images/Icons/Delete_icon.png"
import img3 from "../Images/pics/AbbaciZoulikha.jpg"

import SearchBar from './searchBar'

export default function tableClient() {
  return (
  <div className='flex flex-col'>
     <SearchBar/> 
     <div className='flex flex-col mx-10 my-7 text-sm'>
        <div  className='shadow-xl flex flex-row gap-32   py-3 mb-2 rounded-full bg-[#FBBE85]'><div className='ml-4 w-44'> Client</div> <div  className='w-44'>Email </div> <div className='w-36'>Numéro Téléphone</div><div> Action</div> </div>
        <div  className='shadow-xl flex flex-row gap-32  border-2 py-2 mb-1 rounded-full border-lightgris '><div className='ml-4 w-44  flex flex-row gap-4 '> <img  className =' w-10 h-10 rounded-full'src={img3}/><h1>Abbaci Zoulikha</h1> </div>  <div   className='w-44  ' > kz_abbaci@esi.dz </div>     <div className='w-20'>0793921328</div>    <div> <img className='w-6 h-5' src={img2}/>   </div> </div>
        <div  className='shadow-xl flex flex-row gap-32  border-2 py-2 mb-1 rounded-full border-lightgris '><div className='ml-4 w-44  flex flex-row gap-4 '> <img  className =' w-10 h-10 rounded-full'src={img3}/><h1>Abbaci Zoulikha</h1> </div>  <div   className='w-44 '> kz_abbaci@esi.dz</div>     <div className='w-20'>0793921328</div>    <div> <img  className='w-6 h-5'src={img2}/>   </div> </div>
        <div  className='shadow-xl flex flex-row gap-32  border-2 py-2 mb-1 rounded-full border-lightgris'><div  className='ml-4 w-44  flex flex-row gap-4 ' ><img  className =' w-10 h-10 rounded-full'src={img3}/><h1>Abbaci Zoulikha</h1> </div>  <div   className='w-44 '> kz_abbaci@esi.dz </div>     <div className='w-20'>0793921328</div>    <div> <img className='w-6 h-5' src={img2}/>   </div> </div>
        <div  className='shadow-xl flex flex-row gap-32  border-2 py-2 mb-1 rounded-full border-lightgris'><div  className='ml-4 w-44  flex flex-row gap-4' > <img  className =' w-10 h-10 rounded-full'src={img3}/><h1>Abbaci Zoulikha</h1> </div>  <div   className='w-44 '> kz_abbaci@esi.dz </div>     <div className='w-20'>0793921328</div>    <div> <img  className='w-6 h-5'src={img2}/>   </div> </div>
        <div  className='shadow-xl flex flex-row gap-32  border-2 py-2 mb-1 rounded-full border-lightgris'><div  className='ml-4 w-44  flex flex-row gap-4' > <img  className =' w-10 h-10 rounded-full'src={img3}/><h1>Abbaci Zoulikha</h1> </div>  <div   className='w-44 '  > kz_abbaci@esi.dz</div>     <div className='w-20'>0793921328</div>    <div> <img  className='w-6 h-5'src={img2}/>   </div> </div>
        <div  className='shadow-xl flex flex-row gap-32  border-2 py-2 mb-1 rounded-full border-lightgris'><div  className='ml-4 w-44  flex flex-row gap-4' > <img  className =' w-10 h-10 rounded-full'src={img3}/><h1>Abbaci Zoulikha</h1> </div>  <div   className='w-44 '> kz_abbaci@esi.dz</div>     <div className='w-20'>0793921328</div>    <div> <img  className='w-6 h-5'src={img2}/>   </div> </div>
        <div  className='shadow-xl flex flex-row gap-32  border-2 py-2 mb-1 rounded-full border-lightgris'><div  className='ml-4 w-44  flex flex-row gap-4' > <img  className =' w-10 h-10 rounded-full'src={img3}/><h1>Abbaci Zoulikha</h1> </div>  <div   className='w-44 '> kz_abbaci@esi.dz </div>     <div className='w-20'>0793921328</div>    <div> <img className='w-6 h-5' src={img2}/>   </div> </div>
     </div>

     <div className='flex flex-row-reverse gap-1 mb-3 '>
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
