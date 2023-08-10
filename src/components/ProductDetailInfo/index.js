import Link from 'next/link';
import React from 'react'

import styles from "./styles.module.css";
import { FaWhatsapp} from 'react-icons/fa'

function index({data}) {
  return (
    <div className={styles.productDetailInfo}>
        <h3 className='text-center'>{data.title}</h3>
        <hr />
        <div className='text-center'>
            <h4 className='text-danger'><strong>Ürün Özellikleri</strong>  </h4>
            <div dangerouslySetInnerHTML={{ __html: data.description }}></div>     
            <div>
                <span className={styles.price}> <del className='text-secondary'>{data.old_price} ₺</del>
                <span className={`${styles.price} text-success`}>{data.price} ₺</span> </span>
            </div>  
            <Link href={`https://api.whatsapp.com/send/?phone=%2B905388265436&text=Merhaba%21++${data.title}+hakk%C4%B1nda+bilgi+almak+istiyorum.&type=phone_number&app_absent=0`} target={'_blank'}>
                <button type="button" class="btn btn-outline-success main fs-4"><FaWhatsapp className='m-1' />WhatsApp İle Sipariş</button>
            </Link>
        </div>
    </div>
  )
}

export default index