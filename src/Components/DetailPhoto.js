import { collection, doc, getDoc } from "firebase/firestore";
import img1 from "../Images/pics/Tipaza_map.png"
import { useEffect, useState } from "react";
import { db } from "../config/firebase";

const DetailPhoto= () => {
    const [Photo,setPhoto] = useState([]) ;
    const PhotoCollectionRef = doc(db,"Carte","NcViEpWvQYl9N9lN3ZQN","Lieu","g9K5IqU5s0K7MWCBwr5P","Photos","aIREQzYBY3rDdnEu1YOW") ;
        useEffect(()=>{  
      const getPhoto =async ()=>{
       try{
          const data = await getDoc(PhotoCollectionRef) ;
          const filteredData = data.data()
         //  console.log(filteredData.Nom) ;
          setPhoto(filteredData) ;
        
       }catch(err){
         console.error(err) ;
       }
      }
      getPhoto() ;
    },[]);
    
  
        return (
         
        
      
        
            <div className='flex flex-col shadow-2xl rounded-3xl mr-8  '>
            <img  className ='w-[90%] h-60 my-2 mx-5 ' src={Photo.Url}/>
            <div className='mx-5'>
            <h1 className='text-textgrisfoncé text-sm'>{Photo.Titre}</h1>
            <h1 className='text-textgrisfoncé text-sm'>{Photo.Taille}</h1>
            </div>
            <h1 className='text-xl mt-3 mx-5'>Information</h1>
            <div className='flex flex-col gap-3 my-3 m-5'>
              
            <div className='flex flex-row rounded-full w-96 bg-textgrisfoncé bg-opacity-5 justify-between px-3 py-2'> <div>Titre</div><div>{Photo.Titre}</div></div>
            <div className='flex flex-row rounded-full w-96 bg-textgrisfoncé bg-opacity-5 justify-between px-3 py-2'> <div>Taille</div><div>{Photo.Taille}</div></div>
            <div className='flex flex-row rounded-full w-96 bg-textgrisfoncé bg-opacity-5 justify-between px-3 py-2'> <div>Format</div><div>{Photo.Format}</div></div>
            <div className='flex flex-row rounded-full w-96 bg-textgrisfoncé bg-opacity-5 justify-between px-3 py-2'> <div>Dimensions</div><div>{Photo.Dimensions}</div></div> 
            
            </div>
            </div>

      );
}
 
export default DetailPhoto;