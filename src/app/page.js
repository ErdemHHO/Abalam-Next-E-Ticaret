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

export const metadata = {
  title: "abalam",
  description: "Abalam Turkiye HomePage",
};

export default async function Home() {
  const commentData = await api.getCommentData();
  const productData = await api.getProductData();
  const announcements = await api.getAnnouncementData();

  return (
    <div>
      <Slider announcements={announcements.announcements} />
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
