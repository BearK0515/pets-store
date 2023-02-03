import axios from "axios";

const baseURL = "https://www.waylins.com";
// const baseURL =
//   "https://eshop-env.eba-bv3rpum8.ap-northeast-1.elasticbeanstalk.com";

//管理員登入
export const adminLogin = async ({ email, password }) => {
  try {
    const { data } = await axios({
      method: "POST",
      url: `${baseURL}/api/admin/login`,
      data: {
        email: email,
        password: password,
      },
    });
    console.log(data);
    const { token, user } = data;
    if (token) {
      localStorage.setItem("authToken", token);
      localStorage.setItem("admin", user.isAdmin);
      return { success: true, ...data };
    }
  } catch (error) {
    console.error("[Login Failed]:", error);
  }
};
