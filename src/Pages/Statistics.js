import Header from '../Components/header' 
import Sidebar from '../Components/Sidebar';

const Statistics = () => {
    return ( 
    <div className='w-full h-screen '>
        <Sidebar></Sidebar>
        <div className="w-[78%] h-screen ml-[22%]  flex flex-col ">
            <Header props={'Statistiques'}/>

            <div className="">
            </div>
             
     </div>
    </div>
     );
}
 
export default Statistics;