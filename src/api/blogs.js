import axios from 'axios';

const baseURL = "https://private-anon-04ecff6c15-bee3048.apiary-mock.com";

// const baseURL = "http://polls.apiblueprint.org/api/blogs";

//取得所有文章
export const artical = async() => {
  try {
    const res = await axios({
      method: "GET",
      url: `${baseURL}/api/blogs`,
    })
    console.log(res.data)
    return res.data
  } catch (err) {
    console.err("[Get Blogs artical failed]:")
  }
}