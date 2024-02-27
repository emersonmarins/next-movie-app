"use client"
import React, { useRef, useState } from 'react';
// import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import ImageCarousel from '../elements/imageCarouselPost';
import { FaPlay } from "react-icons/fa"
import { Filmes } from '@/db/db';

import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';
import { Pagination, Autoplay } from 'swiper/modules';



type UpdateStateFilme = (infoFilme: object) => void;

interface CarouselInfoProducts {
  infoFilme: UpdateStateFilme;
}



interface Props {
  updateState: (newState: boolean) => void;
  insertInfoFilme: (key: object) => void;
}

const urlObject = [
  {
    url: "https://br.web.img3.acsta.net/pictures/16/09/28/18/45/072693.jpg"
  },
  {
    url: "https://image.tmdb.org/t/p/w185/AkWxiUsc32qJHLwt7vt5AvUFNlx.jpg"
  },
  {
    url: "https://br.web.img3.acsta.net/pictures/20/01/28/22/12/4169305.jpg"
  },
  {
    url: "https://image.tmdb.org/t/p/w185/xUvSeFhdsJbKFOaHnB9TeTZpJKs.jpg"
  },
  {
    url: 	"https://image.tmdb.org/t/p/w185/itYONYDHpJqTuu8BCXAtHxgpglq.jpg"
  },
  {
    url: "https://br.web.img2.acsta.net/c_310_420/pictures/22/04/15/22/05/1348210.jpg"
  },
  {
    url: "https://br.web.img3.acsta.net/c_310_420/pictures/23/05/22/21/44/5814907.jpg"
  },
  {
    url: "https://br.web.img2.acsta.net/c_310_420/pictures/22/04/15/22/05/1348210.jpg"
  }
]



export default function CarouselPostInsta({ updateState, insertInfoFilme}: Props) {
  const handleClick = (value: boolean) => {
    updateState(value) ;
  }
  const insertInfoClick = (value: object) => {
    insertInfoFilme(value) ;
  }
  const filterFilme = (url: string | undefined) => {
    Filmes.forEach(element => {
      if(url === element['url-img']) {
        insertInfoClick(element)
        handleClick(true)
      }
    });
  }
  
  return (
    <div className='h-auto pb-0 pt-0 w-full flex-grow max-lg:w-full relative' id='app'>
      <Swiper
        effect={'slide'}
        grabCursor={true}
        slidesPerView={4}
        spaceBetween={20}
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={true}
        modules={[ Pagination, Autoplay ]}
        className="mySwiper"
    >
        {urlObject.map((slideContent, index) => (
          <SwiperSlide 
            key={slideContent.url} 
            virtualIndex={index} 
            data-url-info={slideContent.url} 
            onClick={(e) => {filterFilme(e.currentTarget.dataset.urlInfo)}}
            className='shadow bg-red-400 h-[calc(100vw_*_0.5)] object-contain relative'
          >
            <ImageCarousel options={{ src: slideContent.url, width: '100%', height: '100%' }} />
            <div className='flex items-center absolute top-0 w-full h-full z-30 bg-[rgba(17,_17,_17,_0.380)]'>
              <FaPlay className='w-20 h-auto mx-auto text-zinc-50 shadow-2xl animate-pulse cursor-pointer' />
            </div>
          </SwiperSlide>
        ))}
      </Swiper >
    </div >
  );

}