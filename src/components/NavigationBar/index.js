import React from 'react';
import { FaHome } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';
import Link from 'next/link';

function NavigationBar({ categoryName,isSpecial,productName }) {

  return (
    <div className='container-fluid d-none d-md-flex bg-light text-center justify-content-center mb-3'>
      <Link href="/" className="text-decoration-none text-dark">
        <span>
          <FaHome size={32} className="m-1" />
        </span>
      </Link>
      <BsArrowRight size={32} className="m-1" />
      <Link href="/urunler" className="text-decoration-none text-dark pt-1 m-1 navigation-link">
        <span >
          <strong>Ürünler</strong>
        </span>
      </Link>
      {categoryName && (
        <div>
          <BsArrowRight size={32} className="m-1 " />
          <span className='navigation-link p-2' ><strong>{categoryName}</strong></span>
        </div>
      )}
      {isSpecial && (
        <div>
          <BsArrowRight size={32} className="m-1 " />
          <span className='navigation-link p-2' ><strong>{isSpecial}</strong></span>
        </div>
      )}
      {productName && (
        <div>
          <BsArrowRight size={32} className="m-1 " />
          <span className='navigation-link p-2' ><strong>{productName}</strong></span>
        </div>
      )}
    </div>
  );
}

export default NavigationBar;
