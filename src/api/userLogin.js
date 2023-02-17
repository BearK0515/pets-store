import axios from 'axios';

const baseURL = 'https://www.waylins.com';
// const baseURL =
//   "http://eshop-env.eba-bv3rpum8.ap-northeast-1.elasticbeanstalk.com";

//facebook 登入
// export const facebookLogin = async ()=>{
//   try {
//     const rep = await axios({
//       method: "GET",
//       url: `${baseURL}/api/auth/facebook`,
//     });
//     console.log("get FB reponse",rep);
//     return rep
//   } catch (error) {
//     console.error(`[Login Failed]${error}`);
//   }
// }
export const facebookLogin = async ({ email, name }) => {
  try {
    const rep = await axios({
      method: "POST",
      url: `${baseURL}/api/users/login`,
      data: {
        email: email,
        name: name,
      },
    });
    return rep.data.data.token;
  } catch (error) {
    console.error(`[Login Failed]${error}`);
  }
};
//Google 登入
export const googleLogin = async () => {
  try {
    const rep = await axios({
      method: 'GET',
      url: `${baseURL}/api/auth/google`
    });
    return rep;
  } catch (error) {
    console.error(`[Login Failed]${error}`);
  }
};

//GET一般會員取得單一訂單
export const userSingleOrder = async (orderId) => {
  try {
    const authToken = localStorage.getItem("authToken");
    const rep = await axios({
      method: "GET",
      url: `${baseURL}/api/users/orders?orderNumber=${orderId}`,
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    return rep;
  } catch (error) {
    console.error("[GET single order Failed]:", error);
  }
};