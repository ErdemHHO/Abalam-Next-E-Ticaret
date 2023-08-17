import React from "react";
import Image from "next/image";
import { BsWhatsapp, BsInstagram, BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";
import styles from "./styles.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#F8F8F8" }}>
      <div className="container position-relative" style={{ paddingTop: "100px", paddingBottom: "100px" }}>
        <div className={`row ${styles.footerTextCenter}`}>
          <div className="col-12 col-md-5">
            {/* <Image src={"/abalam-logo.png"} width={100} height={60} /> */}
            <div className={styles.hoverOrangeBorder}>
              <h5 className="text-dark fs-3 fw-bold">İLETİŞİM BİLGİLERİ</h5>
            </div>
            <div className="mt-3">
              <p className={`text-dark ${styles.hoverOrange}`}>Esentepe, Küçük Sanayi Sitesi 2950. Sk., 34265 Sultangazi/İstanbul</p>
              <Link href="mailto:abalamturkiye@gmail.com?subject=Ürünleriniz%20hakkında%20bilgi%20almak%20istiyorum." className="text-decoration-none">
                <p className={`text-dark ${styles.hoverOrange}`}>abalamturkiye@gmail.com</p>
              </Link>
              <Link href="https://api.whatsapp.com/send/?phone=%2B905388265436&text=Merhaba%21++%C3%9Cr%C3%BCnleriniz+hakk%C4%B1nda+bilgi+almak+istiyorum.&type=phone_number&app_absent=0" target="_blank" className="text-decoration-none">
                <p className={`text-dark ${styles.hoverOrange}`}>+90538 826 54 36</p>
              </Link>
              <Link href="/" className="text-decoration-none">
                <p className={`text-dark ${styles.hoverOrange}`}>abalamturkiye.com</p>
              </Link>
            </div>
          </div>
          <div className="col-12 col-md-3 d-md-flex justify-content-center">
            <div>
              <div className={styles.hoverOrangeBorder}>
                <h5 className="text-dark fs-3 fw-bold">Kurumsal</h5>
              </div>
              <div className="mt-3">
                <Link href="/hakkimizda" className="text-decoration-none">
                  <p className={`text-dark ${styles.hoverOrange}`}>Hakkımızda</p>
                </Link>
                <Link href="/iletisim" className="text-decoration-none">
                  <p className={`text-dark ${styles.hoverOrange}`}>İletişim</p>
                </Link>
                <Link href="/vizyon" className="text-decoration-none">
                  <p className={`text-dark ${styles.hoverOrange}`}>Vizyon</p>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 d-md-flex justify-content-end">
            <div>
              <div className={styles.hoverOrangeBorder}>
                <h5 className={`text-dark fs-3 fw-bold`}>TESLİMAT & İADE</h5>
              </div>
              <div className="mt-3">
                <Link href="/teslimat" className="text-decoration-none">
                  <p className={`text-dark ${styles.hoverOrange}`}>Teslimat Bilgileri</p>
                </Link>
                <Link href="/teslimat" className="text-decoration-none">
                  <p className={`text-dark ${styles.hoverOrange}`}>İade & Değişim</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.abalamAllrights}>
          <p className="text-center"> © 2023 AbalamTurkiye. All Rights Reserved.</p>
        </div>

        <div className={`d-flex me-1 ${styles.socialMedia}`}>
          <Link href="https://api.whatsapp.com/send/?phone=%2B905388265436&text=Merhaba%21++%C3%9Cr%C3%BCnleriniz+hakk%C4%B1nda+bilgi+almak+istiyorum.&type=phone_number&app_absent=0" target="_blank">
            <div className="whatsapp-icon border p-2 rounded-circle">
              <BsWhatsapp style={{ fontSize: "25px", color: "black" }} className="" />
            </div>
          </Link>
          <Link href="https://www.instagram.com/abalamturkiye/" className="text-decoration-none" target="_blank">
            <div className="whatsapp-icon border p-2 rounded-circle">
              <BsInstagram style={{ color: "black", fontSize: "25px" }} className="" />
            </div>
          </Link>
          <Link href="https://www.facebook.com/abalamturkiye" className="text-decoration-none" target="_blank">
            <div className="whatsapp-icon border p-2 rounded-circle">
              <BsFacebook style={{ color: "black", fontSize: "25px" }} className="" />
            </div>
          </Link>

          <Link href="https://twitter.com/abalamturkiye" className="text-decoration-none" target="_blank">
            <div className="whatsapp-icon border p-2 rounded-circle">
              <BsTwitter style={{ color: "black", fontSize: "25px" }} className="" />
            </div>
          </Link>
          <Link href="https://linkedin.com/company/abalam" className="text-decoration-none" target="_blank">
            <div className="whatsapp-icon border p-2 rounded-circle">
              <BsLinkedin style={{ color: "black", fontSize: "25px" }} className="" />
            </div>
          </Link>
        </div>
        <div className="position-absolute top-0 d-flex justify-content-center align-items-center rounded-circle" style={{ height: "6rem", marginTop: "-3rem", left: 0, right: 0, marginLeft: "auto", marginRight: "auto" }}>
          <p className="rotate-n45 m-0 text-uppercase" style={{ fontSize: "1.5rem" }}>
            <Image className={`${styles.logo}`} src={"/abalam-logo.png"} width={200} height={80} />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
