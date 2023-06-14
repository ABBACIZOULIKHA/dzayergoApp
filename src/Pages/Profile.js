
import React, { useState } from 'react'
import Header from '../Components/header'
import Securité from '../Components/securité'
import Compte from "../Components/Compte"
import img1 from "../Images/pics/AbbaciZoulikha.jpg"
import Sidebar from '../Components/Sidebar';

import { Link } from 'react-router-dom';


const Profile = () => {
    const[Afficher , setAfficher] = useState(1) ; 

    return ( 
    <div className='h-screen w-full '>
<Sidebar></Sidebar>
<div className=" w-[78%] h-screen ml-[22%] ">
       <Header props={'Profile'}/>
      
    <div className='flex flex-row space-x-10 border-2 m-4 border-lightgris py-4 px-2 rounded-3xl '>
         
         <div className='flex flex-col justify-center items-center  bg-gray-100 mx-3 px-3 pt-5 shadow-2xl rounded-2xl h-60'>
          
        
          <div className='flex items-center  mx-3'>
             <img className=' w-16 h-16 rounded-full' src={img1} alt=""/>
               <div className='flex flex-col ml-2'>
                   <h1 className='text-xl font-bold'>Abbaci zoulikha</h1>
                   <h1 className='text-sm text-slate-500'>kz_abaci@esi.dz</h1>
              </div>
             
         </div>
   
         <h1 className='my-5 text-sm  '>Membre depuis: 18 MAI 2020</h1>
       <button className=' hidden bg-red-700 rounded-full mx-14 shadow-md py-2 my-14 text-white'>Contacter</button>
         </div>
            
   
             <div className='bg-gray-100 flex flex-col rounded-2xl w-7/12 shadow-2xl'>
             <div className='bg-beige rounded-t-2xl px-12'>
               <h1 className='my-3 mr-2 text-lg font-bold'> Editer le profile</h1>
   
               <div className='flex flex-row gap-5 '>
               
                <div className='cursor-pointer hover:border-b-4 hover:border-b-tchini ' onClick={()=>(setAfficher(1))}>
                 <h1>compte</h1>
                 </div>
                
                 <div className='cursor-pointer hover:border-b-4 hover:border-b-tchini ' onClick={()=>(setAfficher(2))}>
                 <h1>Sécurité</h1>
                 </div>

                 <div className='cursor-pointer hover:border-b-4 hover:border-b-tchini ' >
                 <Link to="/Notification">  <h1> Notification </h1>  </Link>  
                 </div>

               </div>
             </div>
   
            { Afficher == 1 ?<Compte/>  :  <Securité/>  } 
           
             


             </div>
   
            
       </div>
   
    </div> 
    </div>
        );
}
 
export default Profile;

