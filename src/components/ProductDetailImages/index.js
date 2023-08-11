"use client";
import React, { useState } from "react";
import ImageGallery from "react-image-gallery";
import ReactImageMagnify from "react-image-magnify";
import "react-image-gallery/styles/css/image-gallery.css";

const ProductDetailImages = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const onSlide = (currentIndex) => {
    setCurrentIndex(currentIndex);
    setIsHovered(false); // Hover durumunu sıfırla
  };

  const galleryImages = data.map((url) => ({
    original: url,
    thumbnail: url,
  }));

  const magnifyImages = data.map((url) => ({
    small: url,
    large: url,
  }));

  return (
    <div>
      <ImageGallery
        items={galleryImages}
        startIndex={currentIndex}
        onSlide={onSlide}
        showIndex={true}
        showFullscreenButton={false}
        slideInterval={7000}
        slideOnThumbnailOver={true}
        autoPlay={true}
        renderItem={(item) => (
          <div className="custom-image-container" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <ReactImageMagnify
              {...{
                smallImage: {
                  alt: "Product Image",
                  isFluidWidth: true,
                  src: item.original,
                },
                largeImage: {
                  src: item.original,
                  width: isHovered ? 1100 : 800, // Büyütülen genişlik
                  height: isHovered ? 825 : 600, // Büyütülen yükseklik
                },
                lensStyle: { backgroundColor: "rgba(0,0,0,.6)" },
              }}
              enlargedImagePosition="over"
              enlargedImageContainerDimensions={{
                width: isHovered ? 1100 : 800, // Konteyner genişliği
                height: isHovered ? 825 : 600, // Konteyner yüksekliği
              }}
              {...magnifyImages[currentIndex]}
            />
          </div>
        )}
      />
    </div>
  );
};

export default ProductDetailImages;
