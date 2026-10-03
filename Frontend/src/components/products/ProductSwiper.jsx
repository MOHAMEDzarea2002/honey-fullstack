// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';

import { useDispatch, useSelector } from 'react-redux';
import CardProduct from '../products/CardProduct';
import {fetchHomeProducts} from '../../features/products/productThunk'
import { useEffect } from 'react';
export default function ProductSwiper() {
  const dispatch = useDispatch()
  const homeProducts = useSelector((state) => state.product.homeProducts);

useEffect(() => {
  if (homeProducts.length > 0) {
    return;
  }
  dispatch(fetchHomeProducts({ limit: 5 }));
}, [dispatch, homeProducts]);
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      breakpoints={{
        576: {
          slidesPerView: 1,
          spaceBetween: 5,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="mySwiper"
    >
      {homeProducts
        ?.map((product, index) => (
          <SwiperSlide key={index} className="mb-9">
            <CardProduct product={product} />
          </SwiperSlide>
        ))
        .splice(0, 5)}
    </Swiper>
  );
}
