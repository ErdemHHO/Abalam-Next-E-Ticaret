import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";

import { FaBars } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <nav id="top">
        {/* OffCANVAS BAŞLANGIÇ */}
        <div className="d-sm-inline d-md-none">
          <div className="offcanvas offcanvas-end" tabIndex="-1" style={{ width: "250px" }} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div className="offcanvas-header bg-dark py-0">
              <p className="bg-dark text-white pt-3 small">CATEGORY</p>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" style={{ color: "white" }}></button>
            </div>
            <div className="offcanvas-body p-0">
              <ul className="p-0">
                <li className="list-unstyled border-bottom p-2 pt-3">
                  <Link href="/" className="text-decoration-none">
                    <span className="small text-dark p-3" data-bs-dismiss="offcanvas">
                      Anasayfa
                    </span>
                  </Link>
                </li>
                <li className="list-unstyled border-bottom p-2">
                  <Link href="/hakkimizda" className="text-decoration-none">
                    <span className="small text-dark p-3" data-bs-dismiss="offcanvas">
                      Hakkımızda
                    </span>
                  </Link>
                </li>
                <li className="list-unstyled border-bottom p-2">
                  <Link href="/iletisim" className="text-decoration-none">
                    <span className="small text-dark p-3" data-bs-dismiss="offcanvas">
                      İletişim
                    </span>
                  </Link>
                </li>
                <li className="list-unstyled border-bottom p-2">
                  <Link className="small text-dark text-decoration-none p-3" data-bs-toggle="collapse" href="#productSubMenu" role="button" aria-expanded="false" aria-controls="productSubMenu">
                    Ürünlerimize Gözatın <FaChevronDown />
                  </Link>
                  <div className="collapse" id="productSubMenu">
                    <ul className="list-unstyled">
                      <li>
                        <Link href="/" className="text-decoration-none">
                          <span className="small text-dark text-decoration-none p-2 d-block ms-4" data-bs-dismiss="offcanvas">
                            Tüm Ürünler
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/" className="text-decoration-none">
                          <span className="small text-dark text-decoration-none p-2 d-block ms-4" data-bs-dismiss="offcanvas">
                            Bebek Arabaları
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/" className="text-decoration-none">
                          <span className="small text-dark text-decoration-none p-2 d-block ms-4" data-bs-dismiss="offcanvas">
                            Yürüteçler
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/" className="text-decoration-none">
                          <span className="small text-dark text-decoration-none p-2 d-block ms-4" data-bs-dismiss="offcanvas">
                            Pusetler
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/yatak" className="text-decoration-none">
                          <span className="small text-dark text-decoration-none p-2 d-block ms-4" data-bs-dismiss="offcanvas">
                            Yataklar
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* OffCanvas bitiş */}
      </nav>
      {/* nav bitiş */}

      {/* HEADER */}
      <header style={{ position: "relative" }}>
        <div className={`container ${styles["container"]}`} style={{ padding: "12px" }}>
          {/* Offcanvas button */}
          <button className="d-sm-inline d-md-none btn btn-primary border-0 text-dark" style={{ position: "absolute", top: "0px", right: "8px", backgroundColor: "transparent" }} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
            <FaBars className="p-1" style={{ fontSize: "35px", color: "black" }} />
          </button>
          <div className="row align-items-center justify-content-between">
            {/* Logo */}
            <div className="col-4 col-md-3 col-lg-2 order-1 py-1 py-md-0">
              <Link href="/">
                <Image src="/abalam-logo.png" alt="Logo" width={150} height={50} className={`${styles["img-logo"]}`} />
              </Link>
            </div>
            {/* Urun + Ara */}
            <div className="col-md-6 col-12 d-flex order-3 order-md-2 justify-content-center" style={{ position: "relative" }}>
              <div className={`dropdown-center border rounded-pill ${styles["allcatego-none"]}`}>
                <button className={`btn dropdown-toggle px-4 ${styles["allcatego-none"]}`} type="button" id="dropdownCenterBtn" data-bs-toggle="dropdown" aria-expanded="false">
                  <span style={{ paddingRight: "1rem" }}> Urunlerimiz </span>
                </button>
                <ul className="dropdown-menu overflow-auto" style={{ maxHeight: "268px" }} aria-labelledby="dropdownCenterBtn">
                  <li>
                    <Link href="/" className="text-decoration-none">
                      <span className="dropdown-item ">Tüm Ürünler</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="text-decoration-none">
                      <span className="dropdown-item">Bebek Arabaları</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="text-decoration-none">
                      <span className="dropdown-item">Yürüteçler</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="text-decoration-none">
                      <span className="dropdown-item">Pusetler</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/yatak" className="text-decoration-none">
                      <span className="dropdown-item">Yataklar</span>
                    </Link>
                  </li>
                </ul>
              </div>
              <form className={`d-flex ${styles["category-size"]}`}>
                <input className={`form-control ${styles.searchRounded}`} type="search" placeholder="Search" aria-label="arama-metin-kutusu" />
                <button className={`btn btn-outline-light text-secondary ${styles.iconRounded}`} style={{ backgroundColor: "#EF8E01" }} type="button">
                  <Link className="" href="/">
                    <AiOutlineSearch className={`text-light ${styles.icon_search} `} style={{ fontSize: "24px" }} />
                  </Link>
                </button>
              </form>
            </div>
            <div className="col-4 col-md-3 col-lg-2  d-flex px-md-2 order-2 order-md-3 justify-content-end">
              <div className="d-none d-md-flex align-items-center ms-md-0 mb-2 mb-md-0">
                <Link className="text-decoration-none" href="https://api.whatsapp.com/send/?phone=%2B905388265436&text=Merhaba%21++%C3%9Cr%C3%BCnleriniz+hakk%C4%B1nda+bilgi+almak+istiyorum.&type=phone_number&app_absent=0">
                  {/* <Image src="/telefon.png" alt="Telefon Resmi" width={34} height={34} /> */}
                  <BsWhatsapp className={` ${styles["icon_wp"]}`} style={{ fontSize: "34px", color: "black" }} />
                  <span className={`small text-black text-decoration-none pe-xl-2 ms-md-2 my-md-3 text-dark ${styles["number_size"]}`}>+90538 826 54 36</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* <!--Header Bottom --> */}
      <div className="container-fluid d-flex align-items-center d-none d-md-block" style={{ height: "49px", backgroundColor: "#EF8E01" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-4 d-flex align-items-stretch">
              <div className="dropdown-center">
                <Link href="/" className="text-decoration-none">
                  <button className={` d-none d-sm-block h-100 border-0 rounded-pill text-center ${styles["all-categories"]}`} style={{ width: "17rem", backgroundColor: "#FDFF02" }}>
                    <span className={`${styles.abalamtext_size}`}>ABALAM TÜRKİYE</span>
                  </button>
                </Link>
              </div>
            </div>
            <div className="col-md-9 col-sm-8">
              <ul className={`${styles["custom-menu"]}`}>
                <li>
                  <Link href="/" className="text-decoration-none">
                    <span className="text-white text-decoration-none me-3 h6">Anasayfa</span>
                  </Link>
                </li>
                <li>
                  <Link href="/hakkimizda" className="text-decoration-none">
                    <span className="text-white text-decoration-none mx-4 h6">Hakkımızda</span>
                  </Link>
                </li>
                <li>
                  <Link href="/iletisim" className="text-decoration-none">
                    <span className="text-white text-decoration-none mx-4 h6">İletişim</span>
                  </Link>
                </li>
                <li>
                  <Link href="/vizyon" className="text-decoration-none">
                    <span className="text-white text-decoration-none mx-4 h6">Vizyon</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
