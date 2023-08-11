// components/ProductCard.js
"use client";

import React, { useState } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import { AiOutlineEye } from "react-icons/ai";
import Button from "react-bootstrap/Button";
import { AiFillCaretRight } from "react-icons/ai";
import ProductCardModal from "./ProductCardModal";

import Link from "next/link";

const ProductCard = ({ data }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (product) => {
    setShow(true);
  };

  const product = {
    title: data.title,
    price: data.price,
    old_price: data.old_price,
    images: data.image_urls,
    image_urls: data.image_urls[0],
    hoverimage_urls: data.image_urls[1] ? data.image_urls[1] : data.image_urls[0],
    slug: data.slug,
  };
  const shortenedTitle = product.title.length > 60 ? product.title.substring(0, 60) + "..." : product.title;

  return (
    <div className="mt-2">
      <div className={`${styles.cardContainer} p-3 border rounded shadow-lg d-flex flex-column`}>
        <div className={styles["productCard"]}>
          <img src={product.hoverimage_urls} alt="Ürün Resmi" className="img-fluid" />
          {/* <Image src="/ana1.jpg" alt="Ürün Resmi" className="img-thumbnail" width={500} height={500} /> */}
          <div className={styles["hoverImage"]}>
            <button 
            className={styles["popup-btn"]} 
            onClick={
              () => handleShow(product)
            }
            >
              <AiOutlineEye className={styles.eyeIcons} size={35} />
            </button>
            <img src={product.image_urls} alt="Farklı Ürün Resmi" className="img-fluid" />
            {/* <Image src="/ana2.jpg" alt="Farklı Ürün Resmi" className="img-thumbnail" width={500} height={500} /> */}
          </div>
        </div>
        <div className="d-flex flex-column justify-content-center my-1">
          <p className="text-center h6">{shortenedTitle}</p>
          <p className="text-center mt-1">
            <sup className="h6" style={{ textDecoration: "line-through" }}>
              {product.old_price} ₺
            </sup>
            <span className="mx-2 text-success h5">{product.price} ₺</span>
          </p>
          <div className="d-flex justify-content-center">
            <Link href={`/${product.slug}`}>
              <Button variant="outline-success w-75">
                <AiFillCaretRight className={`text-success me-2 text-dark`} size={18} />
                Detay
              </Button>
            </Link>
          </div>
        </div>
      </div>
      {show && <ProductCardModal show={show} onClose={handleClose} product={product} />}
    </div>
  );
};

export default ProductCard;
