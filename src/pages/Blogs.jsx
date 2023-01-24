import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { HomeIcon, ClockIcon, BookMarkIcon } from "../assets/icons/index";
import { HomeLinkWrapper } from "../components/common/HomeLinkWrapper";
import { artical } from "../api/blogs";


const BlogStyled = styled.div`
  box-sizing: border-box;
  display: block;
  width: 100%;
  margin: 0 10px;
  padding: 0 30px;
  max-width: 1140px;
`;
const GoToHome = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  text-align: right;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: var(--dark);
`;

const Breadcrumb = styled.div`
  margin-bottom: 20px;
  position: relative;
`;

const BlogContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 230px;
  grid-gap: 0 15px;
`;

const BlogListWrapper = styled.div`
  display: block;
  margin-right: 10px;
  padding: 0 15px 15px 15px;
  ul {
    margin-bottom: 0px;
    list-style: none;
  }
`;

const BlogCard = styled.li`
  margin-bottom: 50px;
  .BlogCardInner {
    z-index: 10;
    padding: 20px 0;
    border-right: 1px solid #c7cbd0;
    border-bottom: 1px solid #c7cbd0;
    border-left: 1px solid #c7cbd0;
  }
  .BlogCardIntro {
    display: grid;
    grid-gap: 10px 0;
    padding: 20px;
  }
  .BlogTitle {
    display: flex;
    gap: 10px;
    justify-content: start;
    align-items: center;
    overflow-wrap: break-all;
  }
  .topHighLight {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    width: 45px;
    height: 28px;
    padding: 8px;
    color: var(--white);
    background-color: var(--delete);
    font-size: 14px;
  }
  b {
    font-weight: bolder;
    font-size: 22px;
    overflow-wrap: break-all;
  }
  .DateCategory {
    display: flex;
    align-items: baseline;
    gap: 0 10px;
    color: var(--gray);
  }
  .BlogDate {
    display: flex;
    align-items: center;
    gap: 0 3px;
    font-size: 14px;
  }
  .BlogCategory {
    display: flex;
    align-items: center;
    gap: 0 3px;
    font-size: 14px;
  }
  article {
    overflow-wrap: break-all;
    line-height: 20px;
    color: var(--dark);
  }
`;

const BlogCardImg = styled.div`
  display: block;
  position: relative;
  width: 100%;
  aspect-ratio: 4/2;
  background-size: cover;
  background-position: center center;
  background-image: url("https://i.imgur.com/KZ2rS8G.jpg");
`;

const BlogAside = styled.div`
  // border: 2px solid red;
`;

const BlogSearch = styled.div`
  outline: 1px solid #c7cbd0;
  outline-offset: -1px;
  margin-bottom: 15px;
  padding: 15px;
  h4 {
    font-size: 18px;
    line-height: 1;
    margin-top: 0px;
  }
  b {
    font-weight: bolder;
  }
  .formStyled {
    height: 36px;
    margin-top: 10px;
    padding: 10px;
    border: 1px solid #d9d9d9;
  }
`;

const BlogNews = styled.div`
  outline: 1px solid #c7cbd0;
  outline-offset: -1px;
  margin-bottom: 15px;
  padding: 15px;
  h4 {
    font-size: 18px;
    line-height: 1;
    margin-top: 0px;
    margin-bottom: 10px;
  }
  b {
    font-weight: bolder;
  }
  h6 {
    font-size: 14px;
    line-height: 20px;
    overflow-wrap: break-all;
  }
`;

const BlogArticalList = styled.ul`
  .articalContent {
    margin-bottom: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #c7cbd0;
    color: var(--dark);

    :nth-last-child(1) {
      margin-bottom: 2px;
      padding-bottom: 2px;
      border-bottom: none;
    }
  }

  .BlogDate {
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 0 3px;
    font-size: 14px;
    color: var(--gray);
  }
  .BlogCategory {
    display: flex;
    align-items: center;
    gap: 0 3px;
    font-size: 14px;
  }
`;

const BlogCategoryArea = styled.div`
  outline: 1px solid #c7cbd0;
  outline-offset: -1px;
  margin-bottom: 15px;
  padding: 15px;
  h4 {
    font-size: 18px;
    line-height: 1;
    margin-top: 0px;
    margin-bottom: 10px;
  }
  b {
    font-weight: bolder;
  }
`;

const BlogCategoryList = styled.ul`
  margin-top: 15px;
  font-size: 14px;
  color: var(--gray);
  li {
    margin-bottom: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #c7cbd0;
    color: var(--dark);
    :nth-last-child(1) {
      margin-bottom: 2px;
      padding-bottom: 2px;
      border-bottom: none;
    }
  }
  .toFlex {
    display: flex;
    align-items: center;
    ::before {
      display: block;
      background-color: #c8c8c8;
      border-radius: 50%;
      content: "";
      margin-right: 10px;
      height: 5px;
      width: 5px;
      color: var(--gray);
    }
  }
`;

const Blogs = () => {
  const navigate = useNavigate();
  const [articalAll, setArticalAll] = useState(null);

  //抓文章api
  useEffect(() => {
    const getBlogsArticalAsync = async () => {
      try {
        const resArticalAll = await artical();
        setArticalAll(resArticalAll);
      } catch (err) {
        console.error(err);
      }
    };
    getBlogsArticalAsync();
    return;
  },[setArticalAll]);


  return (
    <BlogStyled>
      <HomeLinkWrapper>
        <GoToHome>
          <HomeIcon
            onClick={() => navigate("/home")}
            style={{ color: "var(--dark)", cursor: "pointer" }}
          />
          <p className='text'>部落格</p>
        </GoToHome>
      </HomeLinkWrapper>
      <Breadcrumb />
      <BlogContent>
        <BlogListWrapper>
          <ul>
            { articalAll?.map((artical) => {
              return (
               <BlogCard>
                <BlogCardImg style={{ backgroundImage: `url("${artical.image}")`}}/>
                <div className='BlogCardInner'>
                  <div className='BlogCardIntro'>
                    <h2 className='BlogTitle'>
                      { artical.isTop && <div className='topHighLight'>置頂</div> }
                      <b>{ artical.title }</b>
                    </h2>
                    <ul className='DateCategory'>
                      <li className='BlogDate'><ClockIcon/>{ artical.createdAt }</li>
                      <li className='BlogCategory'><BookMarkIcon/>
                      { artical["category"].includes("dog") && "狗狗健康知識庫" } 
                      { artical["category"].includes("cat") && "貓貓健康知識庫" }</li>
                    </ul>
                    <article>
                      <p>{ artical.content }<span>...閱讀更多</span></p>
                    </article>
                  </div>
                </div>
                </BlogCard>
              );
            })}
          </ul>
        </BlogListWrapper>
        <BlogAside>
          <div className='BlogArticalInner'>
            <BlogSearch>
              <h4>
                <b>搜尋文章</b>
              </h4>
              <form>
                <input
                  className='formStyled'
                  type='text'
                  placeholder='搜尋文章'
                />
              </form>
            </BlogSearch>
            <BlogNews>
              <h4>
                <b>最新文章</b>
              </h4>
              <BlogArticalList>
                <li className='articalContent'>
                  <h6>
                    貓咪大便很臭怎麼辦？一篇瞭解貓便便臭原因以及毛球症對貓咪的影響
                  </h6>
                  <ul className='DateCategory'>
                    <li className='BlogDate'>
                      <ClockIcon />
                      01 Jan, 2021
                    </li>
                  </ul>
                </li>
                <li className='articalContent'>
                  <h6>
                    【化毛粉怎麼吃總整理】食用頻率、餵食方法等常見問題一次解答
                  </h6>
                  <ul className='DateCategory'>
                    <li className='BlogDate'>
                      <ClockIcon />
                      06 Jan, 2023
                    </li>
                  </ul>
                </li>
                <li className='articalContent'>
                  <h6>
                    狗狗突然禿一塊毛怎麼辦？狗狗掉毛原因與改善日常掉毛的4個方法分享
                  </h6>
                  <ul className='DateCategory'>
                    <li className='BlogDate'>
                      <ClockIcon />
                      15 Sep, 2022
                    </li>
                  </ul>
                </li>
              </BlogArticalList>
            </BlogNews>
            <BlogCategoryArea>
              <h4>
                <b>文章分類</b>
              </h4>
              <BlogCategoryList>
                <li>
                  <div className='toFlex'>
                    <h6>狗狗健康知識庫</h6>
                  </div>
                </li>
                <li>
                  <div className='toFlex'>
                    <h6>貓貓健康知識庫</h6>
                  </div>
                </li>
              </BlogCategoryList>
            </BlogCategoryArea>
          </div>
        </BlogAside>
      </BlogContent>
    </BlogStyled>
  );
};

export default Blogs;
