import React, { Component } from "react";
import Slider from "react-slick";

import styles from "./styles.module.css";
import stylesSlick from "./slick-theme.css";

export default class CenterMode extends Component {
  render() {
    const { imageUrls } = this.props;

    const settings = {
      className: "center",
      centerMode: true,
      focusOnSelect: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 1,
      speed: 500
    };
    return (
      <div>
        <Slider {...settings}>
          {imageUrls.map((imageUrl, index) => (
            <div key={index}>
              <img src={imageUrl} alt={`Slide ${index + 1}`} className={styles.productImages} />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}