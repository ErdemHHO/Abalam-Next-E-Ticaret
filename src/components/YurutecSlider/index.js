'use client'

import React, { Component } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Slider from "react-slick";
import YurutecModal from "./YurutecModal";

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
      (yurutec) => yurutec.category_id === '6473d0b033e26a521daf73aa'
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
      <div className={`${styles.yurutecSlider} mt-3`}>
        <div className='container-fluid text-center p-5'>
          <h2 data-aos="fade-up ">Yürüteçlerimiz</h2>
          <hr />
          <p data-aos="fade-right">Türkiye'nin ve Dünyanın En Çok Satanı</p>
          <div className='row'>
            <div className='col-lg-8'>
              <div>
                <Slider {...settings}>
                  {filteredProducts && filteredProducts.map((yurutec, index) => (
                    <div key={index} className={styles.slideItem}>
                      <div className={styles.imageContainer}>
                        <img
                          data-aos="zoom-in-up"
                          src={yurutec.image_urls[0]}
                          alt="Resmin Açıklaması"
                          className={styles.images}
                          onClick={() => this.handleShow(yurutec)} // Tıklanan ürünün tüm verilerini handleShow'a gönderiyoruz
                        />
                        <div className={`${styles.detailButton} p-2`}>
                          <Link href={yurutec.slug}>
                            <div className='m-1'>
                              <button type="button" className={`btn btn-dark ${styles.detailButton1}`}>Ürün Sayfasına Git</button>
                            </div>
                          </Link>

                          <div className='m-1'>
                            <button onClick={() => this.handleShow(yurutec)} type="button" className={`btn btn-dark ${styles.detailButton2}`}><HiMagnifyingGlass /></button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
            <div className={`col-lg-4 text-center ${styles.list}`} >
              <p data-aos="fade-up" className='text-center fw-semibold'>
                Tamamen Yerli Üretim Olan Elnino Bebek Yürüteçlerimiz katilesi ve şık tasarımı ile bebeğinizin ilk adımlarında ona eşlik edecek.
              </p>
              <ul>
                <li data-aos="fade-right">
                    Müzikli ve oyuncaklı üst tabla    
                </li>
                <li data-aos="fade-right">
                    Kolay katlanabilme özelliği
                </li>
                <li data-aos="fade-right">
                  3 kademeli ayarlanabilir yükseklik özelliği
                </li>
                <li data-aos="fade-right">
                  Hareket kabiliyeti yüksek tekerler
                </li>
                <li data-aos="fade-right">
                  Alt tablada bulunan fren sistemi
                </li>
                <li data-aos="fade-right">
                  16 kilograma kadar taşıma kapasitesi
                </li>
              </ul>
            </div>
          </div>
          <Link href="urunler/yurutecler" className='text-danger'>
            <p className='text-end mt-5 '>Yürüteçlerimiz <AiOutlineArrowRight /> </p>
          </Link>
        </div>
        {show && <YurutecModal show={show} onClose={this.handleClose} product={selectedProduct} />}
      </div>
    );
  }
}
