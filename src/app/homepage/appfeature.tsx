'use client'

import React from 'react';
import Image from "next/image";
import slide from "../images/app_slide.jpg";
import bgmobile from "../images/app_structure.jpg";
import playstore from "../images/playstore.jpg";
import appstore from "../images/app_store.jpg";
import { Container , Row, Col} from 'react-bootstrap';
import 'swiper/swiper-bundle.css';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper , SwiperSlide } from 'swiper/react';

function AppFeatures() {
    return (
      <section className="app_feature bg_light_grey">
        <Container>
            <div className='section_title'>
                    <h1>Download UPSC AKHADA App</h1>
              </div>
          <Row>
            <Col lg={4}>
             <div className='app_features'>
                <ul className='align-items-end'>
                  <li> Live/Online and recorded classes</li>
                  <li> Class handouts</li>
                  <li> Daily current affairs</li>

                </ul>

             </div>

               
            </Col>
            <Col lg={4}>
              <div className='app_slider'>
              <Image className='mobile_background' src={bgmobile} alt="bg" />
                <Swiper
                 className='app_feature_slider'
                  effect='slide'
                  autoplay={{
                      delay: 4000
                  }}
                  speed={1500}
                  initialSlide={1}
                  loop={true}
                  slidesPerView={1}
                  navigation={false}
                  pagination={false}
                  modules={[Navigation, Autoplay, Pagination]}

                  // Responsive breakpoints
                  breakpoints={{
                      // when window width is >= 320px
                      320: {
                          slidesPerView: 1,
                      },
                      // when window width is >= 480px
                      480: {
                          slidesPerView: 1,
                      },
                      // when window width is >= 767px
                      767: {
                          slidesPerView: 1,
                      },

                      // when window width is >= 959px
                      959: {
                          slidesPerView: 1,
                      }
                  }}
              >
                  <SwiperSlide>
                      <Image className='banner_img' src={slide} alt="slider" />
                  </SwiperSlide>

                  <SwiperSlide>
                    <Image className='banner_img' src={slide} alt="slider" />
                  </SwiperSlide>
          
                
              </Swiper>
              </div>
            </Col>

            <Col lg={4}>
              <div className='app_features'>
                  <ul>
                    <li> Editorial analysis</li>
                    <li> Online tests</li>
                    <li> Assess your understanding with daily MCQ tests</li>
                  </ul>
              </div>
            </Col>
          </Row>

          <div className='playstore_row'>
                  <a href='' target='_blank'>
                    <Image src={playstore} alt="playstoreicon" />
                  </a>

                  <a href='' target='_blank'>
                    <Image src={appstore} alt="appstore" />
                  </a>

          </div>

        </Container>
      </section>
    );
}

export default AppFeatures;
