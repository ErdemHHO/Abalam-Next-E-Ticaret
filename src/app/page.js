import CommentSlider from "../components/CommentSlider";
import HomeCategoriesCard from "../components/HomeCategoriesCards";
import BrandSlider from "../components/BrandSlider";
import GifCard from "../components/GifCard";
import YurutecSlider from "../components/YurutecSlider";
import BebekArabasiSlider from "../components/BebekArabasiSlider";
import ProductCard from "../components/ProductCard";
import Slider from "../components/Slider/Slider";

import * as api from "../api/index";
import GetToKnowUs from "../components/GetToKnowUs/GetToKnowUs";

export default async function Home() {
  const commentData = await api.getCommentData();
  const productData = await api.getProductData();
  const announcements = await api.getAnnouncementData();

  return (
    <div>
      <Slider announcements={announcements.announcements} />
      {/* <div className="container">
        <div className="row">
          {productData && productData.products.map((product) => (
            <div className="col-12 col-sm-6 col-md-6 col-lg-3 my-1">
              <ProductCard title="El Nino Lüx Oyuncaklı Müzikli..." old_price={product.old_price} price={product.price} image_urls={product.image_urls[0]} hoverimage_urls={product.image_urls[1] ? product.image_urls[1] : product.image_urls[0]} />
            </div>
          ))}
        </div>
      </div> */}
      <div className="main">
        <HomeCategoriesCard />
      </div>
      <div className="main">
        <YurutecSlider data={productData} />
      </div>
      <div className="main">
        <GifCard />
      </div>
      <div className="main">
        <BebekArabasiSlider data={productData} />
      </div>
      <div className="main">
        <CommentSlider data={commentData} />
      </div>
      <div className="main">
        <BrandSlider />
      </div>
      <div className="main">
        <GetToKnowUs />
      </div>
    </div>
  );
}
