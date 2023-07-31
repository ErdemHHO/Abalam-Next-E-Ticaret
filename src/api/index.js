

const api = "https://abalamturkiye.com/api"



export async function getCommentData() {
    const res = await fetch(`${api}/comment`,{
        cache: 'no-store'
    });
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
}


export async function getProductData() {
    const res = await fetch(`${api}/product`,{
        cache: 'no-store'
    });
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
}



export async function getAnnouncementData() {
    const res = await fetch(`${api}/announcement`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  }
  
  export async function searchProductData(query) {
    const res = await fetch(`${api}/product/search/q=${query}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  }