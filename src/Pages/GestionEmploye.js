import Header from '../Components/header'
import Sidebar from '../Components/Sidebar';

const GestionEmploye = () => {
    return ( 
    <div className='h-screen w-full '>
<Sidebar></Sidebar>
<div className="w-[78%] h-screen ml-[22%]">
     <Header props={'Gestion des Employés'}/>
    </div> 
    </div>
    );
}
 
export default GestionEmploye;