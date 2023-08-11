import React from "react";
import "./styles.css";
import { FcAbout } from "react-icons/fc";
import { BiMessageAltDetail } from "react-icons/bi";
import Link from "next/link";

const GetToKnowUs = () => {
  return (
    <div className="cta_bg_image_two" style={{ paddingTop: "90px", paddingBottom: "90px" }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-8 col-lg-7">
            <div>
              <h3 className="heading text-center text-md-start" style={{ fontSize: "40px" }}>
                Bizi Yakından Tanıyın...
              </h3>
            </div>
          </div>
          <div className="col-xl-4 col-lg-5">
            <div className="text-center d-flex flex-md-row flex-col justify-content-center">
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
