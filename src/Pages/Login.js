import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css"; 
import Maqam from "../Images/pics/maqam.jpg"
import sahara from "../Images/pics/sahara.jpg"
import masjid from "../Images/pics/masjid.jpg"


const Login = () => {
    return (
       <div className="w-full h-screen  bg-asfar pt-[4px] relative" >
        <div className='absolute z-10 flex flex-row  px-10 py-6' >
                
           
                <div className='w-72 h-96 rounded-xl bg-tchini'>
                        hiiii 
                </div>

        </div>

        <Swiper>
            <SwiperSlide> <img className='w-full h-screen'  src={sahara} alt="" /></SwiperSlide>
            <SwiperSlide> <img className='w-full h-screen'  src={masjid} alt="" /> </SwiperSlide>
            <SwiperSlide> <img className='w-full h-screen'  src={Maqam} alt="" /> </SwiperSlide>
        </Swiper>

    </div>);
}
 
export default Login;