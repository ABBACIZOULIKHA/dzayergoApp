import Header from '../Components/header'
import Sidebar from '../Components/Sidebar';
import TableEmployé from '../Components/tableEmployé';
const GestionEmploye = () => {
    return ( 
    <div className='h-screen w-full '>
<Sidebar></Sidebar>
<div className="w-[78%] h-screen ml-[22%]">
     <Header props={'Gestion des Employés'}/>
     <TableEmployé/>
    </div> 
    </div>
    );
}
 
export default GestionEmploye;