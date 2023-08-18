import React from "react";

import Image from "next/image";

import AboutUsSlider from "../../components/AboutUsSlider";

export const metadata = {
  description: "About us page gives information about our site.",
};

async function Page() {
  return (
    <div className="main container">
      <h2 className="text-center">Hakkımızda</h2>
      <hr />

      <AboutUsSlider />

      <p>
        Abalam ailesi olarak kurulduğumuz günden itibaren yenilikçi bakış açımız ve genç girişimciler olarak müşterilerimize en iyi ve kaliteli hammaddeli ürünleri sunmayı hedefliyoruz.
        <br />
        Sektörde edindiğimiz bilgi ve birikimlerimizi yaratıcı ve profesyonel bakış açımızla harmanlayarak kaliteden taviz vermeden üretime devam etmekteyiz.
        <br />
        Kaliteli ve güvenli ürünlerden oluşan tamamı yerli ürün yelpazemiz ile siz değerli ebeveynlerimizin beklentilerini hızlıca karşılayabilen marka olmaktan gurur duyuyoruz.
        <br />
        Sunduğumuz ürünleri geliştirmek için görüş ve düşüncelerinizi değerlendirerek fikirlerinize önem vermekteyiz. Bu bağlamda sizlere her zaman daha iyisini sunmayı hedefliyor, ihtiyaçlarınızı karşılamak ve hayallerinizi gerçekleştirmek için gelişmeye ve büyümeye devam ediyoruz.
      </p>
    </div>
  );
}

export default Page;
