import React, { useEffect, useState } from 'react'
import notif from "../Images/Icons/notification.png"
import { Link } from 'react-router-dom';
import SideBarPoint from './SideBarPoint';
import { db } from '../config/firebase';
import DetailPhoto from './DetailPhoto';
import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';


function Vertualisation  ({prop}) {
  const [Photos,setPhotos] = useState([]) ;
   const {lieu1} = prop ;
   let q ;
   
   const PhotosCollectionRef = collection(db,"PhotoLieu") ;
   q = query(PhotosCollectionRef,where('Lieuid','==',"45sV9Kr1BVwddFtcYPGw"))
   const getPhotos =async ()=>{
    try{
       const data = await getDocs(q) ;
       var photoArray = [] ;
       for(var snap of data.docs){
        var dd = snap.data() ;
        dd.ID = snap.id ;
        photoArray.push({...dd}) ;
       }
      if(photoArray.length === data.docs.length){
        setPhotos(photoArray) ;
      }
    }catch(err){
      console.error(err) ;
    }
   }

   useEffect(()=>{  
     
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