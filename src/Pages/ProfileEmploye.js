
import React, { useEffect, useState } from 'react'
import Header from '../Components/header'
import Securité from '../Components/securité'
import Compte from "../Components/Compte"
import Compte2 from "../Components/compte2"
import img1 from "../Images/pics/AbbaciZoulikha.jpg"
import Sidebar from '../Components/Sidebar';

import { Link, useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../config/firebase'


const Profile = () => {
    const[Afficher , setAfficher] = useState(1) ; 
    const {employe} = useParams() ;
    const [employé,setEmployé] = useState([]) ;
    const EmployéCollectionRef = doc(db,"Employé",employe) ;
        useEffect(()=>{  
      const getEmplyé =async ()=>{
       try{
          const data = await getDoc(EmployéCollectionRef) ;
          const filteredData = data.data()
         //  console.log(filteredData.Nom) ;
          setEmployé(filteredData) ;
        
       }catch(err){
         console.error(err) ;
       }
      }
      getEmplyé() ;
    },[]);
    
  
    return ( 
    <div className='h-screen w-full '>
<Sidebar></Sidebar>
<div className=" w-[78%] h-screen ml-[22%] ">
       <Header props={'Profile'}/>
      
    <div className='flex flex-row space-x-10 border-2 m-4 border-lightgris py-4 px-2 rounded-3xl '>
         
         <div className='flex flex-col justify-center items-center  bg-gray-100 mx-3 px-3 pt-5 shadow-2xl rounded-2xl h-60'>
          
        
          <div className='flex items-center  mx-3'>
             <img className=' w-16 h-16 rounded-full' src={employé.Photo} alt=""/>
               <div className='flex flex-col ml-2'>
                   <h1 className='text-xl font-bold'>{employé.Nom} {employé.Prenom}</h1>
                   <h1 className='text-sm text-slate-500'>{employé.Email}</h1>
              </div>
             
         </div>
   
         <h1 className='my-5 text-sm  '>Membre depuis: {employé.DateRecrutement}</h1>
         <Link to="/Notification"><button className=' hidden bg-red-700 rounded-full mx-14 shadow-md py-2 my-14 text-white'>Contacter</button> </Link>
         </div>
            
   
             <div className='bg-gray-100 flex flex-col rounded-2xl w-7/12 shadow-2xl'>
             <div className='bg-beige rounded-t-2xl px-12'>
               <h1 className='my-3 mr-2 text-lg font-bold'>  profil employé </h1>
   
               <div className='flex flex-row gap-5 '>
               
                <div className='cursor-pointer hover:border-b-4 hover:border-b-tchini ' onClick={()=>(setAfficher(1))}>
                 <h1>compte</h1>
                 </div>

               </div>
             </div>
   
           <Compte2 props={employe}/>           
             


             </div>
   
            
       </div>
   
    </div> 
    </div>
        );
}
 
export default Profile;

