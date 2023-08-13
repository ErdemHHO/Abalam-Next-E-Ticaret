"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import ProductCard from "../../components/ProductCard";
import SidebarMenu from "../../components/SidebarMenu";
import * as api from "../../api/index";

async function getSearchRequest(query) {
  const res = await fetch(`https://abalamturkiye.com/api/product/search?q=${query}`, {
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();
  return data;
}

async function Page() {
  const search = useSearchParams();
  const searchQuery = search ? search.get("q") : null;
  const encodedSearchQuery = encodeURI(searchQuery || "");

  const data = await getSearchRequest(encodedSearchQuery);
  const categoriesData = await api.getCategoriesData();

  return (
    <div className="main">
      <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <SidebarMenu data={categoriesData} />
            </div>
            <div className="col-lg-8">
              <div className="container">
                <div className="row">
                  <h2 className="text-center">{data.products ? `${data.products?.length} adet ürün bulundu.` : "Ürün bulunamadı."}</h2>
                  {data?.products?.map((product) => (
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
    </div>
  );
}

export default Page;
