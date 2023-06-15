import Header from '../Components/header' 
import Sidebar from '../Components/Sidebar';
import user from "../Images/Icons/dash_user.png"
import emp from "../Images/Icons/dash_employe.png"
import map from "../Images/Icons/dash_map.png"
import skip from "../Images/Icons/stat_skip.png"
import skip2 from "../Images/Icons/stat_skip_2.png"
import nature from '../Images/Icons/nature.png'

import muse from "../Images/Icons/muse.png"
import monument from "../Images/Icons/monument.png"

const Statistics = () => {
    return ( 
    <div className='w-full h-screen '>
        <Sidebar></Sidebar>

        <div className="w-[78%] h-screen ml-[22%]  flex flex-col space-y-4 ">
            <Header props={'Statistiques'}/>
                  
                   <div className='flex flex-row justify-center items-center space-x-4 mx-1 h-[6%] text-white '>
                    <div className='flex flex-row justify-center items-center space-x-3 bg-tchini w-[30%] h-14 py-2 rounded-full shadow-xl'> 
                                <img className='w-10' src={user} alt="" />
                                <p> Utilisateurs</p>
                                <p> a1836558 </p>
                    </div>


                    <div className='flex flex-row justify-center items-center space-x-3 bg-rose w-[30%] h-14 py-2 rounded-full shadow-xl '> 
                            <img className='w-9' src={map} alt="" />
                            <p> Cartes </p>
                            <p> a1836558 </p>
                    </div>


                    <div className='flex flex-row justify-center items-center space-x-4  bg-beige w-[30%] h-14 py-2 rounded-full shadow-xl'> 
                        <img className='w-7' src={emp} alt="" />
                        <p> Employés </p>
                        <p> a1836558 </p>
                    </div>

                    </div>




                    <div className='flex flex-row space-x-5 py-1 mx-9 h-[40%]  '>
                    <div className=' mounhana w-[65%] flex flex-col p-2 px-4 h-full bg-white rounded-xl drop-shadow-lg border-2 border-opacity-30  border-lightgris'>
                                    <div className='flex flex-row justify-between items-center '>
                                        <div className='flex flex-col '>
                                            <p className='text-md font-bold'> nombre des utilisateurs  </p>
                                            <p className='text-[0.6rem] font-semibold text-textgris '> A partir de 15 janvier 2012 </p>
                                        </div>
                               
                                    <p className='text-[0.6rem]  font-bold pr-5 '> --- cette année --- l'année dernier </p>

                                    </div>
                                    <div className='mounhana '>

                                    </div>

                            </div>

                            <div className='w-[35%] flex flex-col h-full justify-end  bg-white rounded-xl drop-shadow-md border-2 border-opacity-30  border-lightgris '  >
                                 <p className='text-sm font-semibold  px-2'> les wilayas les plus populaire <br /> dans chaque theme </p>
                                 <div className=' h-32 bg-tchini '>
                                            <p> here goes some graphs</p>
                                </div>


                            <div className=' sghir flex flex-row justify-center items-center space-x-5  w-full rounded-b-lg h-8 bg-rose'>
                                    <img  className="w-4 h-4"  src={skip2} alt="" />  
                                    
                                    <img  className="w-8 h-5" src={nature} alt="" />
                                    <p className='text-sm font-semibold text-white'> nature </p>
                                    <img  className="w-4 h-4"  src={skip} alt="" />

                             </div>



                            </div>
                    </div>



                    <div className='flex flex-row space-x-5  mx-9 h-[40%] '>
                            <div className=' daira w-[65%] flex flex-col p-2 px-4 h-full bg-white rounded-xl drop-shadow-lg border-2 border-opacity-30  border-lightgris'>
                                 
                                 <div className='flex flex-row h-full justify-between  items-start '>
                                       <div className='flex flex-col '>
                                            <p className='text-md font-bold'> nombre des utilisateurs  </p>
                                            <p className='text-[0.6rem] font-semibold text-textgris '> A partir de 15 janvier 2012 </p>

                                            hii
                                            hii
                                            hii 
                                        </div>

                                        <div className='w-[50%] h-full  flex justify-center items-center  bg-beige'>
                                            <div className='w-10 h-10 rounded-full bg-violet'>
                                               
                                                </div> 
                                        </div>
                                 </div>

                            </div>


                             <div className='w-[35%] flex flex-col h-full justify-end  bg-white rounded-xl drop-shadow-md border-2 border-opacity-30  border-lightgris '  >
                                 <p className='text-sm '> les wilayas les plus populaire <br /> dans chaque theme </p>
                                 <div className=' h-32 bg-tchini '>
                                  <p> here goes some graphs</p>
                             </div>


                            <div className=' flex flex-row justify-center items-center space-x-5  w-full rounded-b-lg h-8 bg-rose'>
                                    <img  className="w-4 h-4"  src={skip2} alt="" />     
                                    <img  className="w-8 h-5" src={muse} alt="" />
                                    <p className='text-sm font-semibold text-white'> musées </p>
                                    <img  className="w-4 h-4"  src={skip} alt="" /> 
                             </div>



                            </div>
                    </div>

                 
                   

            <div className="">
            </div>
             
     </div>
    </div>
     );
}
 
export default Statistics;