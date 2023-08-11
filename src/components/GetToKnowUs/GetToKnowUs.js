import React from "react";
import { FcAbout } from "react-icons/fc";
import { BiMessageAltDetail } from "react-icons/bi";
import Link from "next/link";
import styles from "./styles.module.css";

const GetToKnowUs = () => {
  return (
    <div className={styles.cta_bg_image_two} style={{ paddingTop: "90px", paddingBottom: "90px" }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-8 col-lg-7">
            <div>
              <h3 className={`heading ${styles.textAlign}`} style={{ fontSize: "40px" }}>
                Bizi Yakından Tanıyın...
              </h3>
            </div>
          </div>
          <div className="col-xl-4 col-lg-5">
            <div className="text-center d-flex justify-content-center" style={{ gap: "10px" }}>
              <Link href="/hakkimizda">
                <button className="btn btn-primary p-3 me-md-5">
                  <FcAbout size={20} /> Hakkımızda
                </button>
              </Link>
              <Link href="/iletisim">
                <button className="btn btn-warning p-3 px-4">
                  <BiMessageAltDetail size={20} />
                  İletişim
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetToKnowUs;
