import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import { AiFillMail } from "react-icons/ai";
import { BsWhatsapp, BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";
import { GrLanguage } from "react-icons/gr";
import Link from "next/link";

const Header = () => {
  return (
    <div className="border bg-light">
      <div className={`container ${styles["container"]}`} style={{ height: "33px" }}>
        <div className="row">
          <div className="col-5">
            <ul className={`d-flex p-1 ms-md-0 ${styles["nav-ul"]}`}>
              <li>
                <Link href="https://api.whatsapp.com/send/?phone=%2B905388265436&text=Merhaba%21++%C3%9Cr%C3%BCnleriniz+hakk%C4%B1nda+bilgi+almak+istiyorum.&type=phone_number&app_absent=0" className="p-2 border-start border-end" target="_blank">
                  <BsWhatsapp className="p-1" style={{ fontSize: "24px", color: "black" }} />
                </Link>
              </li>
              <li>
                <Link href="https://www.instagram.com/abalamturkiye/" target="_blank" className="p-2 border-end">
                  <BsInstagram className="p-1" style={{ fontSize: "24px", color: "black" }} />
                  {/* <i className="fa fa-facebook p-1 nav_icon"></i> */}
                </Link>
              </li>
              <li>
                <Link href="https://www.facebook.com/abalamturkiye" target="_blank" className="p-2 border-end">
                  <BsFacebook className="p-1" style={{ fontSize: "24px", color: "black" }} />
                </Link>
              </li>
              <li>
                <Link href="https://www.twitter.com/abalamturkiye" target="_blank" className="p-2 border-end">
                  <BsTwitter className="p-1" style={{ fontSize: "24px", color: "black" }} />
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-7 text-end">
            <div className="row">
              <ul>
                <Link href="mailto:abalamturkiye@gmail.com?subject=Ürünleriniz%20hakkında%20bilgi%20almak%20istiyorum." className="text-secondary text-decoration-none small d-none d-lg-inline border-start border-end px-4 py-2">
                  <AiFillMail className="p-1" style={{ fontSize: "24px", color: "black", marginRight: "5px" }} />
                  abalamturkiye@gmail.com
                </Link>
                <div className="btn-group">
                  <button className="d-none d-lg-inline border-0 bg-light btn-sm dropdown-toggle border-end px-3 p-1" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <GrLanguage className="p-1" style={{ fontSize: "22px", color: "green" }} />
                  </button>
                  <button className="d-md-inline d-lg-none border-0 bg-light btn-sm dropdown-toggle px-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {/* <img src="./img/tr-flag.png" alt="" /> */}
                    <Image src="/tr-flag.png" alt="Logo" width={16} height={11} />
                  </button>
                  <ul className="dropdown-menu">
                    <li className={styles.green_hover}>
                      <span href="#" className={`text-secondary p-3`}>
                        Turkce
                      </span>
                    </li>
                    <li className={styles.green_hover}>
                      <span href="#" className={`text-secondary p-3`}>
                        English
                      </span>
                    </li>
                    <li className={styles.green_hover}>
                      <span href="#" className={`text-secondary p-3`}>
                        Arabic
                      </span>
                    </li>
                  </ul>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
