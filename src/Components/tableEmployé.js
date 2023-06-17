import img1 from "../Images/Icons/detail_icon.png"
import img2 from "../Images/Icons/Delete_icon.png"
import {db} from '../config/firebase' ;
import {getDocs , collection, doc, deleteDoc }from 'firebase/firestore' ;
import React, { useEffect, useState } from 'react' ;

import SearchBar from './searchBar'
import { Link } from "react-router-dom";


export default function TableEmployé() {

  const [employés,setEmployés] = useState([]) ;
  
  const EmployésCollectionRef = collection(db,"Employé") ;
  const getEmplyés =async ()=>{
    try{
       const data = await getDocs(EmployésCollectionRef) ;
       const filteredData = data.docs.map((doc)=>({
           ...doc.data(),
           id: doc.id ,
       })) ;
       //console.log(filteredData) ;
       setEmployés(filteredData) ;
      // console.log(employés) ;
    }catch(err){
      console.error(err) ;
    }
   }
  useEffect(()=>{  
    getEmplyés() ;
  },[]);
   const DeleteEmploye = async(id)=>{
    const EmployeDoc = doc(db,"Employé",id) ;
    await deleteDoc(EmployeDoc) ;
    getEmplyés() ;
   };
  return (
  <div className='flex flex-col'>
   <SearchBar/>
     <div className='flex flex-col mx-10 my-7 text-sm   '>
        <div  className='shadow-xl flex flex-row gap-32   py-3 mb-2 rounded-full bg-[#FBBE85]'><div className='ml-4 w-44'> Employé</div> <div  className='w-32'>Email </div> <div className=''>Numéro Téléphone</div><div > Action</div> </div>
        {employés.map((employe)=>(
         <div  className='shadow-xl flex flex-row gap-32  border-2 py-2 mb-1 rounded-full border-lightgris '><div className='ml-4 w-44  flex flex-row gap-4 '> <img  className =' w-10 h-10 rounded-full'src={employe.Photo}/><h1>{employe.Nom}{employe.Prenom}</h1> </div>  <div   className='w-40 '>{employe.Email}</div>     <div className='w-20'>{employe.PhoneNumber}</div>     <div className='flex flex-row '><Link to={'/ProfileEmploye/'+employe.id}> <img className='w-6 h-5 mx-2' src={img1}/></Link><button onClick={()=>DeleteEmploye(employe.id)}><img  className='w-6 h-5'src={img2}/></button></div> </div>    
        
     ))}  
       
    </div>

     <div className='flex flex-row-reverse gap-1 mb-3'>
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
