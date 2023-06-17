import logo from "../Images/Icons/logo_long.png"
import { Link } from 'react-router-dom';
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import React, { useState } from "react";
import img1 from "../Images/Icons/research_icon.png"

const containerStyle = {
  width: "100%",
  height: "86%",
};

const center = {
  lat:  28.033886,
  lng: 1.659626,
};


function AjouterCarte() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyABIm5uNLd57S9l_MRbwpEIl6hXI8lzjMg",
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  const position = {
    lat: 28.033886,
    lng: 1.659626,
  };
  const [coord, setCoord] = useState({ lat: center.lat, lng: center.lng });
  
  const[SideDiv, setSidediv] = useState(0) ; 

  const [categorie, setCategorie] = useState('') ; 
  const categories =
  [
    "Musée" , "Parc" , "Monument" 
  ]

  const [theme, setTheme] = useState('') ; 

  const themes =
  [
    "Histoir" , "Loisir" , "Nature" 
  ]
  const [horaire, setHoraire] = useState('') ; 
  const [Description, setDescription] = useState('') ; 
  const [transport, setTransport] = useState('') ; 
  const [prix, setPrix] = useState('') ;
  
  const [listpoints , setListPoint] = useState(
    [ 
      {lat : 1 , 
        lng : 1 
      
      }
    ]
  )
  
return isLoaded ? (
    <div className=" w-full h-screen">
    <div className="h-[14%] bg-violet w-full flex flex-row justify-between items-center py-3 px-2">
          <Link to='/'>  <img src={logo} className=" ml-10  w-46 h-16" alt="" /> </Link> 

          <p className=" text-white font-bold pl-10" > Nom de la carte </p>
          <div className="flex flex-row justify-between space-x-5 ">
          <button onClick={()=>{setSidediv(2)}} className="bg-tchini hover:scale-110 text-white hover:font-semibold px-4 py-3 rounded-full "> Liste points interets  </button>
          <button onClick={()=>{setSidediv(1)}} className="bg-beige hover:scale-110 text-white hover:font-semibold  px-4 py-3 rounded-full "> Ajouter un point  </button>

          </div>
         

    </div>


       <div id="Rechercher" className=" absolute z-10 flex justify-center items-center space-x-5 w-[40%] h-[6%] ml-[50%] mt-7  bg-white rounded-full drop-shadow-2xl">
                 <img className="w-5 h-5 hover:cursor-pointer" src={img1} alt=""/>
                   <input className="w-[80%]" type="text" />

        </div>
        
        <div className=" absolute z-10 flex flex-col justify-center items-center p-4 w-[11%] h-[11%] mt-[34%] ml-[84%] bg-rose rounded-lg drop-shadow-lg  ">
        <p className="text-xs text-white  ">latitude: {coord.lat} </p>
        <p className="text-xs text-white "> longtitude: {coord.lng}</p>

        </div>


       { SideDiv === 1 ?
       
       <div id="AjouterNvPoint" className=" absolute z-10 w-80 h-[80%] ml-5 mt-7  bg-white rounded-xl drop-shadow-2xl">
            <div className="bg-rose w-full  h-10 rounded-t-xl flex justify-center items-center ">
              <p className="text-white text-lg ">Ajouter un nouveau point </p>
        </div>
        
            <div className="flex flex-col justify-center items-center space-y-2 mt-3">
                
                    <div className="flex flex-row justify-between items-center space-x-7 w-[90%] ">
                                 <label className="text-sm font-semibold "> categorie</label>
                                    <input 
                                    list="categories"
                                    name='categorie'
                                    required 
                                    placeholder='categorie'
                                    value={categorie}
                                    className="w-[90%] h-[30px]  text-[0.7rem]  rounded-full shadow-md py-1 px-3"
                                    onChange ={(e)=> setCategorie(e.target.value)}  
                                    />
                                   
                                   <datalist id='categories'>
                                     {categories.map((categorie) =>(
                                                <option value={categorie} className='w-full'/>
                                     ))}
                                   </datalist>
                    </div>
                
                    <div className="flex flex-row justify-between items-center space-x-12 w-[90%] ">
                                 <label className="text-sm font-semibold "> theme </label>
                                    <input 
                                    list="themes"
                                    name='theme'
                                    required 
                                    placeholder='theme'
                                    value={theme}
                                    className="w-[90%] h-[30px]  text-[0.7rem]  rounded-full  shadow-md py-1 px-3"
                                    onChange ={(e)=> setTheme(e.target.value)}  
                                    />
                                   
                                   <datalist id='themes'>
                                     {themes.map((theme) =>(
                                                <option value={theme} className='w-full'/>
                                     ))}
                                   </datalist>
                    </div>
                
                    <div className="flex flex-row justify-between items-center space-x-3 w-[90%] ">
                                 <label className="text-sm font-semibold "> horaire d'acces </label>
                                    <input 
                                   name='horaire'
                                    required 
                                    placeholder='9h'
                                    value={horaire}
                                    className="w-[55%] h-[30px] text-[0.7rem]  rounded-full shadow-md py-1 px-3"
                                    onChange ={(e)=> setHoraire(e.target.value)}  
                                    />
                                
                    </div>
                    <div className="flex flex-col justify-center items-left  w-[90%] ">
                                 <label className="text-sm font-semibold "> Description </label>
                                    <input 
                                   name='Description'
                                    required 
                                    placeholder='Ecrivez votre description ici '
                                    value={Description}
                                    className="w-full h-[50px] text-[0.7rem]  rounded-2xl shadow-md py-1 px-3"
                                    onChange ={(e)=> setDescription(e.target.value)}  
                                    />
                                
                    </div>

                    <div className="flex flex-col justify-center items-left  w-[90%] ">
                                 <label className="text-sm font-semibold "> Ressources ( photos / videos) </label>
                                    <input 
                                   name='horaire'
                                    required 
                                    placeholder='Ecrivez votre description ici '
                                    value={horaire}
                                    className="w-full h-[40px] text-[0.7rem]  rounded-full shadow-md py-1 px-3 border-dashed border-2 border-violet"
                                    onChange ={(e)=> setHoraire(e.target.value)}  
                                    />
                                
                    </div>

                    <div className='flex flex-col justify-center items-left  w-[90%]'>
            <p className='text-sm font-semibold '>Transport</p>
            <div className='flex flex-row items-center gap-2 text-[10px] '>
              <input  required  type="radio" name='transport' value='Metro' id='category1' onChange ={(e)=> setTransport(e.target.value)}  />
              <label   for='category1'>Metro</label>
              <input  required  type="radio" name='transport' value='Tramway' id='category2'onChange ={(e)=> setTransport(e.target.value)}  />
              <label  for='category2'>Tramway</label>
              <input required  type="radio" name='transport' value='Taxi' id='category3' onChange ={(e)=> setTransport(e.target.value)}  />
              <label   for='category3'>Taxi</label>
              <input  required  type="radio" name='transport' value='Bus' id='category4' onChange ={(e)=> setTransport(e.target.value)}  />
              <label   for='category4'>Bus</label>
              <input  required  type="radio" name='transport' value='Train' id='category5' onChange ={(e)=> setTransport(e.target.value)}  />
              <label   for='category4'>Train</label>
            </div>
                    </div>

                    <div className="flex flex-row justify-between items-center space-x-3 w-[90%] ">
                                 <label className="text-sm font-semibold "> Prix </label>
                                    <input 
                                   name='prix'
                                    required 
                                    placeholder='9h'
                                    value={prix}
                                    className="w-[55%] h-[30px] text-[0.7rem]  rounded-full shadow-md py-1 px-3"
                                    onChange ={(e)=> setPrix(e.target.value)}  
                                    />
                                
                    </div>

                    <button className="text-white bg-beige px-4 py-2 rounded-full text-xs mr-28"> Ajouter un evenement </button>
                    <p className="text-textgris text-xs mr-20"> Veuillez remplir les informations  </p>
                   <div className="flex flex-row space-x-2 w-[80%] justify-between items-left">
                   <button onClick={()=>(setSidediv(0))} className="text-white bg-tchini px-10 py-2 rounded-full text-xs"> Annuler  </button>
                   <button className="text-white bg-rose px-8 py-2 rounded-full text-xs"> Enregistrer </button>
                   </div>
              </div>


        </div> 

        :SideDiv === 2 ? 
        <div id="Listpoints" className=" absolute z-10 w-80 h-[80%] ml-5 mt-7  bg-white rounded-xl drop-shadow-2xl">
          <div className="bg-rose w-full h-10 rounded-t-xl flex justify-center items-center ">
           <p className="text-white text-lg "> Liste points interets </p>

           </div>
         </div> 
        
        : <></>  }



      <GoogleMap
        mapContainerStyle={containerStyle}
        onClick={(e) => {
          setCoord({ lat: e.latLng.lat(), lng: e.latLng.lng() });
          
        }}
        center={center}
        zoom={100}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {/* Add the Marker component */}
        <Marker
          icon={{
            path: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
            scale: 100,
            fillColor: "yellow",
            fillOpacity: 0.9,
            strokeColor: "gold",
            strokeWeight: 2,
          }}
          position={position}
        />
        {/* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
    </div>
  ) : (
    <>
      <h1> Une erreur c'est produite </h1>
    </>
  );
}

export default AjouterCarte;
