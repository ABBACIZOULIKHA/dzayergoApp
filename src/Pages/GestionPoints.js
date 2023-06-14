import React from 'react'
import Header from '../Components/header'
import TablePoint from '../Components/tablePoint'
import Sidebar from '../Components/Sidebar'

const GestionPoints = () => {
    return (
        <div className='w-full h-screen '>
            <Sidebar></Sidebar>
            
           <div className='w-[78%] h-screen ml-[22%] '>
             <div className='flex flex-col '>
             <Header props={'Gestion points Interet'}/>
                <TablePoint/>

            </div>
        </div>
        </div>
       
    );
}
 
export default GestionPoints;

