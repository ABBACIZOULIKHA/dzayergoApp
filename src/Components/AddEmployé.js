import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { db } from '../config/firebase';
export default function AddEmployé({visible}) {
    const [email,setEmail] =useState("") ;
    const [password,setPassword] =useState("") ;

    const EmplyéCollectionRef = collection(db,"Employé") ;
   const onsubmitEmployé = async() =>{
    try{
     await addDoc(EmplyéCollectionRef ,{
       Email : email,
       Password :password ,
     }) ;
    }catch(err){
        console.error(err) ;
    }
   }
    if (!visible) return null ;
  return (
    <div className='fixed inset-0 bg-lightgris bg-opacity-5 backdrop-blur-sm flex justify-center items-center'>
      <div className='border-4 border-tchini rounded-xl flex flex-col bg-lightgris px-5 py-8'>
         <h1 className='text-xl mb-3'>Ajouter employé</h1>
         <p className='text-textgrisfoncé'>l'employé ajouté a des droits de modification du contenu </p>
        
        <div className='flex flex-col gap-5 my-3'>
        <div className='flex flex-col'>
           <h1>Email * </h1>
           <input className='rounded-full border-2 border-tchini p-2 ' placeholder='Entrer Email' 
            onChange={(e)=>setEmail(e.target.value)}/>
         </div>
         <div className='flex flex-col'>
           <h1>Mot de passe * </h1>
           <input className='rounded-full border-2 border-tchini p-2 ' placeholder='Entrer Mot de passe '
           onChange={(e)=>setPassword(e.target.value)}/>
         </div>

        </div>
         <div className='flex flex-row justify-end gap-2'>
       <Link to="/">  <button  className='border-2 border-tchini rounded-full px-5 py-2'>Annuler</button>
       
           <button onClick={onsubmitEmployé} className=' bg-tchini rounded-full px-5 py-2'>Ajouter</button>
           </Link>
         </div>
      </div>
    </div>
  )
}
