import axios from "axios";

const baseURL = "https://private-anon-7cc8436e89-bee3048.apiary-mock.com";

//facebook 登入
export const facebookLogin = async ()=>{
  try {
    const rep = await axios({
      method: "GET",
      url: `${baseURL}/api/auth/facebook`,
    });
    return rep
  } catch (error) {
    console.error(`[Login Failed]${error}`);
  }
}