import React, { MouseEvent, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { AiOutlineClose, AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { GrNext, GrPrevious } from 'react-icons/gr';
import { RxUpdate } from 'react-icons/rx';

import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import './styles.scss';

import { Scrollbar, Navigation, Controller, Mousewheel } from 'swiper/modules';
import { Button } from '@/shared/ui';
import cn from 'classnames';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';

interface ISwiperButtonProps {
  children: React.ReactNode;
  isActive?: boolean;
  length?: number;
  className?: string | string[];
  onClick?: () => void;
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

const SwiperNextButton = ({ children, className }: ISwiperButtonProps) => {
  const swiper = useSwiper();
  const [isActive, setIsActive] = useState<boolean>(!swiper.isEnd);
  swiper.on('slideChange', function () {
    setIsActive(!swiper.isEnd);
  });
  return (
    <div className={cn('next-swiper', { active: isActive })} onClick={() => swiper.slideNext()}>
      <Button type={'outline'}>{children}</Button>
    </div>
  );
};

const SwiperPrevButton = ({ children, className }: ISwiperButtonProps) => {
  const swiper = useSwiper();
  const [isActive, setIsActive] = useState<boolean>(!swiper.isBeginning);
  console.log('isActive prev', !swiper.isBeginning);
  swiper.on('slideChange', function () {
    console.log('isActivewwpre', isActive);
    setIsActive(!swiper.isBeginning);
  });
  console.log('isActivewwpre2', isActive);
  return (
    <div className={cn('prev-swiper', { active: isActive })} onClick={() => swiper.slidePrev()}>
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

  const handleImageClick = (image: string, index: number) => {
    setSelectedIndex(index);
    setSelectedImage(image);
    setIsFullscreen(true);
  };

  const NextImageClick = () => {
    if (selectedIndex === urlPhotos.length - 1) {
      setSelectedIndex(selectedIndex);
    } else {
      setSelectedImage(urlPhotos[selectedIndex + 1]);
      setSelectedIndex(selectedIndex + 1);
    }
  };

  const PrevImageClick = () => {
    if (selectedIndex === 0) {
      setSelectedIndex(selectedIndex);
    } else {
      setSelectedImage(urlPhotos[selectedIndex - 1]);
      setSelectedIndex(selectedIndex - 1);
    }
  };

  const handleCloseFullscreen = () => {
    setIsFullscreen(false);
    setSelectedImage('');
  };

  return (
    <div className="swiper-container">
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={10}
        centeredSlides={true}
        centeredSlidesBounds={true}
        navigation={true}
        scrollbar={{
          hide: true,
        }}
        autoHeight={true}
        mousewheel={true}
        modules={[Navigation, Controller, Mousewheel, Scrollbar]}
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
          <TransformWrapper>
            {({ zoomIn, zoomOut, resetTransform }) => (
              <div
                className={cn('fullscreen-container', { active: isFullscreen })}
                onClick={(e) => e.stopPropagation()}
              >
                <TransformComponent>
                  <img src={selectedImage} alt="Fullscreen" className="fullscreen-image" />
                </TransformComponent>
                <Button type="outline" className="close-button" onClick={handleCloseFullscreen}>
                  <AiOutlineClose color="white" />
                </Button>
                <Button type="outline" className="scale-plus-button" onClick={() => zoomIn()}>
                  <AiOutlinePlus color="white" />
                </Button>
                <Button type="outline" className="scale-minus-button" onClick={() => zoomOut()}>
                  <AiOutlineMinus color="white" />
                </Button>
                <Button
                  type="outline"
                  className="scale-reset-button"
                  onClick={() => resetTransform()}
                >
                  <RxUpdate />
                </Button>
              </div>
            )}
          </TransformWrapper>
          <button
            className={cn('prev-button', { active: selectedIndex === 0 ? false : true })}
            onClick={(e: MouseEvent<HTMLButtonElement>) => {
              e.stopPropagation();
              PrevImageClick();
            }}
          >
            <GrPrevious />
          </button>
          <button
            className={cn('next-button', {
              active: selectedIndex === urlPhotos.length - 1 ? false : true,
            })}
            onClick={(e: MouseEvent<HTMLButtonElement>) => {
              e.stopPropagation();
              NextImageClick();
            }}
          >
            <GrNext />
          </button>
        </div>
        <div onClick={PrevImageClick}>
          <SwiperPrevButton>
            <GrPrevious />
          </SwiperPrevButton>
        </div>
        <div onClick={NextImageClick}>
          <SwiperNextButton>
            <GrNext />
          </SwiperNextButton>
        </div>
        <div className="nav-swiper">
          {urlPhotos.map((urlPhoto, i) => (
            <div onClick={() => setSelectedIndex(i)} key={uuidv4()}>
              <SwiperSlideToButton index={i} key={uuidv4()}>
                <img src={urlPhoto} alt="photo room" key={uuidv4()} />
              </SwiperSlideToButton>
            </div>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default Slider;
