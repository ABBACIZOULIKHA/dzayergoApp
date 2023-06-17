import { useParams } from 'react-router-dom';
import Header from '../Components/header'
import Presentation from '../Components/Presentation';
import Sidebar from '../Components/Sidebar';
import TableEmployé from '../Components/tableEmployé';
import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
const DetailPoint1 = () => {
    const {point} = useParams() ;
    const {carteid} = useParams() ;
    useEffect(()=>{
        console.log(point) ;
    })
    return ( 
    <div className='h-screen w-full '>
<Sidebar></Sidebar>
<div className="w-[78%] h-screen ml-[22%]">
     <Header props={'Gestion des points d’interets'}/>
     <Presentation  props2={point} props1={carteid}/>
    </div> 
    </div>
    );
}
 
export default DetailPoint1;