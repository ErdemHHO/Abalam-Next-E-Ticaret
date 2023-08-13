import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ModalSlider from "./ModalSlider";

import Link from "next/link";

function index({ show, onClose, product }) {
  return (
    <div className="text-center">
      <Modal show={show} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-center fs-6">{product.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center m-3">
          <ModalSlider imageUrls={product.images} />
        </Modal.Body>
        <Modal.Footer className="text-center d-flex justify-content-center">
          <Link href={`/${product.slug}`}>
            <Button variant="outline-warning">Ürün Sayfasına Git</Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default index;
