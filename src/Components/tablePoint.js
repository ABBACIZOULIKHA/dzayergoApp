import React, { useEffect, useState } from 'react'
import img1 from "../Images/Icons/detail_icon.png"
import img2 from "../Images/Icons/Delete_icon.png"
import SearchBar from './searchBar'
import { db } from '../config/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { Link } from 'react-router-dom';

export default function TablePoint() {
   const [Points,setPoints] = useState([]) ;
   const [carteid,setCarteid] = useState("NcViEpWvQYl9N9lN3ZQN") ;

   //const PointsCollectionRef = collection(db,"Carte",carteid,"Lieu") ;
   const PointsCollectionRef = collection(db,"Lieu") ;
   useEffect(()=>{  
     const getPoints =async ()=>{
      try{
         const data = await getDocs(PointsCollectionRef) ;
         const filteredData = data.docs.map((doc)=>({
             ...doc.data(),
             id: doc.id ,
         })) ;
         //console.log(filteredData) ;
         setPoints(filteredData) ;
        // console.log(employés) ;
      }catch(err){
        console.error(err) ;
      }
     }
     getPoints() ;
   },[]);
   
 
  



  return (
  <div className='flex flex-col'>
     <SearchBar/> 
     <div className='flex flex-col mx-10 my-7 text-sm   '>
        <div  className='shadow-xl flex flex-row gap-32   py-3 mb-2 rounded-full bg-[#FBBE85]'><div className='ml-4 w-32'> point d'intret</div> <div  className='w-20'>Localisation </div> <div className='w-20'>Categorie</div><div> Action</div> </div>
        {Points.map((point)=>(
        <div  className='shadow-xl flex flex-row gap-32  border-2 py-2 mb-1 rounded-full border-lightgris '><div className='ml-4 w-32'> {point.Nom}</div> <div  className='w-20'>{point.Wilaya} </div> <div className='w-20'>{point.Categorie}</div><div className='flex flex-row'>   <div className='mx-2'><Link to={'/DetailPoint1/'+point.id}><img className='w-6 h-5' src={img1}/></Link> </div> <div></div> <img  className='w-6 h-5' src={img2}/></div> </div>
        ))}  
        {/* <div  className='shadow-xl flex flex-row gap-32  border-2 py-2 mb-1 rounded-full border-lightgris '><div className='ml-4 w-32'> Cap Carbon</div> <div   className='w-20'>Béjaia </div> <div className='w-20'>Plage</div><div className='flex flex-row'>     <div className='mx-2'><img  className='w-6 h-5'src={img1}/> </div> <div></div> <img   className='w-6 h-5'src={img2}/></div> </div>
        <div  className='shadow-xl flex flex-row gap-32  border-2 py-2 mb-1 rounded-full border-lightgris'><div className='ml-4 w-32'> Ruines Romain</div> <div   className='w-20'>Tipaza </div> <div className='w-20'>Monument</div><div className='flex flex-row'><div className='mx-2'><img className='w-6 h-5' src={img1}/> </div> <div></div> <img  className='w-6 h-5' src={img2}/></div> </div>
        <div  className='shadow-xl flex flex-row gap-32  border-2 py-2 mb-1 rounded-full border-lightgris'><div className='ml-4 w-32'> Farouk Land</div> <div   className='w-20'>Annaba </div> <div className='w-20'>Parc</div><div className='flex flex-row'>      <div className='mx-2'><img  className='w-6 h-5'src={img1}/> </div> <div></div> <img   className='w-6 h-5'src={img2}/></div> </div>
        <div  className='shadow-xl flex flex-row gap-32  border-2 py-2 mb-1 rounded-full border-lightgris'><div className='ml-4 w-32'> Couronne</div> <div  className='w-20' >Tipaza </div> <div className='w-20'>Restaurant</div><div className='flex flex-row'>   <div className='mx-2'><img  className='w-6 h-5'src={img1}/> </div> <div></div> <img   className='w-6 h-5'src={img2}/></div> </div>
        <div  className='shadow-xl flex flex-row gap-32  border-2 py-2 mb-1 rounded-full border-lightgris'><div className='ml-4 w-32'> Ben Aknon</div> <div   className='w-20'>Alger </div> <div className='w-20'>Parc</div><div className='flex flex-row'>         <div className='mx-2'><img  className='w-6 h-5'src={img1}/> </div> <div></div> <img   className='w-6 h-5'src={img2}/></div> </div>
        <div  className='shadow-xl flex flex-row gap-32  border-2 py-2 mb-1 rounded-full border-lightgris'><div className='ml-4 w-32'> Set</div> <div   className='w-20'>Tipaza </div> <div className='w-20'>Plage</div><div className='flex flex-row'>             <div className='mx-2'><img className='w-6 h-5' src={img1}/> </div> <div></div> <img  className='w-6 h-5' src={img2}/></div> </div> */}
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
