import axios from "axios";
import Swal from "sweetalert2";

const baseURL = "https://www.waylins.com";
// const baseURL =
//   "https://eshop-env.eba-bv3rpum8.ap-northeast-1.elasticbeanstalk.com";

//POST管理員登入
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
    const { token, user } = data.data;
    if (token) {
      localStorage.setItem("authToken", token);
      localStorage.setItem("isAdmin", user.isAdmin);
      return { success: true, user };
    }
  } catch (error) {
    console.error("[Login Failed]:", error);
    Swal.fire({
      title: error.response.data.message,
      icon: "error",
      showConfirmButton: false,
      timer: 1000,
      position: "top",
    });
  }
};

//GET管理員取得所有訂單
export const ordersAll = async () => {
  try {
    const authToken = localStorage.getItem("authToken");
    const rep = await axios({
      method: "GET",
      url: `${baseURL}/api/admin/orders`,
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    return rep.data.orders;
  } catch (error) {
    console.error("[GET OrdersAll Failed]:", error);
  }
};
//GET管理員取得單一訂單
export const singleOrder = async (orderId) => {
  try {
    const authToken = localStorage.getItem("authToken");
    const rep = await axios({
      method: "GET",
      url: `${baseURL}/api/admin/detail/?orderNumber=${orderId}`,
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    return rep;
  } catch (error) {
    console.error("[GET single order Failed]:", error);
  }
};
//POST管理員新增商品 內容還沒改
export const addProduct = async (orderId) => {
  try {
    const authToken = localStorage.getItem("authToken");
    const rep = await axios({
      method: "POST",
      url: `${baseURL}/api/admin/detail/${orderId}`,
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    return rep.data.orders;
  } catch (error) {
    console.error("[GET OrdersAll Failed]:", error);
  }
};
//PUT管理員修改商品
export const adjustProduct = async ({ productId, adjustPrice }) => {
  try {
    const authToken = localStorage.getItem("authToken");
    const rep = await axios({
      method: "PUT",
      url: `${baseURL}/api/admin/products/edit/${productId}`,
      data: {
        price: adjustPrice,
      },
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    return rep;
  } catch (error) {
    console.error("[PUT adjust the price Failed]:", error);
  }
};
//DELETE管理員下架商品
export const admindeleteProduct = async (productId) => {
  try {
    const authToken = localStorage.getItem("authToken");
    const rep = await axios({
      method: "DELETE",
      url: `${baseURL}/api/admin/products/delete/${productId}`,
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    return rep;
  } catch (error) {
    console.error("[DELETE product Failed]:", error);
  }
};
