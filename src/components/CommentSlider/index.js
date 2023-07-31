'use client'

import React, { Component } from 'react';
import Slider from 'react-slick';
import CommentCard from './CommentCard';


import stylesSlick from "./slick-theme.css";
import styles from './styles.module.css'



const formatName = (name) => {
  const nameArray = name.split(' ');

  const formattedName = nameArray
    .map((word) => {
      if (word.length <= 2) {
        return word;
      } else {
        return word.charAt(0) + word.charAt(1) + '*'.repeat(word.length - 2);
      }
    })
    .join(' ');

  return formattedName;
};


export default class MultipleItems extends Component {

  render() {

    const { data } = this.props;

    const settings = {
      dots: false,
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
      ],
    };

    return (
      <div className={`${styles.commentSlider} mt-3 p-4 justify-content-center`} >
        <div className='p-2'>
          <Slider className={`${stylesSlick} container`}  {...settings} >
            {data.comments && data.comments.map((comment, index) => (
              <div key={index}>
                <CommentCard 
                  name={formatName(comment.name)}
                  description={comment.description} 
                  />
              </div>
            ))}
          </Slider> 
        </div>
        
      </div>
    );
  }
}
