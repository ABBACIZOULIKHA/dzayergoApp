import { collection, doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../config/firebase";

const Compte2 = ({props}) => {
    const [employé,setEmployé] = useState([]) ;
    const EmployéCollectionRef = doc(db,"Employé",props) ;
        useEffect(()=>{  
      const getEmplyé =async ()=>{
       try{
          const data = await getDoc(EmployéCollectionRef) ;
          const filteredData = data.data()
         //  console.log(filteredData.Nom) ;
          setEmployé(filteredData) ;
        
       }catch(err){
         console.error(err) ;
       }
      }
      getEmplyé() ;
    },[]);
    
  
        return (
         
        <div className='flex flex-col space-y-4 justify-center p-7 '>
        <div className="flex flex-row gap-8">
          <div className="flex flex-col  gap-4">
               <div className=' flex flex-col gap-1'> 
                 
                  <h1 className=''> Nom</h1>
                  <input className='rounded-full px-5  border-2 border-lightgris bg-gray-100 text-textgrisfoncé' type="text" value={employé.Nom} />
               </div>
               <div className=' flex flex-col gap-1'> 
                  <h1 className=''> Email</h1>
                  <input className='rounded-full px-5  border-2 border-lightgris bg-gray-100 text-textgrisfoncé' type="text" value={employé.Email}/>
               </div>
               <div className=' flex flex-col gap-1'> 
                  <h1 className=''> Wilaya</h1>
                  <input className='rounded-full px-5  border-2 border-lightgris bg-gray-100 text-textgrisfoncé' type="text" value={employé.Wilaya}/>
               </div>
               <div className=' flex flex-col gap-1'> 
                  <h1 className=''> Adresse</h1>
                  <input className='rounded-full px-5  border-2 border-lightgris bg-gray-100 text-textgrisfoncé' type="text" value={employé.Adresse}/>
               </div>
          </div>


          <div className="flex flex-col gap-4">
                <div className=' flex flex-col gap-1'> 
                        <h1 className=''> Prénom</h1>
                        <input className='rounded-full px-5  border-2 border-lightgris bg-gray-100 text-textgrisfoncé' type="text" value={employé.Prenom}/>
                </div>
                <div className=' flex flex-col gap-1'> 
                        <h1 className=''> Numéro téléphone</h1>
                        <input className='rounded-full px-5  border-2 border-lightgris bg-gray-100 text-textgrisfoncé' type="text" value={employé.PhoneNumber}/>
                </div>
                <div className=' flex flex-col gap-1'> 
                        <h1 className=''> Commune</h1>
                        <input className='rounded-full px-5  border-2 border-lightgris bg-gray-100 text-textgrisfoncé' type="text" value={employé.Commune}/>
                </div>
                <div className=' flex flex-col gap-1'> 
                        <h1 className=''> Code postal</h1>
                        <input className='rounded-full px-5  border-2 border-lightgris bg-gray-100 text-textgrisfoncé' type="text" value={employé.Codepostal} />
                </div>

          </div>


        </div>
     
      
        
        </div>

      );
}
 
export default Compte2;