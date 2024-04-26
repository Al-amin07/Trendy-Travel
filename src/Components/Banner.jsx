import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

 import "swiper/css/navigation";
 import "swiper/css/pagination";
 import "swiper/css/scrollbar";
 import 'swiper/css/effect-fade';

import { EffectFade } from 'swiper/modules';

const Banner = () => {
  return (
    <Swiper
      className="h-[300px] md:h-[460px] lg:h-[550px]  mb-24  rounded-2xl z-[1]"
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
      spaceBetween={50}
      slidesPerView={1}
      effect="fade"
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}

      
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}
    >
     
      <SwiperSlide style={{
        backgroundImage: "url('/one.jpg')"
      }} className="bg-center bg-no-repeat bg-cover py-52">
        {/* <img src="/five.webp" alt="" className="w-full" /> */}
        <h2 className="text-5xl text-center text-white font-semibold mb-4">Discover Your Next Adventure</h2>
        <p className="w-1/2 mx-auto text-[#E7EFF2] ">Ready to turn your travel dreams into reality? With just a few clicks, you can begin your journey towards new horizons and unforgettable experiences</p>
      </SwiperSlide>
      <SwiperSlide style={{
        backgroundImage: "url('/six.jpg')"
      }} className="bg-center bg-no-repeat bg-cover py-52 ">
        {/* <img src="/five.webp" alt="" className="w-full" /> */}
        <h2 className="text-5xl text-center text-white font-semibold mb-4">Discover Your Next Adventure</h2>
        <p className="w-1/2 mx-auto text-[#E7EFF2] ">Ready to turn your travel dreams into reality? With just a few clicks, you can begin your journey towards new horizons and unforgettable experiences</p>
      </SwiperSlide>
      <SwiperSlide style={{
        backgroundImage: "url('/five.webp')"
      }} className="bg-center bg-no-repeat bg-cover py-52">
        {/* <img src="/five.webp" alt="" className="w-full" /> */}
        <h2 className="text-5xl text-center text-white font-semibold mb-4">Discover Your Next Adventure</h2>
        <p className="w-1/2 mx-auto text-white ">Ready to turn your travel dreams into reality? With just a few clicks, you can begin your journey towards new horizons and unforgettable experiences</p>
      </SwiperSlide>
    
      
      ...
    </Swiper>
  );
};

export default Banner;
