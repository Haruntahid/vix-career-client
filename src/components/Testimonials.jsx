import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaStar } from "react-icons/fa6";

function Testimonials() {
  return (
    <div>
      <div className="mt-14 lg:mt-28 container mx-auto">
        <h1 className="text-2xl font-semibold text-center text-txt-color capitalize lg:text-4xl ">
          What <span className="text-btn-color">Our Clients</span> Are Saying
        </h1>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
          style={{ zIndex: "-1" }}
        >
          <SwiperSlide>
            <section className="p-6">
              <div className="container mx-auto">
                <div className="flex flex-col items-center w-full p-6 space-y-8 rounded-md lg:h-full lg:p-8 bg-bg-color text-txt-color">
                  <img
                    src="https://lh3.googleusercontent.com/a/ACg8ocJr-PUA6ESvMGAHH-Q3ZZAgDgOzSxOn6gKTsACTXMXEJ_MFp-Dvhw=s96-c"
                    alt=""
                    className="w-20 h-20 rounded-full bg-gray-500"
                  />
                  <blockquote className="max-w-lg text-lg italic font-medium text-center">
                    VixCareer helped me find a job within two weeks! The process
                    was smooth and straightforward. I highly recommend this
                    platform to anyone looking for a job.!
                  </blockquote>
                  <div className="flex items-center gap-1">
                    <FaStar size={22} className="text-btn-color" />
                    <FaStar size={22} className="text-btn-color" />
                    <FaStar size={22} className="text-btn-color" />
                    <FaStar size={22} className="text-btn-color" />
                    <FaStar size={22} className="text-btn-color" />
                  </div>
                  <div className="text-center text-gray-700">
                    <p>Harun Tahid</p>
                    <p>CEO of Company Vix Tech</p>
                  </div>
                </div>
              </div>
            </section>
          </SwiperSlide>
          <SwiperSlide>
            <section className="p-6">
              <div className="container mx-auto">
                <div className="flex flex-col items-center w-full p-6 space-y-8 rounded-md lg:h-full lg:p-8 bg-bg-color text-txt-color">
                  <img
                    src="https://lh3.googleusercontent.com/a/ACg8ocLrLWXv68-baQS9BdrCgBPVtDq3BAkNCRIvQK0dXnGsVG3Oimk=s96-c"
                    alt=""
                    className="w-20 h-20 rounded-full bg-gray-500"
                  />
                  <blockquote className="max-w-lg text-lg italic font-medium text-center">
                    The job alerts feature is a game-changer. I was notified
                    about a perfect job opportunity that I would have otherwise
                    missed. Thank you, VixCareer!!
                  </blockquote>
                  <div className="flex items-center gap-1">
                    <FaStar size={22} className="text-btn-color" />
                    <FaStar size={22} className="text-btn-color" />
                    <FaStar size={22} className="text-btn-color" />
                    <FaStar size={22} className="text-btn-color" />
                  </div>
                  <div className="text-center text-gray-700">
                    <p>Hassnin Rahi</p>
                    <p>CTO of Company Tech Giant</p>
                  </div>
                </div>
              </div>
            </section>
          </SwiperSlide>
          <SwiperSlide>
            <section className="p-6">
              <div className="container mx-auto">
                <div className="flex flex-col items-center w-full p-6 space-y-8 rounded-md lg:h-full lg:p-8 bg-bg-color text-txt-color">
                  <img
                    src="https://source.unsplash.com/random/100x100?4"
                    alt=""
                    className="w-20 h-20 rounded-full bg-gray-500"
                  />
                  <blockquote className="max-w-lg text-lg italic font-medium text-center">
                    As an employer, I found the talent I was looking for within
                    days. The process of posting a job and managing applications
                    was seamless.!
                  </blockquote>
                  <div className="flex items-center gap-1">
                    <FaStar size={22} className="text-btn-color" />
                    <FaStar size={22} className="text-btn-color" />
                    <FaStar size={22} className="text-btn-color" />
                    <FaStar size={22} className="text-btn-color" />
                    <FaStar size={22} className="text-btn-color" />
                  </div>
                  <div className="text-center text-gray-700">
                    <p>Leroy Jenkins</p>
                    <p>Founder Job Talent</p>
                  </div>
                </div>
              </div>
            </section>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Testimonials;
