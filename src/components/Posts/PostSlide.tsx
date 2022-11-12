import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

interface PostSlideProps {
  width: string;
  height: string;
}

const PostSlide = ({ width, height }: PostSlideProps) => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      allowTouchMove={false}
      style={{
        width,
        height,
      }}
    >
      <SwiperSlide
        style={{
          width,
          height,
        }}
      >
        <div className="post-image">
          <img
            src="https://images.unsplash.com/photo-1661347333298-26846cec680b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt=""
            className="post-img"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide
        style={{
          width,
          height,
        }}
      >
        <div className="post-image">
          <img
            src="https://images.unsplash.com/photo-1667053508464-eb11b394df83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"
            alt=""
            className="post-img"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default PostSlide;
