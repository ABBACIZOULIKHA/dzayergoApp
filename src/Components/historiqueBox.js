import React from 'react'


const historiqueBox = (props) => {
  const tache=props.tache


  return (  <div className='flex flex-col w-60 px-2 py-8 rounded-lg shadow-md'>
  <h1> {tache.tach} </h1>
  <p className='text-[0.7rem] text-slate-500'>savoir plus..</p>
   <div className='flex items-center ml-2 mt-3'> 
    <img className=' w-10 h-10 rounded-full' src={tache.img} alt=""/>
    <h1 className='ml-2'> {tache.personne} </h1>
    {  console.log(tache)}
    </div>
  <p className='text-[0.6rem] text-slate-500 mt-8 ml-32'>fait il ya {tache.duree} heure </p>
</div> );
}
 
export default historiqueBox ;