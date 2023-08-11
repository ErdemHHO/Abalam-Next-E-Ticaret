import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";
import { BsWhatsapp } from "react-icons/bs";

import { FaBars } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import NavbarSearchInput from "./NavbarSearchInput/NavbarSearchInput";
import * as api from "../../api/index";

const Navbar = async () => {
  const category = await api.getCategoriesData();

  return (
    <div className={`${styles["sticky-navbar"]}`}>
      <div>
        <nav id="top">
          {/* OffCANVAS BAŞLANGIÇ */}
          <div className="d-sm-inline d-md-none">
            <div className="offcanvas offcanvas-end" tabIndex="-1" style={{ width: "250px" }} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
              <div className="offcanvas-header bg-dark py-0">
                <p className="bg-dark text-white pt-3 small">Abalam Turkiye</p>
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
                    <Link href="/vizyon" className="text-decoration-none">
                      <span className="small text-dark p-3" data-bs-dismiss="offcanvas">
                        Vizyon ve Misyon
                      </span>
                    </Link>
                  </li>
                  <li className="list-unstyled border-bottom p-2">
                    <Link href="/teslimat" className="text-decoration-none">
                      <span className="small text-dark p-3" data-bs-dismiss="offcanvas">
                        Teslimat ve İade
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
                        {category &&
                          category.categories.map((item) => (
                            <li key={item._id}>
                              <Link href={`urunler/${item.slug}`} className="text-decoration-none">
                                <span className="small text-dark text-decoration-none p-2 d-block ms-4" data-bs-dismiss="offcanvas">
                                  {item.name}
                                </span>
                              </Link>
                            </li>
                          ))}
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* OffCanvas bitiş */}
        </nav>
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
                  <Image src="/abalam-logo.png" alt="Logo" width={190} height={50} className={`${styles["img-logo"]}`} />
                </Link>
              </div>
              {/* Urun + Ara */}
              <div className="col-md-9 col-lg-6 col-12 d-flex order-3 order-md-2 justify-content-center" style={{ position: "relative" }}>
                <div className={`dropdown-center border rounded-pill ${styles["allcatego-none"]}`}>
                  <button className={`btn dropdown-toggle px-4 ${styles["allcatego-none"]}`} type="button" id="dropdownCenterBtn" data-bs-toggle="dropdown" aria-expanded="false">
                    <span style={{ paddingRight: "1rem" }}> Urunlerimiz </span>
                  </button>
                  <ul className="dropdown-menu overflow-auto" style={{ maxHeight: "268px" }} aria-labelledby="dropdownCenterBtn">
                    <li>
                      <Link href="/urunler" className="text-decoration-none">
                        <span className="dropdown-item ">Tüm Ürünler</span>
                      </Link>
                    </li>
                    {category &&
                      category.categories.map((item) => (
                        <li key={item._id}>
                          <Link href={`urunler/${item.slug}`} className="text-decoration-none">
                            <span className="dropdown-item">{item.name}</span>
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
                <NavbarSearchInput />
              </div>
              <div className="col-lg-2 d-flex px-md-2 order-2 order-md-3 justify-content-end">
                <div className="d-none d-lg-flex align-items-center ms-md-0 mb-2 mb-md-0">
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
        <div className="container-fluid d-flex align-items-center d-none d-md-block border border-1" style={{ height: "50px", backgroundColor: "#fff" }}>
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-sm-4 d-flex align-items-stretch">
                <div className="dropdown-center">
                  <Link href="/" className="text-decoration-none">
                    <button className={` d-none d-sm-block h-100 border-1 rounded-pill text-center ${styles["all-categories"]}`} style={{ width: "12rem", backgroundColor: "#f0f0f0" }}>
                      <span className={`${styles.abalamtext_size}`}>ABALAM TÜRKİYE</span>
                    </button>
                  </Link>
                </div>
              </div>
              <div className="col-md-9 col-sm-8">
                <ul className={`${styles["custom-menu"]}`}>
                  <li>
                    <Link href="/" className="text-decoration-none">
                      <span className="text-black text-decoration-none me-3 h6">Anasayfa</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/hakkimizda" className="text-decoration-none">
                      <span className="text-black text-decoration-none mx-4 h6">Hakkımızda</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/iletisim" className="text-decoration-none">
                      <span className="text-black text-decoration-none mx-4 h6">İletişim</span>
                    </Link>
                  </li>
                  <li className="">
                    <Link href="/vizyon" className="text-decoration-none">
                      <span className="text-black text-decoration-none mx-4 h6">Vizyon & Misyon</span>
                    </Link>
                  </li>
                  <li className="d-none d-lg-block">
                    <Link href="/teslimat" className="text-decoration-none">
                      <span className="text-black text-decoration-none mx-4 h6">Teslimat & İade</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
