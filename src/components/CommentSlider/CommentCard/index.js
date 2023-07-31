'use client'

import React, { useEffect } from 'react';

import { IoPersonCircle } from 'react-icons/io5';
import { ImQuotesRight } from 'react-icons/im';
import 'aos/dist/aos.css';
import AOS from 'aos';

import styles from "./styles.module.css";

function index({ name, description }) {


  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div className={`${styles.commentCard} justify-content-center`} data-aos="fade-up">
        <div className='container'>
        <div className='row'>
            <div className='col'>
            <IoPersonCircle size={100} style={{ color: '#F08D03' }} className={styles.commentIcon} />
            </div>
            <div className='col'>
            <ImQuotesRight size={50} style={{ color: '#018825' }} className="commentIcon2" />
            </div>
        </div>
        </div>
        <h5 className={styles.commetTitle}>
            {name}
        </h5>
        <div className={styles.commentCardText}>
            {description}
        </div>
    </div>
  )
}

export default index