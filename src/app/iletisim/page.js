import React from "react";

import { BsFillTelephoneFill } from "react-icons/bs";
import { MdAttachEmail, MdLocationCity } from "react-icons/md";
import { FaFacebookSquare, FaInstagramSquare, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

export const metadata = {
  description: "Our contact page contains information for users to reach us.",
};

function Page() {
  return (
    <div>
      <div>
        <div className="contact">
          <div className="container">
            <h2 className="text-center">Bize Ulaşın</h2>
            <hr />
          </div>
          <div className="container">
            <div className="section-header text-center"></div>
            <div className="row">
              <div className="col-md-6">
                <div className="contact-info ">
                  <div className="contact-item">
                    <MdLocationCity size={60} className="contact-icon" />
                    <div className="contact-text">
                      <h5>Adres</h5>
                      <p>Esentepe, Küçük San. Sit. 2950. Sk., 34265 Sultangazi/İstanbul</p>
                    </div>
                  </div>
                  <div className="contact-item">
                    <BsFillTelephoneFill size={60} className="contact-icon" />
                    <div className="contact-text">
                      <h5>Telefon</h5>
                      <Link className="link-without-underline" href="tel:+905388265436" target="_blank">
                        <p>+90 538 826 54 36</p>
                      </Link>
                    </div>
                  </div>
                  <div className="contact-item">
                    <MdAttachEmail size={60} className="contact-icon" />
                    <div className="contact-text">
                      <h5>Email</h5>
                      <Link className="link-without-underline" href="mailto:info@abalamturkiye.com?subject=%C3%9Cr%C3%BCnleriniz%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum." target="_blank">
                        <p>info@abalamturkiye.com</p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="contact-info">
                  <div className="contact-item">
                    <FaInstagramSquare size={60} className="contact-icon" />
                    <div className="contact-text">
                      <h5>Instagram</h5>
                      <Link className="link-without-underline" href="https://www.instagram.com/abalamturkiye/" target="_blank">
                        <p>abalamturkiye</p>
                      </Link>
                    </div>
                  </div>
                  <div className="contact-item">
                    <FaFacebookSquare size={60} className="contact-icon" />
                    <div className="contact-text">
                      <h5>Facebook</h5>
                      <Link className="link-without-underline" href="https://www.facebook.com/abalamturkiye/" target="_blank">
                        <p>abalamturkiye</p>
                      </Link>
                    </div>
                  </div>
                  <div className="contact-item">
                    <FaWhatsapp size={60} className="contact-icon" />
                    <div className="contact-text">
                      <h5>Whatsapp</h5>
                      <Link className="link-without-underline" href="https://api.whatsapp.com/send/?phone=%2B905388265436&text=Merhaba%21++%C3%9Cr%C3%BCnleriniz+hakk%C4%B1nda+bilgi+almak+istiyorum.&type=phone_number&app_absent=0" target="_blank">
                        <p>+90 538 826 54 36</p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3006.815164947082!2d28.877428876141565!3d41.094884971338466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab034d7f1ed7f%3A0x78edfa733792bb80!2sSonu%C3%A7%20Plastik!5e0!3m2!1str!2str!4v1691635426821!5m2!1str!2str"
          width="100%"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Page;
