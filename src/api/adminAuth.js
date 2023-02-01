import axios from "axios";

const baseURL = "http://private-anon-fd7124088f-bee3048.apiary-mock.com";

//管理員登入
export const adminLogin = async ({ email, password }) => {
  try {
    const data = await axios({
      method: "POST",
      url: `${baseURL}/api/admin/login`,
      data: {
        email: email,
        password: password,
      },
    });
    console.log(data.data);
    console.log(JSON.parse(data.data))
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
