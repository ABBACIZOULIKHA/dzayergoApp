import img1 from "../Images/Icons/starcolor.png"
import img2 from "../Images/Icons/starnoncolor.png"
const CarteBox = (props) => {
    const carte = props.carte 
    return ( 
     <div className='flex flex-col w-64 h-56 pb-8 rounded-lg shadow-md'>
          <img  className=' w-64 h-36 rounded-t-lg' src={carte.img} alt=""/>
          <h1 className="mt-3 ml-2 text-textgrisfoncé text-xl ">{carte.wilaya}</h1> 
          <div className="ml-2 flex flex-row mt-5">
            <h1 className="text-textgris">{carte.date}</h1>
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