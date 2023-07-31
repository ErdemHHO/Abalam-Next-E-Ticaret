'use client'


import React , { useEffect } from 'react'

import styles from "./styles.module.css";


import 'aos/dist/aos.css';
import AOS from 'aos';


function index() {

    useEffect(() => {
        AOS.init({
        offset: 200,
        duration: 800,
        easing: 'ease-in-out',
        });
    }, []);
    

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6'>
                <div className={`${styles.gifCard1} container`} data-aos="fade-up">
                    <div className='row'>
                        <div className='col-7'>
                            <div className={styles.text}>
                                <p className='text-white text-center fs-4 fw-left'>
                                    Yüksekliği ayarlanabilir 3 kademeli oturma ünitesi.
                                </p>
                            </div>
                        </div>
                        <div className="col-5">
                            <img src="/images/yurutec-gif.gif" alt="abalam-yurutec" className={styles.gif}  />
                        </div>
                    </div> 
                </div>
            </div>
            <div className='col-md-6'>
                <div className={`${styles.gifCard2} container`} data-aos="fade-up">
                    <div className='row'>
                        <div className="col-5">
                            <img src="/images/araba-gif.gif" alt="abalam-yurutec" className={styles.gif}  />
                        </div>
                        <div className='col-7'>
                            <div className={styles.text}>
                                <p className='text-white text-center fs-4 fw-bold'>
                                    3 kademeli ayarlanabilir tam kapanır tente
                                </p>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>

    </div>


  )
}

export default index