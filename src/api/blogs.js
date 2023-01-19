import axios from 'axios';

const baseURL = "http://eshop-env.eba-bv3rpum8.ap-northeast-1.elasticbeanstalk.com";

// const baseURL = "http://polls.apiblueprint.org/api/blogs";

//取得所有文章
export const artical = async() => {
  try {
    const res = await axios({
      method: "GET",
      url: `${baseURL}/api/blogs`,
    })
    return res.data
  } catch (err) {
    console.err("[Get Blogs artical failed]:")
  }
}