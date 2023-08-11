"use client";

import React, { Component } from "react";
import Slider from "react-slick";
import ProductCard from "../ProductCard";

import stylesSlick from "./slick-theme.css";
import styles from "./styles.module.css";

export default class AutoPlay extends Component {
  render() {
    const { data } = this.props;
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 4,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="mt-3 main">
        <h3 className="text-center mb-3">
          <strong>Kullanıcılar Bunları Da İnceledi</strong>
        </h3>
        <hr />
        <div className="container-fluid d-block text-center justify-content-center">
          <Slider {...settings} className={stylesSlick}>
            {data?.map((product) => (
              <div className="p-1">
                <ProductCard key={product._id} data={product} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}
