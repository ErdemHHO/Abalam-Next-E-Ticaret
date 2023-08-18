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
          slidesToShow: 6,
          autoplay: true,
          speed: 3000,
          autoplaySpeed:2000,
          arrows: false,
          responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 5,
              },
            },
            {
              breakpoint: 1000,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
              },
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],
        };
      return (
      
        <div className={styles.background}>

          <div className="container-fluid d-block text-center justify-content-center">
          <Slider {...settings} className={stylesSlick} >
            <div className={`${styles.brandSlider} m-1 p-1`} >
              <img src="/images/hakkimizda1.jpg" alt="Logo" className={styles.sliderImage}/>
            </div>
            
            <div  className={`${styles.brandSlider} m-1 p-1`} >
              <img src="/images/hakkimizda3.jpg" alt="Logo" className={styles.sliderImage}/>
            </div>
            <div className={`${styles.brandSlider} m-1 p-1`} >
              <img src="/images/hakkimizda9.jpg" alt="Logo" className={styles.sliderImage}/>
            </div>
            <div className={`${styles.brandSlider} m-1 p-1`} >
              <img src="/images/hakkimizda5.jpg" alt="Logo" className={styles.sliderImage}/>
            </div>
            <div  className={`${styles.brandSlider} m-1 p-1`} >
              <img src="/images/hakkimizda7.jpg" alt="Logo" className={styles.sliderImage}/>
            </div>
            <div  className={`${styles.brandSlider} m-1 p-1`} >
              <img src="/images/hakkimizda6.jpg" alt="Logo" className={styles.sliderImage}/>
            </div>
            <div className={`${styles.brandSlider} m-1 p-1`} >
              <img src="/images/hakkimizda4.jpg" alt="Logo" className={styles.sliderImage}/>
            </div>
            <div className={`${styles.brandSlider} m-1 p-1`} >
              <img src="/images/hakkimizda8.jpg" alt="Logo" className={styles.sliderImage}/>
            </div>
            <div  className={`${styles.brandSlider} m-1 p-1`} >
              <img src="/images/hakkimizda2.jpg" alt="Logo" className={styles.sliderImage}/>
            </div>
          </Slider>
          </div>
        </div>
      );
    }
  }