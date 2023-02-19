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

//POST會員送出訂單
export const submitOrder = async ({
  purchaserName,
  purchaserPhone,
  purchaserEmail,
  receiverName,
  receiverPhone,
  receiverAddress,
  comment,
  products,
  totalAmount,
  deliveryId
}) => {
  try {
    const authToken = localStorage.getItem('authToken');
    const UserId = localStorage.getItem('UserId');
    const rep = await axios({
      method: 'POST',
      url: `${baseURL}/api/users/orders`,
      data: {
        UserId: UserId,
        purchaserName: purchaserName,
        purchaserPhone: purchaserPhone,
        purchaserEmail: purchaserEmail,
        receiverName: receiverName,
        receiverPhone: receiverPhone,
        receiverAddress: receiverAddress,
        DeliveryId: deliveryId,
        comment: comment,
        PaymentId: 1,
        totalAmount: totalAmount,
        products: products
      },
      headers: {
        Authorization: `Bearer ${authToken}`
      }
    });
    return rep;
  } catch (error) {
    console.error('[POST submit order Failed]:', error);
  }
};
