import React, { useState } from 'react'
import Header from '../Components/header'
import HistoriqueBox from '../Components/historiqueBox'
import img1 from  "../Images/pics/Annaba.png"
import img2 from  "../Images/pics/Blida.png"
import img3 from  "../Images/pics/Tamenrasset.png"
import img4 from  "../Images/pics/jijel.png"
import Sidebar from '../Components/Sidebar';
import CarteBox from '../Components/carteBox';
import SearchCarte from '../Components/searchCarte'


const HistoriqueCartes = () => {
   const [Cartes, SetCartes] = useState(
    [ { wilaya : 'jijel' , 
        date : '24 avr 2020' , 
        img :img4,  
      } , 

      { wilaya : 'Annaba' , 
      date : '24 avr 2020' , 
      img :img1,   
      } ,

      {wilaya : 'Blida' , 
      date : '24 avr 2020' , 
      img :img2,  
      } ,

      { wilaya : 'Tamenrasset' , 
      date : '24 avr 2020' , 
      img :img3,  
      } ,
      { wilaya : 'jijel' , 
      date : '24 avr 2020' , 
      img :img4,   
    } ,
    { wilaya : 'jijel' , 
    date : '24 avr 2020' , 
    img :img4,   
    } ,
    { wilaya : 'jijel' , 
    date : '24 avr 2020' , 
    img :img4,  
    } ,
    { wilaya : 'jijel' , 
    date : '24 avr 2020' , 
    img :img4,      } ,
       
    ]
   )
   
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
        Cartes.map((carte)=>
        ( <CarteBox carte={carte}/>)
     
        )
      }
        
       
     
     
    </div> 
    </div>
</div>
    </div>
    
    </div> 
        </div>
   );
}
 
export default HistoriqueCartes;