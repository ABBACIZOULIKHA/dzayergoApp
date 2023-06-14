import Header from '../Components/header'
import Sidebar from '../Components/Sidebar';

const GestionAvis = () => {
    return (
        <div className='h-screen w-full'>
 <Sidebar></Sidebar>
<div className="w-[78%] h-screen ml-[22%]">
             <Header props={'Gestion des Avis'}/>
        
    </div> 
        </div>
        );
}
 
export default GestionAvis;