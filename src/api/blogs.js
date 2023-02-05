import axios from 'axios';

const baseURL = "https://www.waylins.com";
// const baseURL = "http://eshop-env.eba-bv3rpum8.ap-northeast-1.elasticbeanstalk.com";

//取得所有文章
export const artical = async() => {
  try {
    const res = await axios({
      method: "GET",
      url: `${baseURL}/api/blogs`,
    })
    return res.data
  } catch (err) {
    console.err(`[Get Blogs artical failed]:${err}`)
  }
}
