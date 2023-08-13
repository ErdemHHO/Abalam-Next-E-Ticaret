import React from "react";

export const metadata = {
  description: "Explains our vision and mission",
};

const Page = () => {
  return (
    <div className="main container">
      <main>
        <section>
          <h2>Vizyonumuz</h2>
          <hr />
          <p>Abalam ailesi olarak, bebeklerin sağlıklı ve mutlu bir şekilde büyümelerini desteklemek için en güvenilir ve yenilikçi bebek ürünlerini sunmayı hedefliyoruz. Çocukların gelişimini olumlu yönde etkileyen ürünler tasarlayarak, ebeveynlerin hayatını kolaylaştırmayı ve ailelerin mutluluğuna katkıda bulunmayı amaçlıyoruz.</p>
        </section>
        <section>
          <h2>Misyonumuz</h2>
          <hr />
          <p>
            Misyonumuz, her aşamada bebeklerin sağlığına ve güvenliğine en üst düzeyde önem vererek, ebeveynlere destek olmaktır. Yenilikçi tasarımlarımız ve kaliteli hammaddelerimizle, bebeklerin dünyaya geldikleri ilk günden itibaren ihtiyaç duydukları ürünleri sunarak onların konforunu ve güvenliğini sağlamayı amaçlıyoruz. Ebeveynlerin güvenle tercih edebileceği bir marka olarak, her bir
            ürünümüzü özenle geliştiriyor, sürekli olarak iyileştirmek için çaba gösteriyoruz.
          </p>
        </section>
        <section>
          <h2>Değerlerimiz</h2>
          <hr />
          <ul>
            <li>
              <strong>Güvenilirlik:</strong> Ebeveynlerin ve bebeklerin güvenliği ve konforu bizim önceliğimizdir. Ürünlerimizin her aşamasında güvenilirlik ilkesini benimseriz.
            </li>
            <li>
              <strong>Kalite:</strong> Ürünlerimizin en üst kalitede olmasını sağlamak için titizlikle çalışırız. Kaliteye verdiğimiz önem, ailelerin bize duyduğu güveni yansıtır.
            </li>
            <li>
              <strong>İnovasyon:</strong> Sürekli olarak yeni ve etkili çözümler arayarak ürünlerimizi geliştiririz. İnovasyon, bebeklerin ve ebeveynlerin ihtiyaçlarına daha iyi cevap verebilmemizin anahtarıdır.
            </li>
            <li>
              <strong>Sosyal Sorumluluk:</strong> Topluma karşı sorumluluklarımızın farkındayız. Sadece iş yapmakla kalmayıp, çeşitli sosyal projelere destek sağlayarak topluma katkıda bulunmaya çalışıyoruz.
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Page;
