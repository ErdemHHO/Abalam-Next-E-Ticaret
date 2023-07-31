'use client'

import React, { Component } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Slider from "react-slick";
import BebekArabasiModal from "./BebekArabasiModal";

import Link from 'next/link';

import { HiMagnifyingGlass } from 'react-icons/hi2';
import { AiOutlineArrowRight } from 'react-icons/ai';

import styles from "./styles.module.css";

export default class CenterMode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      selectedProduct: null, // Seçilen ürünü tutmak için bir state ekliyoruz
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
  }

  componentDidMount() {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-out',
    });
  }

  componentDidUpdate() {
    AOS.refresh();
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow(product) {
    this.setState({ show: true, selectedProduct: product }); // Seçilen ürünü state'e atıyoruz
  }

  render() {
    const { data } = this.props;
    const { show, selectedProduct } = this.state; // Seçilen ürünü burada alıyoruz

    const filteredProducts = data.products.filter(
      (bebekArabasi) => bebekArabasi.category_id === '6473cf9533e26a521daf7381'
    );

    const settings = {
      className: "center",
      focusOnSelect: true,
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500,
      responsive: [
        {
          breakpoint: 1350,
          settings: {
            slidesToShow: 3,
            centerMode: false,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            centerMode: false,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            centerMode: false,
          },
        },
        {
          breakpoint: 620,
          settings: {
            slidesToShow: 1,
            centerMode: false,
          },
        },
      ]
    };

    return (
      <div className={`${styles.bebekArabasiSlider} mt-3`}>
        <div className='container-fluid text-center mt-3 p-5'>
          <h2 data-aos="fade-up ">Bebek Arabalarımız</h2>
          <hr />
          <p data-aos="fade-right">Katlaması Kolay, Kullanımı Rahat, Tasarımı Mükemmel</p>
          <div className='row'>
            <div className={`col-lg-4 text-center ${styles.list}`} >
              <p data-aos="fade-up" className='text-center fw-semibold'>
                Şıklığı ve hafifliği ile size, rahatlığı ve konforu ile bebeğinize hitap ediyor. 
              </p>
              <ul>
                <li data-aos="fade-right">
                  5 Noktalı emniyet kemeri
                </li>
                <li data-aos="fade-right">
                  360 derece dönebilen ve sabitlenebilen ön tekerler
                </li>
                <li data-aos="fade-right">
                  Tam kapanır tente
                </li>
                <li data-aos="fade-right">
                  Çift yönlü
                </li>
                <li data-aos="fade-right">
                  Tam kapanır tente
                </li>
                <li data-aos="fade-right">
                  Kolay katlanabilme
                </li>
                <li data-aos="fade-right">
                  9 kilogram ağırlık
                </li>
              </ul>
            </div>
            <div className='col-lg-8'>
              <div>
                <Slider {...settings}>
                  {filteredProducts && filteredProducts.map((bebekArabasi, index) => (
                    <div key={index} className={styles.slideItem}>
                      <div className={styles.imageContainer}>
                        <img
                          data-aos="zoom-in-up"
                          src={bebekArabasi.image_urls[0]}
                          alt="Resmin Açıklaması"
                          className={styles.images}
                          onClick={() => this.handleShow(bebekArabasi)} // Tıklanan ürünün tüm verilerini handleShow'a gönderiyoruz
                        />
                        <div className={`${styles.detailButton} p-2`}>
                          <Link href={bebekArabasi.slug}>
                            <div className='m-1'>
                              <button type="button" className={`btn btn-dark ${styles.detailButton1}`}>Ürün Sayfasına Git</button>
                            </div>
                          </Link>

                          <div className='m-1'>
                            <button onClick={() => this.handleShow(bebekArabasi)} type="button" className={`btn btn-dark ${styles.detailButton2}`}><HiMagnifyingGlass /></button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
          <Link href="urunler/bebek-arabalari" className='text-danger'>
            <p className='text-end mt-5 '>Bebek Arabalarımız <AiOutlineArrowRight /> </p>
          </Link>
        </div>
        {show && <BebekArabasiModal show={show} onClose={this.handleClose} product={selectedProduct} />}
      </div>
    );
  }
}
