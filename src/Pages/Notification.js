import Sidebar from '../Components/Sidebar';
import Header from '../Components/header' 

const Notification = () => {
    return ( 
        <div className='w-full h-screen '>
        <Sidebar></Sidebar>
        <div className="w-[78%] h-screen ml-[22%] bg-tchini">
          <Header props={"Notification"}></Header>
        </div> 
        </div>
      
     );
}
 
export default Notification;