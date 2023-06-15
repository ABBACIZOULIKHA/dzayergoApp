import Header from '../Components/header'
import Sidebar from '../Components/Sidebar';
import TableClient from "../Components/tableClient"
const GestionClients = () => {
    return (
        <div className='w-full h-screen '>
            <Sidebar></Sidebar>
            <div className="w-[78%] h-screen ml-[22%]">
         <Header props={'Gestion des Clients'}/>
         <TableClient/>
         </div>
        </div>
          );
}
 
export default GestionClients;