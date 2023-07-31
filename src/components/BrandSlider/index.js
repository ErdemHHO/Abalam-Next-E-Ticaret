'use client'

import React, { Component } from "react";
import Slider from "react-slick";

import stylesSlick from "./slick-theme.css";
import styles from "./styles.module.css";


export default class AutoPlay extends Component {
    render() {
      const settings = {
          dots: false,
          infinite: true,
          slidesToShow: 7,
          autoplay: true,
          speed: 2000,
          autoplaySpeed:2000,
          responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 6,
                slidesToScroll: 4,
              },
            },
            {
              breakpoint: 1000,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 3,
              },
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
              },
            },
          ],
        };
      return (
      
        <div className='mt-3'>

          <h2 className='text-center mb-3'><strong>Markalarımız</strong></h2>
          <div className="container-fluid p-5 d-block text-center justify-content-center">
          <Slider {...settings} className={stylesSlick} >
            <div className={`${styles.brandSlider} m-1`} >
              <img src="/images/brands/sonuc-plastik-logo.jpeg" alt="Logo" className={styles.sliderImage}/>
            </div>
            <div  className={`${styles.brandSlider} m-1`} >
              <img src="/images/brands/bebegold-logo.png" alt="Logo" className={styles.sliderImage}/>
            </div>
            <div  className={`${styles.brandSlider} m-1`} >
              <img src="/images/brands/abalam1.png" alt="Logo" className={styles.sliderImage}/>
            </div>
            <div className={`${styles.brandSlider} m-1`} >
              <img src="/images/brands/elnino-logo.png" alt="Logo" className={styles.sliderImage}/>
            </div>
            <div className={`${styles.brandSlider} m-1`} >
              <img src="/images/brands/sonuc-plastik-logo.jpeg" alt="Logo" className={styles.sliderImage}/>
            </div>
            <div  className={`${styles.brandSlider} m-1`} >
              <img src="/images/brands/bebegold-logo.png" alt="Logo" className={styles.sliderImage}/>
            </div>
            <div  className={`${styles.brandSlider} m-1`} >
              <img src="/images/brands/abalam1.png" alt="Logo" className={styles.sliderImage}/>
            </div>
            <div className={`${styles.brandSlider} m-1`} >
              <img src="/images/brands/elnino-logo.png" alt="Logo" className={styles.sliderImage}/>
            </div>
          </Slider>
          </div>
        </div>
      );
    }
  }