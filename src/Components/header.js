import React from 'react'
import img1 from "../Images/pics/AbbaciZoulikha.jpg"
import notif from "../Images/Icons/notification.png"
import { Link } from 'react-router-dom';


 const Header = ({props}) => {
  return (  
    <div className='flex flex-row justify-between items-center mx-10  h-16 mb-12 '>
     
      <h1 className='text-2xl font-bold mt-4'>{props}</h1>

      <div className='flex flex-row'>
       <Link to="/Notification">
       <img className='w-6 h-7 mt-4' src={notif} alt=""/>
       </Link>
     
      
      <div className='flex flex-row justify-center items-center rounded-b-xl px-7 ml-6 py-4  shadow-xl'>
        <img className=' w-10 h-10 rounded-full' src={img1} alt=""/>
        <h1 className='ml-3 text-sm font-bold '> Employé ministère</h1>
      </div>

      </div>
         </div>
     );
 }
  
 export default Header;