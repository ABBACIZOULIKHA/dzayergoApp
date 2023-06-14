import React, { useState } from 'react'
import Header from '../Components/header'
import HistoriqueBox from '../Components/historiqueBox'
import img1 from  "../Images/pics/AbbaciZoulikha.jpg"
import Sidebar from '../Components/Sidebar';


const HistoriqueTaches = () => {
   const [Taches, SetTaches] = useState(
    [ { tach : 'Modifier un point d’intérêt' , 
        personne : 'tasnime abbaci ' , 
        img :img1, 
        duree : '1' , 
      } , 

      { tach : 'Supprimer un point d’intérêt' , 
        personne : 'Abbaci zoulikha' , 
        img :img1 , 
        duree : '1' , 
      } ,

      { tach : 'Ajouter un point d’intérêt' , 
        personne : ' Razane Meguellati' , 
        img :img1 , 
        duree : '2' , 
      } ,

      { tach : 'Modifier un point d’intérêt' , 
        personne : 'Yousra Farhani ' , 
        img :img1 , 
        duree : '2' , 
      } ,
      { tach : 'Supprimer un point d’intérêt' , 
      personne : 'Tasnime abbaci ' , 
      img :img1 , 
      duree : '2' , 
    } ,
    { tach : 'Modifier un point d’intérêt' , 
    personne : 'Norhane Cherif ' , 
    img :img1 , 
    duree : '3' , 
    } ,
    { tach : 'Ajouter un point d’intérêt' , 
     personne : 'Sirine Gheddou' , 
     img :img1 , 
     duree : '4' , 
    } ,
    { tach : 'Supprimer un point d’intérêt' , 
      personne : 'tasnime abbaci ' , 
      img :img1 , 
      duree : '10' , 
    } ,
       
    ]
   )
   
    return ( 
        <div className='h-screen w-full '>
             <Sidebar></Sidebar>
    
    <div className='w-[78%] h-screen ml-[22%] '> 
     
      <Header props={'historique'}/>
    <div className='flex flex-col justify-center items-center '>
    
    <div className='flex flex-row-reverse w-50'>
    <div className=' grid gap-6 grid-cols-3 border-2 border-lightgris rounded-xl shadow-sm p-5'>
      
      {
        Taches.map((tache)=>
        ( <HistoriqueBox tache={tache}/>)
     
        )
      }
        
       
     
     
    </div> 
    </div>
</div>
    </div> 
        </div>
   );
}
 
export default HistoriqueTaches;