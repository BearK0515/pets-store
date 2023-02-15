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
  // console.log(email);
  // console.log(name)
  try {
    const rep = await axios({
      method: "POST",
      url: `${baseURL}/api/users/login`,
      data: {
        email: email,
        name: name,
      },
    });
    console.log('get FB reponse', rep);
    return rep;
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
    console.log('get Google reponse', rep);
    return rep;
  } catch (error) {
    console.error(`[Login Failed]${error}`);
  }
};
