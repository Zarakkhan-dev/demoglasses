import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import axios from 'axios';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
export default function App() {
  const [UserData, updateData] = useState([]);
  useEffect(() => {
    async function Getresponse() {
      const response = await axios.get("api/Imagehandler");

      if (response) {
        console.log(response.data.response);

        const UserData = response.data.response;
        updateData(() => {
          return response.data.response;
        });
      } else {
        console.log("data not found");
      }
    }
    Getresponse();

    console.log(UserData);
  }, []);

  return (
    <>
      <Swiper
        className="mySwiper"
      >
 {UserData.map((items, index) => {
        return (
          <div key={index}>
            <SwiperSlide>
            <Image
              src={items.imageaddress}
              alt="image"
              width={400}
              height={400}
              className='mt-[1vh]'
            />
            </SwiperSlide>
          </div>
        );
      })}
     
       
      </Swiper>
    </>
  );
}
