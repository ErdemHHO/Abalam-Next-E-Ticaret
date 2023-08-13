import React from "react";
import SidebarMenu from "../../../components/SidebarMenu";
import ProductCard from "../../../components/ProductCard";
import NavigationBar from "../../../components/NavigationBar";
import * as api from "../../../api/index";

export async function generateMetadata({ params: { kategori } }) {
  const productData = await api.getProductDataByCategory(kategori);

  if (productData) {
    return {
      description: "Lists products in category " + productData.categoryName,
    };
  }
  return {
    title: "Ürün bulunamadı",
    description: "Ürün bulunamadı",
  };
}

async function Page({ params: { kategori } }) {
  const productData = await api.getProductDataByCategory(kategori);
  const categoriesData = await api.getCategoriesData();

  return (
    <div className="main">
      <NavigationBar categoryName={productData.categoryName} />
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <SidebarMenu data={categoriesData} />
          </div>
          <div className="col-lg-8">
            <div className="container">
              <div className="row">
                {productData?.product?.map((product) => (
                  <div className="col-12 col-sm-6 col-md-6 col-lg-4 my-1">
                    <ProductCard key={product._id} data={product} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
