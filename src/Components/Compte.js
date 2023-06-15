const Compte = () => {
    return (
         
        <div className='flex flex-col space-y-4 justify-center p-7 '>
        <div className="flex flex-row gap-8">
          <div className="flex flex-col  gap-4">
               <div className=' flex flex-col gap-1'> 
                  <h1 className=''> Nom</h1>
                  <input className='rounded-full px-5  border-2 border-lightgris bg-gray-100' type="text" />
               </div>
               <div className=' flex flex-col gap-1'> 
                  <h1 className=''> Email</h1>
                  <input className='rounded-full px-5  border-2 border-lightgris bg-gray-100' type="text" />
               </div>
               <div className=' flex flex-col gap-1'> 
                  <h1 className=''> Wilaya</h1>
                  <input className='rounded-full px-5  border-2 border-lightgris bg-gray-100' type="text" />
               </div>
               <div className=' flex flex-col gap-1'> 
                  <h1 className=''> Adresse</h1>
                  <input className='rounded-full px-5  border-2 border-lightgris bg-gray-100' type="text" />
               </div>
          </div>


          <div className="flex flex-col gap-4">
                <div className=' flex flex-col gap-1'> 
                        <h1 className=''> Prénom</h1>
                        <input className='rounded-full px-5  border-2 border-lightgris bg-gray-100' type="text" />
                </div>
                <div className=' flex flex-col gap-1'> 
                        <h1 className=''> Numéro téléphone</h1>
                        <input className='rounded-full px-5  border-2 border-lightgris bg-gray-100' type="text" />
                </div>
                <div className=' flex flex-col gap-1'> 
                        <h1 className=''> Commune</h1>
                        <input className='rounded-full px-5  border-2 border-lightgris bg-gray-100' type="text" />
                </div>
                <div className=' flex flex-col gap-1'> 
                        <h1 className=''> Code postal</h1>
                        <input className='rounded-full px-5  border-2 border-lightgris bg-gray-100' type="text" />
                </div>

          </div>


        </div>
     
        <button className=' mr-40 ml-10 py-2 my-14 shadow-md w-44 text-white rounded-full bg-rose'>Modifier</button> 
     
        
        </div>

      );
}
 
export default Compte;