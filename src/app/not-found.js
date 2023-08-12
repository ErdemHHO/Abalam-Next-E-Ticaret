import React from 'react'
import Image from 'next/image'

function NotFound() {
  return (
    <div className='error'>
        <div className='d-flex justify-content-center text-center m-3' >
            <Image src="/images/abalam-logo1.png" alt="Logo" width={200} height={200} />
        </div>
        <div className='d-flex justify-content-center text-center' >
            <h2 className='fw-1'>SAYFA BULUNAMADI</h2>
        </div>
    </div>
  )
}

export default NotFound