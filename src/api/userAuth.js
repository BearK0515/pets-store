import axios from 'axios';

const baseURL = 'https://www.waylins.com';
// const baseURL =
//   "https://eshop-env.eba-bv3rpum8.ap-northeast-1.elasticbeanstalk.com";

//GET會員取得單一訂單
export const userSingleOrder = async (orderNumber) => {
  try {
    const userToken = localStorage.getItem('userToken');
    const rep = await axios({
      method: 'GET',
      url: `${baseURL}/api/users/orders/?orderNumber=${orderNumber}`,
      headers: {
        Authorization: `Bearer ${userToken}`
      }
    });
    return rep;
  } catch (error) {
    console.error('[GET single order Failed]:', error);
  }
};
