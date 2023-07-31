// components/ProductCard.js
"use client";

import React, { useState } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import { AiOutlineEye } from "react-icons/ai";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { AiFillCaretRight } from "react-icons/ai";

const ProductCard = ({ title, old_price, price, image_urls, hoverimage_urls }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="mt-2">
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title> Başlık</Modal.Title>
        </Modal.Header>
        <Modal.Body> İçerik.</Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
      <div className={`${styles.cardContainer} p-3 border rounded shadow-lg d-flex flex-column`}>
        <div className={styles["productCard"]}>
          <img src={hoverimage_urls} alt="Ürün Resmi" className="img-fluid" />
          {/* <Image src="/ana1.jpg" alt="Ürün Resmi" className="img-thumbnail" width={500} height={500} /> */}
          <div className={styles["hoverImage"]}>
            <button className={styles["popup-btn"]} onClick={handleShow}>
              <AiOutlineEye className={styles.eyeIcons} size={35} />
            </button>
            <img src={image_urls} alt="Farklı Ürün Resmi" className="img-fluid" />
            {/* <Image src="/ana2.jpg" alt="Farklı Ürün Resmi" className="img-thumbnail" width={500} height={500} /> */}
          </div>
        </div>
        <div className="d-flex flex-column justify-content-center my-1">
          <p className="text-center h6">{title}</p>
          <p className="text-center mt-1">
            <sup className="h6" style={{ textDecoration: "line-through" }}>
              {old_price} ₺
            </sup>
            <span className="mx-2 text-success h5">{price} ₺</span>
          </p>
          <div className="d-flex justify-content-center">
            <Button variant="outline-success w-50">
              <AiFillCaretRight className={`text-success me-2 text-dark`} size={18} />
              Detay
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
