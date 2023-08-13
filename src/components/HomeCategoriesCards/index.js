"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import styles from "./styles.module.css";

import "aos/dist/aos.css";
import AOS from "aos";

function index() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className={`${styles.backgroundFoto} mt-3`}>
      <div className="container">
        <div className="row">
          <div className="col">
            <Link href="/urunler/yurutecler">
              <div className={`${styles.cards} ${styles.card2}`} data-aos="flip-right">
                <img src="/images/abalam-yurutec.png" className={styles.homeCardFoto} />
              </div>
            </Link>
          </div>
          <div className="col">
            <Link href="/urunler/bebek-arabalari">
              <div className={`${styles.cards} ${styles.card1}`} data-aos="flip-left">
                <img src="/images/abalam-bebek-araba.png" className={styles.homeCardFoto} />
              </div>
            </Link>
          </div>
          <div className="col">
            <Link href="/urunler/pusetler">
              <div className={`${styles.cards} ${styles.card3}`} data-aos="flip-left">
                <img src="/images/abalam-puset.png" className={styles.homeCardFoto} />
              </div>
            </Link>
          </div>
          <div className="col">
            <Link href="/urunler/yataklar">
              <div className={`${styles.cards} ${styles.card4}`} data-aos="flip-right">
                <img src="/images/abalam-ana-kucagi.png" className={styles.homeCardFoto} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
