import axios from "axios";
// import * as cheerio from "cheerio";

const baseURL = "https://www.waylins.com";
// const baseURL =
//   "http://eshop-env.eba-bv3rpum8.ap-northeast-1.elasticbeanstalk.com";

//取得所有商品(熱銷)
export const productsHot = async () => {
  try {
    const rep = await axios({
      method: "GET",
      url: `${baseURL}/api/products/all/bestsell`,
    });
    return rep.data;
  } catch (error) {
    console.error("[Get Hot Products failed]:");
  }
};
//取得所有商品(最新)
export const productsNew = async () => {
  try {
    const rep = await axios({
      method: "GET",
      url: `${baseURL}/api/products/all/newest`,
    });
    return rep.data;
  } catch (error) {
    console.error("[Get New Products failed]:");
  }
};
//取得所有商品(價格)
export const productsPrice = async () => {
  try {
    const rep = await axios({
      method: "GET",
      url: `${baseURL}/api/products/all/sortbyprice`,
    });
    return rep.data;
  } catch (error) {
    console.error("[Get PriceSort Products failed]:");
  }
};

//取得指定商品詳細資料
export const productDetail = async (productId) => {
  try {
    const rep = await axios({
      method: "GET",
      url: `${baseURL}/api/products/detail/${productId}`,
    });
    return rep.data;
  } catch (error) {
    console.error("[Get Product Detail failed]:", error);
  }
};

// //GET取得7-11縣市資料
// export const getCities = async() => {
//   const crosUrl = "https://cors-anywhere.herokuapp.com/";
//   try {
//     const res = await axios({
//       method:"GET",
//       url:`${crosUrl}http://www.ibon.com.tw/retail_inquiry.aspx#gsc.tab=0`
//       })
//     const $ = cheerio.load(res.data)
//     const cities = $("#Class1 option").map((index,city)=>{return $(city).text()})
//     return cities;
//   } catch (error) {
//     console.error("GET Cities Failed",error)
//   }
// }
// //GET取得7-11行政區資料
// export const getAreas = async() => {
//   const crosUrl = "https://cors-anywhere.herokuapp.com/";
//   try {
//     const res = await axios({
//       method:"GET",
//       url:`${crosUrl}http://www.ibon.com.tw/retail_inquiry.aspx#gsc.tab=0`
//       })
//     const $ = cheerio.load(res.data)
//     const areas = $("#Class2 option").map((index,area)=>{return $(area).text()})
//     return areas;
//   } catch (error) {
//     console.error("GET Ares Failed", error);
//   }
// }
//POST取得超商門市資料
export const getTownName = async (stCate, stCode) => {
  const crosUrl = "https://cors-anywhere.herokuapp.com/";

  window.open(
    "https://emap.presco.com.tw/c2cemap.ashx?eshopid=870&&servicetype=1&url=https://localhost:3000"
  );
  try {
    const res = await axios({
      method: "POST",
      url: `${crosUrl}https://emap.pcsc.com.tw/ecmap/getSelfSeviceStore.aspx`,
      // data: {
      //   suID: "harry.hsu0515@gmail.com",
      //   processID: "0123456789",
      //   stCate: stCate,
      //   stCode: stCode,
      //   rtURL: "https://localhost:3000/",
      //   webPara: null,
      // },
      headers: {
        Accept: "text/html",
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    return res;
  } catch (error) {
    console.error("POST Cities Failed", error);
  }
};
// export const getTownName = async (cityID) => {
//   const crosUrl = "https://cors-anywhere.herokuapp.com/";
//   try {
//     const res = await axios({
//       method: "POST",
//       url: `${crosUrl}http://emap.pcsc.com.tw/EMapSDK.aspx`,
//       data: {
//         commandid: "GetTown",
//         cityid: cityID,
//       },
//       headers: {
//         "Content-Type": "multipart/form-data",
//       },
//     });
//     const $ = cheerio.load(res.data);
//     const areas = $("TownName").map((index,area)=>{return $(area).text()})
//     return areas;
//   } catch (error) {
//     console.error("POST Cities Failed", error);
//   }
// };
// export const sevenMarket = async () => {
//   const crosUrl = "https://cors-anywhere.herokuapp.com/"
//   try {
//     const rep = await axios({
//       method: "POST",
//       url: `${crosUrl}https://www.ibon.com.tw/retail_inquiry_ajax.aspx`,
//       // url: `${crosUrl}https://emap.pcsc.com.tw/EMapSDK.aspx`,
//       data: {
//         strTargetField: "COUNTY",
//         strKeyWords: "台北市",
//       },
//       // data: {
//       //   commandid: "SearchStore",
//       //   city: "基隆市",
//       //   town: "中正區",
//       // },
//       headers: {
//         "Content-Type": "multipart/form-data",
//       },
//     });
//     console.log(rep.data);
//     return rep;
//   } catch (error) {
//     console.error("[Get Product Detail failed]:", error);
//   }
// };
