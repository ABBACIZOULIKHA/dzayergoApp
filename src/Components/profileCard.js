import React from 'react'
import img1 from "../Images/pics/AbbaciZoulikha.jpg"
export default function profileCard() {
  return (
    <div className='flex flex-col bg-yellow-400 mx-3 px-3 pt-5 shadow-sm rounded-2xl'>
    <div className='flex items-center justify-betweent mx-3'>
    <img className=' w-16 h-16 rounded-full' src={img1} alt=""/>
    <div className='flex flex-col ml-2'>
    <h1 className='text-lg'>Abbaci zoulikha</h1>
    <h1 className='text-sm text-slate-500'>kz_abaci@esi.dz</h1>
    </div>    </div>
    <h1 className='my-5 '>Membre depuis: 18 MAI 2020</h1>
    <button className='bg-red-700 rounded-full mx-14 shadow-md py-2 my-14 text-white'>Contacter</button>
  </div>
  )
}
