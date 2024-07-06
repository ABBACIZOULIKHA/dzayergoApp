import React, { useEffect } from 'react'
import img1 from "../Images/Icons/Presentation_icon.png"
import img2 from "../Images/Icons/virtualisation_icon.png"
import img3 from "../Images/Icons/Activité_icon.png"
import { Link, useParams } from 'react-router-dom'
export default function SideBarPoint(prop) {
 const {point} = prop ;
  return (
    <div className='flex flex-row justify-center rounded-full gap-32 shadow-2xl w-[85%] py-2 mx-12 mb-10'>
       
      
       
       <Link to={'/DetailPoint1'}>
        <div className='flex flex-row'>
            <img className='w-14 h-14' src={img1}/> 
            <h1 className='text-[#FBBE85]'>Présentation</h1>
        </div></Link>
        <Link to={'/DetailPoint2/'+point}>
        <div className='flex flex-row'>
            <img className='w-14 h-14' src={img2}/> 
            <h1>Visualisation</h1>
        </div></Link>
        <Link to="/DetailPoint3"> 
        <div className='flex flex-row'>
            <img className='w-10 h-12' src={img3}/> 
            <h1>Activités</h1>
        </div>
        </Link>
    </div>
  )
}
