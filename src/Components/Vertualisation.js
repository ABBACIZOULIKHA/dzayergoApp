import React, { useEffect, useState } from 'react'
import notif from "../Images/Icons/notification.png"
import { Link } from 'react-router-dom';
import SideBarPoint from './SideBarPoint';
import { db } from '../config/firebase';
import DetailPhoto from './DetailPhoto';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';


function Vertualisation  (prop) {
  const [Photos,setPhotos] = useState([]) ;
  const [carteid,setCarteid] = useState("NcViEpWvQYl9N9lN3ZQN") ;
   
   const {lieu1} = prop ;
   const PhotosCollectionRef = collection(db,"Carte",carteid,"Lieu","g9K5IqU5s0K7MWCBwr5P","Photos") ;
   useEffect(()=>{  
     const getPhotos =async ()=>{
      try{
         const data = await getDocs(PhotosCollectionRef) ;
         const filteredData = data.docs.map((doc)=>({
             ...doc.data(),
             id: doc.id ,
         })) ;
        // console.log(filteredData) ;
        console.log(lieu1)
        setPhotos(filteredData) ;
        // console.log(employés) ;
      }catch(err){
        console.error(err) ;
      }
     }
     getPhotos() ;
   },[]);
  
  return ( 
    <div className='flex flex-col '>
        <SideBarPoint/> 
      <div className='flex flex-row '>
       <div className='flex flex-col w-2/3 mx-5 my-5'>
        <div className='flex flex-row gap-5 text-xl'>
           <div>Photo</div>
           <div>Video</div>
        </div>
        <div className='grid grid-cols-3 gap-3 my-5'>
        {Photos.map((photo)=>(
          <img src={photo.Url}/>
        ))}  
        </div>
       </div>



      <DetailPhoto/>
      </div>
    </div>
     );
 }
  
 export default Vertualisation;