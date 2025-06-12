import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import AOS from "aos";
import "aos/dist/aos.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Img1 from "../../assets/Img/10009.jpg";
import Img2 from "../../assets/Img/10011.jpg";
import Img3 from "../../assets/Img/10013.jpg";
import Img4 from "../../assets/Img/10014.jpg";
import Img5 from "../../assets/Img/10018.jpg";
import Img6 from "../../assets/Img/10035.jpg";
import Img7 from "../../assets/Img/10037.jpg";
import Img8 from "../../assets/Img/10041.jpg";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const Bannar = () => {
  return (
    <Swiper
      spaceBetween={30}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper mt-24"
    >
      <SwiperSlide>
        <div>
          <div
            className="hero min-h-[500px] ms:min-h-[300px]"
            style={{
              backgroundImage: `url(${Img1})`,
            }}
          >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-md">
                <h1 className="mb-5 text-3xl font-bold text-[#4c4646e2]">
                  welcome To CyberZeist
                </h1>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <div
            className="hero min-h-[500px] ms:min-h-[300px]"
            style={{
              backgroundImage: `url(${Img2})`,
            }}
          >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-md">
                <h1 className="mb-5 text-3xl font-bold text-[#4c4646e2]">
                  welcome To CyberZeist
                </h1>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <div
            className="hero min-h-[500px] ms:min-h-[300px]"
            style={{
              backgroundImage: `url(${Img3})`,
            }}
          >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-md">
                <h1 className="mb-5 text-3xl font-bold text-[#4c4646e2]">
                  welcome To CyberZeist
                </h1>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <div
            className="hero min-h-[500px] ms:min-h-[300px]"
            style={{
              backgroundImage: `url(${Img4})`,
            }}
          >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-md">
                <h1 className="mb-5 text-3xl font-bold text-[#4c4646e2]">
                  welcome To CyberZeist
                </h1>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <div
            className="hero min-h-[500px] ms:min-h-[300px]"
            style={{
              backgroundImage: `url(${Img5})`,
            }}
          >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-md">
                <h1 className="mb-5 text-3xl font-bold text-[#4c4646e2]">
                  welcome To CyberZeist
                </h1>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <div
            className="hero min-h-[500px] ms:min-h-[300px]"
            style={{
              backgroundImage: `url(${Img6})`,
            }}
          >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-md">
                <h1 className="mb-5 text-3xl font-bold text-[#4c4646e2]">
                  welcome To CyberZeist
                </h1>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <div
            className="hero min-h-[500px] ms:min-h-[300px]"
            style={{
              backgroundImage: `url(${Img7})`,
            }}
          >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-md">
                <h1 className="mb-5 text-3xl font-bold text-[#4c4646e2]">
                  welcome To CyberZeist
                </h1>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <div
            className="hero min-h-[500px]"
            style={{
              backgroundImage: `url(${Img8})`,
            }}
          >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-md">
                <h1 className="mb-5 text-3xl font-bold text-[#4c4646e2]">
                  welcome To CyberZeist
                </h1>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Bannar;
