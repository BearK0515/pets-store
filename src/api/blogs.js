import axios from "axios";

const baseURL = "http://eshop-env.eba-bv3rpum8.ap-northeast-1.elasticbeanstalk.com"
//跨第三方伺服器
// const crosUrl = "https://cors-anywhere.herokuapp.com/";

//取得所有文章
export const articles = async () => {
try {
  const rep = await axios({
    method: "GET",
    url: `${baseURL}/api/blogs`,
  });
  return rep
} catch (error) {
  console.error("[Get articles failed]:", error);
}

}