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
    return rep.data.data;
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
//LINE 登入
export const lineLogin = async (code) => {
  try {
    const res = await axios({
      method: "POST",
      url: `https://api.line.me/oauth2/v2.1/token`,
      data: {
        grant_type: "authorization_code",
        code: code,
        // redirect_uri: "https://beark0515.github.io/pets-store/",
        redirect_uri: "http://localhost:3000/pets-store",
        client_id: "1657937254",
        client_secret: "af41c394dd21a6c1ad9f0446f4fdbb60",
      },
      headers: {
        "Content-type": "application/x-www-form-urlencoded ",
      },
    });
    return res;
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