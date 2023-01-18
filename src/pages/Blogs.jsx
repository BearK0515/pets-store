import React from 'react'
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { HomeIcon, ClockIcon, BookMarkIcon } from "../assets/icons/index"


const BlogStyled = styled.div`
  box-sizing: border-box;
  border: 2px solid red;
  display: block;
  width: 100%;
  margin: 30px auto;
  padding: 0 30px;
  max-width: 930px;
  
`
const GoToHome = styled.div`
  display: flex;
  justify-content: flex-end;
  align-contents: center;
  width: 100%;
  text-align: right;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: var(--dark);
  border: 2px solid red;
`

const Breadcrumb = styled.div`
  margin-bottom: 20px;
  position: relative;
  border: 1px solid red;
`

const BlogContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 230px;
  grid-gap: 0 15px;
`

const BlogListWrapper = styled.div`
  display: block;
  ul {
    margin-bottom: 0px;
    list-style: none;
  }
`

const BlogCard = styled.li`
  margin-bottom: 15px;
  padding: 15px;

  .BlogCardInner {
    padding: 20px 0;
    outline: 1px solid #c7cbd0;
    outline-offset: 20px;
  }
  .BlogCardIntro {
    display: grid;
    grid-gap: 10px 0;
  }
  .BlogTitle {
    display: flex;
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
`

const BlogCardImg = styled.div`
  display: block;
  position: relative;
  width: 100%;
  aspect-ratio: 4/2;
  background-size: cover;
  background-position: center center;
  background-image: url("https://i.imgur.com/KZ2rS8G.jpg");
`

const BlogAside = styled.div`
  border: 2px solid red;
`



const Blogs = () => {
  const navigate = useNavigate();
  return (
    <BlogStyled>
      <GoToHome><HomeIcon onClick={() => navigate("/home")} style={{ color:'var(--dark)',cursor: "pointer" }} />＞部落格</GoToHome>
      <Breadcrumb />
      <BlogContent>
        <BlogListWrapper>
          <ul>
            <BlogCard>
              <BlogCardImg/>
              <div className='BlogCardInner'>
                <div className='BlogCardIntro'>
                  <h2 className='BlogTitle'>
                    <div className='topHighLight'>置頂</div>
                    <b>【10種貓不能吃的食物】主人們你的同情害到他了！</b>
                  </h2>
                  <ul className='DateCategory'>
                    <li className='BlogDate'><ClockIcon/>01 Jan, 2021</li>
                    <li className='BlogCategory'><BookMarkIcon/>貓咪健康知識庫</li>
                  </ul>
                  <article>
                    <p>貓不能吃什麼？主人們你的同情害到他了！ Joe常常在吃飯的時候，我家那隻貓皇上就在旁邊喵喵叫，不給他吃好像對不起我的主子但我都堅持不把人類的食物給他，因為人類食物對毛孩的身體健康，藏著很多隱形危機（當然有些還是可以的，請詳見內文） 今天我們就來討論家裡的<span>...閱讀更多</span></p>
                  </article>
                </div>
              </div>
            </BlogCard>
            <BlogCard>
              <BlogCardImg/>
              <div className='BlogCardInner'>
                <div className='BlogCardIntro'>
                  <h2 className='BlogTitle'>
                    <div className='topHighLight'>置頂</div>
                    <b>【10種貓不能吃的食物】主人們你的同情害到他了！</b>
                  </h2>
                  <ul className='DateCategory'>
                    <li className='BlogDate'><ClockIcon/>01 Jan, 2021</li>
                    <li className='BlogCategory'><BookMarkIcon/>貓咪健康知識庫</li>
                  </ul>
                  <article>
                    <p>貓不能吃什麼？主人們你的同情害到他了！ Joe常常在吃飯的時候，我家那隻貓皇上就在旁邊喵喵叫，不給他吃好像對不起我的主子但我都堅持不把人類的食物給他，因為人類食物對毛孩的身體健康，藏著很多隱形危機（當然有些還是可以的，請詳見內文） 今天我們就來討論家裡的<span>...閱讀更多</span></p>
                  </article>
                </div>
              </div>
            </BlogCard>
            <BlogCard>
              <BlogCardImg/>
              <div className='BlogCardInner'>
                <div className='BlogCardIntro'>
                  <h2 className='BlogTitle'>
                    <div className='topHighLight'>置頂</div>
                    <b>【10種貓不能吃的食物】主人們你的同情害到他了！</b>
                  </h2>
                  <ul className='DateCategory'>
                    <li className='BlogDate'><ClockIcon/>01 Jan, 2021</li>
                    <li className='BlogCategory'><BookMarkIcon/>貓咪健康知識庫</li>
                  </ul>
                  <article>
                    <p>貓不能吃什麼？主人們你的同情害到他了！ Joe常常在吃飯的時候，我家那隻貓皇上就在旁邊喵喵叫，不給他吃好像對不起我的主子但我都堅持不把人類的食物給他，因為人類食物對毛孩的身體健康，藏著很多隱形危機（當然有些還是可以的，請詳見內文） 今天我們就來討論家裡的<span>...閱讀更多</span></p>
                  </article>
                </div>
              </div>
            </BlogCard>
          </ul>
        </BlogListWrapper>
        <BlogAside>
          Aside
        </BlogAside>
      </BlogContent>
    </BlogStyled>
    
  )
}

export default Blogs