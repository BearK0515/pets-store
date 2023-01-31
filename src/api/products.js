import axios from 'axios'

const baseURL =
  "http://eshop-env.eba-bv3rpum8.ap-northeast-1.elasticbeanstalk.com";
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
    console.error("[Get Hot Products failed]:");
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
    console.error("[Get New Products failed]:");
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
    console.error("[Get PriceSort Products failed]:");
  }
}
