import React, { useEffect, useState } from 'react'
import Header from '../Components/header'
import img1 from  "../Images/Icons/starcolor.png"
import img2 from  "../Images/Icons/starnoncolor.png"

import Sidebar from '../Components/Sidebar';
import SearchCarte from '../Components/searchCarte'
import { collection, getDoc, getDocs } from 'firebase/firestore'
import { db } from '../config/firebase'


const ListesCartes = () => {
   
   const [Cartes,setCartes] = useState([]) ;
  
  const CartesCollectionRef = collection(db,"Carte") ;
  useEffect(()=>{  
    const getCartes =async ()=>{
     try{
        const data = await getDocs(CartesCollectionRef) ;
        const filteredData = data.docs.map((doc)=>({
            ...doc.data(),
            id: doc.id ,
        })) ;
        //console.log(filteredData) ;
        setCartes(filteredData) ;
       // console.log(employés) ;
     }catch(err){
       console.error(err) ;
     }
    }
    getCartes() ;
  },[]);



    return ( 
        <div className='h-screen w-full '>
             <Sidebar></Sidebar>
    
    <div className='w-[78%] h-screen ml-[22%] '> 
     
      <Header props={'Gestion des cartes '}/>
    <div className='flex flex-col'>
       <SearchCarte/>
       <div className='flex flex-col justify-center items-center mt-8 '>
    
    <div className='flex flex-row-reverse w-50'>
    <div className=' grid gap-6 grid-cols-3 border-2 border-lightgris rounded-xl shadow-sm p-5'>
      
      {
        Cartes.map((carte)=>( 
          <div className='flex flex-col w-64 h-56 pb-8 rounded-lg shadow-md'>
          <img  className=' w-64 h-36 rounded-t-lg' src={carte.Photo} alt=""/>
          <h1 className="mt-3 ml-2 text-textgrisfoncé text-xl ">{carte.Wilaya}</h1> 
          <div className="ml-2 flex flex-row mt-5 mb-3">
            <h1 className="text-textgris">{carte.Date}</h1>
            <div className="flex flex-row">
                <img className='w-5 h-5' src={img1}/>
                <img className='w-5 h-5' src={img1}/>
                <img className='w-5 h-5' src={img1}/>
                <img className='mt-1 w-3 h-4' src={img2}/>
                <img className='mt-1 w-3 h-4' src={img2}/>
            </div>
          </div>
    </div>
        
        ))
      }
        
       
     
     
    </div> 
    </div>
</div>
    </div>
    
    </div> 
        </div>
   );
}
 
export default ListesCartes;