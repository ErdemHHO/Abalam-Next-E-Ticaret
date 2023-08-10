'use client'

import React from 'react'
import { ListGroup } from 'react-bootstrap'

import Link from 'next/link';



function SidebarMenu({data}) {

  return (
    <div>
      <ListGroup className='text-center mx-5'>
        <Link className='link-without-underline' href={"/urunler"} >
          <ListGroup.Item className='list-item'><span className='fw-bold'>Tüm Ürünler</span> </ListGroup.Item>
        </Link>
        {data.categories && data.categories.map((item)=>(
          <Link className='link-without-underline' key={item._id} href={`/urunler/${item.slug}`}  >
            <ListGroup.Item className='list-item'><span className='fw-bold'>{item.name}</span> </ListGroup.Item>
          </Link>
        ))}
        <Link className='link-without-underline' href={"/ozel/kampanyali-urunler"} >
          <ListGroup.Item className='list-item'><span className='fw-bold'>Kampanyalı Ürünler</span> </ListGroup.Item>
        </Link>
        <Link className='link-without-underline' href={"/ozel/favori-urunler"} >
          <ListGroup.Item className='list-item'><span className='fw-bold'>Favori Ürünler</span> </ListGroup.Item>
        </Link>
        <Link className='link-without-underline' href={"/ozel/yeni-urunler"} >
          <ListGroup.Item className='list-item'><span className='fw-bold'>Yeni Ürünler</span> </ListGroup.Item>
        </Link>
      </ListGroup>
    </div>

  )
}

export default SidebarMenu