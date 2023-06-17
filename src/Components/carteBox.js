import { doc, getDoc } from "firebase/firestore";
import img1 from "../Images/Icons/starcolor.png"
import img2 from "../Images/Icons/starnoncolor.png"
import { db } from "../config/firebase";
import { useEffect, useState } from "react";
const CarteBox = (props) => {

    const [Carte,setCarte] = useState([]) ;
    const CarteCollectionRef = doc(db,"Carte",props.id) ;
        useEffect(()=>{  
      const getCarte =async ()=>{
       try{
          const data = await getDoc(CarteCollectionRef) ;
          const filteredData = data.data()
         //  console.log(filteredData.Nom) ;
          setCarte(filteredData) ;
        
       }catch(err){
         console.error(err) ;
       }
      }
      getCarte() ;
    },[]);
    

    return ( 
     <div className='flex flex-col w-64 h-56 pb-8 rounded-lg shadow-md'>
          <img  className=' w-64 h-36 rounded-t-lg' src={Carte.Photo} alt=""/>
          <h1 className="mt-3 ml-2 text-textgrisfoncé text-xl ">{Carte.Wilaya}</h1> 
          <div className="ml-2 flex flex-row mt-5">
            <h1 className="text-textgris">{Carte.Date}</h1>
            <div className="flex flex-row">
                <img className='w-5 h-5' src={img1}/>
                <img className='w-5 h-5' src={img1}/>
                <img className='w-5 h-5' src={img1}/>
                <img className='mt-1 w-3 h-4' src={img2}/>
                <img className='mt-1 w-3 h-4' src={img2}/>
            </div>
          </div>
    </div> );
}
 
export default CarteBox;