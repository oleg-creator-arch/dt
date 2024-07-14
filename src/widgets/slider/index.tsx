import React, { MouseEvent, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { AiOutlineClose } from 'react-icons/ai';
import { GrNext, GrPrevious } from 'react-icons/gr';

import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import './styles.scss';

import { Scrollbar, Navigation, Controller, Mousewheel } from 'swiper/modules';
import { Button } from '@/shared/ui';
import cn from 'classnames';
import { url } from 'inspector';

interface ISwiperButtonProps {
  children: React.ReactNode;
  isActive?: boolean;
  length?: number;
  className?: string | string[];
}

interface ISwiperSlideToButtonProps extends ISwiperButtonProps {
  index: number;
}

const SwiperSlideToButton = ({ index, children }: ISwiperSlideToButtonProps) => {
  const swiper = useSwiper();
  return (
    <Button type={'outline'} onClick={() => swiper.slideTo(index)}>
      {children}
    </Button>
  );
};

const SwiperNextButton = ({ children, className, isActive }: ISwiperButtonProps) => {
  const swiper = useSwiper();
  console.log('isActive Nex', isActive);

  // const isActive = length === swiper.activeIndex ? false : true;
  return (
    <div
      className={cn('next-swiper', { active: isActive }, className)}
      onClick={() => swiper.slideNext()}
    >
      <Button type={'outline'}>{children}</Button>
    </div>
  );
};

const SwiperPrevButton = ({ children, className, isActive }: ISwiperButtonProps) => {
  const swiper = useSwiper();
  console.log('isActive prev', isActive);
  // console.log('swiper.activeIndex', swiper.activeIndex);
  // let isActive = 0 === swiper.activeIndex ? false : true;
  return (
    <div
      className={cn('prev-swiper', { active: isActive }, className)}
      onClick={() => swiper.slidePrev()}
    >
      <Button type={'outline'}>{children}</Button>
    </div>
  );
};

interface ISliderProps {
  urlPhotos: string[];
}

const Slider: React.FC<ISliderProps> = ({ urlPhotos }: ISliderProps) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string>('');
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [isActivePrevSwiper, setIsActivePrevSwiper] = useState<boolean>(false);
  const [isActiveNextSwiper, setIsActiveNextSwiper] = useState<boolean>(true);
  const [isActivePrev, setIsActivePrev] = useState<boolean>(false);
  const [isActiveNext, setIsActiveNext] = useState<boolean>(true);

  const handleImageClick = (image: string, index: number) => {
    console.log('set index', index);
    setSelectedIndex(index);
    if (index > 0) {
      setIsActivePrevSwiper(true);
      setIsActivePrev(true);
    }
    if (index <= 0) {
      setIsActivePrevSwiper(false);
      setIsActivePrev(false);
    }
    if (index > urlPhotos.length - 1) {
      setIsActiveNextSwiper(false);
      setIsActiveNext(false);
    }
    if (index <= urlPhotos.length) {
      setIsActiveNextSwiper(true);
      setIsActiveNext(true);
    }
    setSelectedImage(image);
    setIsFullscreen(true);
  };

  const NextImageClickSwiper = () => {
    if (selectedIndex + 1 < urlPhotos.length - 1) {
      if (selectedIndex + 1 > 0) setIsActivePrevSwiper(true);
      setIsActiveNextSwiper(true);
      setSelectedIndex(selectedIndex + 1);
    } else {
      setIsActiveNextSwiper(false);
      setIsActivePrevSwiper(true);
    }
  };
  const PrevImageClickSwiper = () => {
    if (selectedIndex > 0) {
      setIsActivePrevSwiper(true);
      if (selectedIndex === 0) setIsActivePrevSwiper(false);
      setSelectedIndex(selectedIndex - 1);
      console.log('prev2', isActivePrevSwiper);
    } else {
      setIsActivePrevSwiper(false);
      setIsActiveNextSwiper(true);
    }
  };

  const NextImageClick = () => {
    if (selectedIndex < urlPhotos.length) {
      setSelectedImage(urlPhotos[selectedIndex + 1]);
      if (selectedIndex + 1 > 0) setIsActivePrev(true);
      setIsActiveNext(true);
      setSelectedIndex(selectedIndex + 1);
    } else {
      setIsActiveNext(false);
      setIsActivePrev(true);
    }
  };
  const PrevImageClick = () => {
    console.log('selectedIndex', selectedIndex);

    if (selectedIndex > 0) {
      setSelectedImage(urlPhotos[selectedIndex - 1]);
      console.log('selectedIndex2', selectedIndex);
      if (selectedIndex - 1 === 0) setIsActivePrev(false);
      setSelectedIndex(selectedIndex - 1);
      console.log('prev2', isActivePrevSwiper);
    } else {
      setIsActivePrev(false);
      setIsActiveNext(true);
    }
  };

  const handleCloseFullscreen = () => {
    // setSelectedIndex(0);
    setIsFullscreen(false);
    setSelectedImage('');
  };
  return (
    <div className="swiper-container">
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={20}
        centeredSlides={true}
        centeredSlidesBounds={true}
        navigation={true}
        scrollbar={{
          hide: true,
        }}
        autoHeight={true}
        mousewheel={true}
        modules={[Scrollbar, Navigation, Controller, Mousewheel]}
        className="mySwiper"
      >
        <div className="image-grid">
          {urlPhotos.map((urlPhoto, i) => (
            <SwiperSlide key={uuidv4()}>
              <img
                key={uuidv4()}
                src={urlPhoto}
                alt={`photo ${i}`}
                onClick={() => handleImageClick(urlPhoto, i)}
                className="image-thumbnail"
              />
            </SwiperSlide>
          ))}
        </div>
        <div
          className={cn('fullscreen-overlay', { active: isFullscreen })}
          onClick={handleCloseFullscreen}
        >
          <div
            className={cn('fullscreen-container', { active: isFullscreen })}
            onClick={(e) => e.stopPropagation()}
          >
            <img src={selectedImage} alt="Fullscreen" className="fullscreen-image" />
            <Button type="outline" className="close-button" onClick={handleCloseFullscreen}>
              <AiOutlineClose color="white" />
            </Button>
          </div>
          <button
            className={cn('prev-button', { active: isActivePrev })}
            onClick={(e: MouseEvent<HTMLButtonElement>) => {
              e.stopPropagation();
              PrevImageClick();
            }}
          >
            <GrPrevious />
          </button>
          <button
            className={cn('next-button', { active: isActiveNext })}
            onClick={(e: MouseEvent<HTMLButtonElement>) => {
              e.stopPropagation();
              NextImageClick();
            }}
          >
            <GrNext />
          </button>
        </div>
        <div onClick={PrevImageClickSwiper}>
          <SwiperPrevButton isActive={isActivePrevSwiper}>
            <GrPrevious />
          </SwiperPrevButton>
        </div>
        <div onClick={NextImageClickSwiper}>
          <SwiperNextButton isActive={isActiveNextSwiper}>
            <GrNext />
          </SwiperNextButton>
        </div>
        <div className="nav-swiper">
          {urlPhotos.map((urlPhoto, i) => (
            <SwiperSlideToButton index={i} key={uuidv4()}>
              <img src={urlPhoto} alt="photo room" key={uuidv4()} />
            </SwiperSlideToButton>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default Slider;
