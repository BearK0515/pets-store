import axios from 'axios'

const baseURL = "https://private-anon-04ecff6c15-bee3048.apiary-mock.com/";
// const baseURL = "http://polls.apiblueprint.org";

//取得所有商品(熱銷)
export const productsHot = async () => {
  try {
    const rep = await axios({
      method: "GET",
      url: `${baseURL}/api/products/all/bestsell`,
    });
    return rep.data
  } catch (error) {
    console.error("[Get Hot Products failed]:", error);
  }
}
//取得所有商品(最新)
export const productsNew = async () => {
  try {
    const rep = await axios({
      method: "GET",
      url: `${baseURL}/api/products/all/newest`,
    });
    return rep.data
  } catch (error) {
    console.error("[Get New Products failed]:", error);
  }
}
//取得所有商品(價格)
export const productsPrice = async () => {
  try {
    const rep = await axios({
      method: "GET",
      url: `${baseURL}/api/products/all/sortbyprice`,
    });
    return rep.data
  } catch (error) {
    console.error("[Get PriceSort Products failed]:", error);
  }
}
