import React from "react";
import ProductDetailImages from "../../components/ProductDetailImages";
import ProductDetailInfo from "../../components/ProductDetailInfo";
import NavigationBar from "../../components/NavigationBar";
import SimilarProductSlider from "../../components/SimilarProductSlider";

import * as api from "../../api/index";

export async function generateMetadata({ params: { icerik } }) {
  // fetch data
  const productData = await api.getProductDataById(icerik);

  if (productData && productData.product) {
    return {
      description: productData.product[0].title,
    };
  }
  return {
    description: "Ürün not found",
  };

  // optionally access and extend (rather than replace) parent metadata
}

async function Page({ params: { icerik } }) {
  const productData = await api.getProductDataById(icerik);
  const similarProductData = await api.getProductByFavorite();

  return (
    <div className="main">
      {productData && productData.product && (
        <>
          <NavigationBar productName={productData?.product[0].name} />
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <ProductDetailImages data={productData?.product[0].image_urls} />
              </div>
              <div className="col-lg-6">
                <ProductDetailInfo data={productData?.product[0]} />
              </div>
            </div>
          </div>
          <div className="container">
            <SimilarProductSlider data={similarProductData?.products} />
          </div>
        </>
      )}
    </div>
  );
}

export default Page;
