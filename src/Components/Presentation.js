import React, { useEffect, useState } from 'react'
import img1 from "../Images/pics/Tipaza_map.png"
import notif from "../Images/Icons/notification.png"
import { Link } from 'react-router-dom';
import SideBarPoint from './SideBarPoint';
import { db } from '../config/firebase';
import { doc, getDoc } from 'firebase/firestore';


function Presentation  (props) {
    const {props1,props2} = props ;
    const [Point,setPoint] = useState([]) ;
    const PointCollectionRef = doc(db,"Carte",props1,"Lieu",props2) ;
        useEffect(()=>{  
      const getPoint =async ()=>{
       try{
          const data = await getDoc(PointCollectionRef) ;
          const filteredData = data.data()
         //  console.log(filteredData.Nom) ;
         setPoint(filteredData) ;
       
       }catch(err){
         console.error(err) ;
       }
      }
      getPoint() ;
    },[]);
  return ( 
    <div className='flex flex-col'>
       <SideBarPoint prop={props2} />
    <div className='flex flex-row gap-3 mx-20'>

     <div className='flex flex-col shadow-2xl rounded-3xl w-1/2 h-max px-8 py-5 gap-4'>
      <div className='flex flex-col'> 
       <h1>Titre</h1>
       <div className='bg-[#FFDCEF] rounded-full px-3 py-1' >{Point.Nom}</div>
      </div>
      <div className='flex flex-row '>
       <div className='flex flex-col w-1/2'>
        <h1>Categorie</h1>
        <div className='bg-[#FFDCEF] rounded-full px-3 py-1 w-2/3'>{Point.Categorie}</div>
       </div>
       <div className='flex flex-col w-1/2'>
       <h1>Thème</h1>
       <div className='bg-[#FFDCEF] rounded-full px-3 py-1 w-2/3'>{Point.Theme}</div> 
       </div>
      </div>
      <div className='flex flex-col'> 
       <h1>Horaire d’accés</h1>
       <div className='bg-[#FFDCEF] rounded-full px-3 py-1'>{Point.HorOuv}</div>
      </div>
      <div className='flex flex-row '>
       <div className='flex flex-col w-1/2'>
        <h1>Prix</h1>
        <div className='bg-[#FFDCEF] rounded-full px-3 py-1 w-2/3'>{Point.PrixAcc}</div>
       </div>
       <div className='flex flex-col w-1/2'>
       <h1>trajet</h1>
       <div className='bg-[#FFDCEF] rounded-full px-3 py-1 w-2/3' >{Point.Trajet}</div> 
       </div>
      </div>
      <div className='flex flex-col'> 
       <h1>Description</h1>
       <div className='bg-[#FFDCEF] rounded-4xl px-5 py-2'><p>{Point.Description}</p></div>
      </div>
      </div>
       

       {/* anther  */}
      <div className='flex flex-col  w-1/2' >
            <img  className='h-72' src={img1}/>
        <div className='flex flex-col shadow-2xl rounded-3xl  px-8 py-5 my-1 gap-3'>
        <div className='flex flex-row '>
             <div className='flex flex-col w-1/2'>
              <h1>Wilaya</h1>
              <div className='rounded-full px-3 py-1 w-2/3  shadow-lg ' >{Point.Wilaya}</div> 
             </div>
             <div className='flex flex-col w-1/2'>
             <h1>Commune</h1>
             <div className=' shadow-lg rounded-full px-3 py-1 w-2/3' >{Point.Commune}</div> 
             </div>
        </div>
        <div className='flex flex-col'> 
           <h1>Adresse</h1>
           <div className='rounded-4xl px-5 py-2 shadow-lg '>{Point.Adresse}</div>
           </div>
        </div>

    </div>
    
    </div>
    </div>
     );
 }
  
 export default Presentation;