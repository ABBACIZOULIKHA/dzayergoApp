import React from 'react'
export default function securité() {
  return (
     
    <div className='flex flex-col space-y-4 justify-center p-7 '>
               <div className=' flex flex-col gap-1'> 
                  <h1 className=''> Nom utilisateur</h1>
                  <input className='rounded-full px-10  border-2 border-lightgris bg-gray-100' type="text" />
               </div>
               <div className=' flex flex-col gap-1'> 
               <h1 className='mr-72'> Mot de passe</h1>
               <input className='rounded-full px-10  border-2 border-lightgris bg-gray-100' type="password" />
               </div>
               <div className=' flex flex-col gap-1'> 
               <h1 className='mr-48'>Confirmation du Mot de passe</h1>
               <input className='rounded-full px-10  border-2 border-lightgris bg-gray-100' type="password" />
               </div>
   
                <button className='bg-red-700 mr-40 ml-10 py-2 my-14 shadow-md w-44 text-white rounded-full '>Modifier</button> 
      </div>
   


           
  )
}
