import { useParams } from 'react-router-dom';
import Header from '../Components/header'
import Sidebar from '../Components/Sidebar';
import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import Vertualisation from '../Components/Vertualisation';
const DetailPoint2 = () => {
    const {point} = useParams() ;
    useEffect(()=>{
        console.log(point) ;
    })
    return ( 
    <div className='h-screen w-full '>
<Sidebar></Sidebar>
<div className="w-[78%] h-screen ml-[22%]">
     <Header props={'Gestion des points d’interets'}/>
     <Vertualisation prop={point}/>
    </div> 
    </div>
    );
}
 
export default DetailPoint2;