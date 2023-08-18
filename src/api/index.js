const api = "https://abalamturkiye.com/api";

export async function getCommentData() {
  const res = await fetch(`${api}/comment`, {
    cache: "no-store",
  });
  
  return res.json();
}

export async function getProductData() {
  const res = await fetch(`${api}/product`, {
    cache: "no-store",
  });
  
  return res.json();
}

export async function getAnnouncementData() {
  const res = await fetch(`${api}/announcement`, {
    cache: "no-store",
  });
  
  return res.json();
}

export async function searchProductData(query) {
  const res = await fetch(`${api}/product/search/q=${query}`, {
    cache: "no-store",
  });
  
  return res.json();
}

export async function getCategoriesData() {
  const res = await fetch(`${api}/category`, {
    cache: "no-store",
  });
  
  return res.json();
}

export async function getProductDataByCategory(kategori) {
  const id = kategori;

  const res = await fetch(`${api}/category/${id}`, {
    cache: "no-store",
  });
  
  return res.json();
}

export async function getProductByCampaign() {
  const res = await fetch(`${api}/product/campaign`, {
    cache: "no-store",
  });

  
  return res.json();
}

export async function getProductByNew() {
  const res = await fetch(`${api}/product/new`, {
    cache: "no-store",
  });

  return res.json();
}

export async function getProductByFavorite() {
  const res = await fetch(`${api}/product/favorite`, {
    cache: "no-store",
  });

  return res.json();
}

export async function getProductDataById(icerik) {
  const id = icerik;

  const res = await fetch(`${api}/product/${id}`, {
    cache: "no-store",
  });
  
  return res.json();
}
