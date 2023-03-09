import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { HomeIcon, ClockIcon, BookMarkIcon } from '../assets/icons/index';
import { HomeLinkWrapper } from '../components/common/HomeLinkWrapper';
// import { artical } from '../api/blogs';
import { BlogFilterContext } from '../App';
import { IsLoadingComponent as Loading } from '../components/common/IsLoading';
import Swal from 'sweetalert2';
import useFetchBlog from '../hooks/useFetchBlog';

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
  align-items: center;
  justify-content: flex-start;
  position: relative;
  width: 100%;
  text-align: left;
  font-size: 1.2rem;
  font-weight: 400;

  @media only screen and (min-width: 992px) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    text-align: right;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: var(--dark);
  }
`;

const BlogSearchTop = styled.div`
  @media only screen and (min-width: 992px) {
    display: none;
  }
  @media only screen and (max-width: 992px) {
    outline: 1px solid #c7cbd0;
    outline-offset: -1px;
    width: 100%;
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
      width: 100%;
      height: 36px;
      margin: 5px 0;
      padding: 10px;
      border: 1px solid #d9d9d9;
      color: var(--gray);
    }
  }
`;

const Breadcrumb = styled.div`
  display: flex;
  align-items: center;
`;

const BlogContent = styled.div`
  @media only screen and (min-width: 992px) {
    display: grid;
    grid-template-columns: 1fr 230px;
    gap: 0 15px;
  }
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
    font-size: 16px;
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
  background-image: url('https://i.imgur.com/KZ2rS8G.jpg');
`;

const BlogAside = styled.div`
  //
`;

const BlogSearch = styled.div`
  @media only screen and (max-width: 992px) {
    display: none;
  }
  @media only screen and (min-width: 992px) {
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
    font-size: 16px;
    color: var(--gray);
    margin-top: 5px;
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
  cursor: pointer;
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
      content: '';
      margin-right: 10px;
      height: 5px;
      width: 5px;
      color: var(--gray);
    }
  }
`;

const Blogs = () => {
  const navigate = useNavigate();
  // const [isLoading, setIsLoading] = useState(true);
  const [articalOrigin, setArticalOrigin] = useState([]);
  const [articalAll, setArticalAll] = useState([]);
  const [query, setQuery] = useState('');
  const [optionsState, setOptionsState] = useState('');
  const { blogFilter } = useContext(BlogFilterContext);

  const { isLoading } = useFetchBlog(`/api/blogs`, {
    setArticalOrigin,
    setArticalAll
  });
  console.log(articalOrigin);
  // //抓文章api
  // useEffect(() => {
  //   // setIsLoading(true);
  //   const getBlogsArticalAsync = async () => {
  //     try {
  //       const resArticalAll = await artical();
  //       resArticalAll.sort((a, b) => {
  //         return b.isTop - a.isTop; //正數-負數排序(true[1]-false[0])
  //       });
  //       setArticalOrigin(resArticalAll);
  //       setArticalAll(resArticalAll);
  //       // setIsLoading(false);
  //     } catch (err) {
  //       console.error(err);
  //       // setIsLoading(false);
  //     }
  //   };
  //   getBlogsArticalAsync();
  //   return;
  // }, [setArticalOrigin]);

  useEffect(() => {
    if (blogFilter === 'null') {
      return;
    }
    if (blogFilter === 'dog') {
      setOptionsState(blogFilter);
      setArticalAll(
        articalOrigin.filter((artical) => artical.category === 'dog')
      );
    } else if (blogFilter === 'cat') {
      setOptionsState(blogFilter);
      setArticalAll(
        articalOrigin.filter((artical) => artical.category === 'cat')
      );
    }
  }, [blogFilter, articalOrigin]);

  const handleFilterDog = () => {
    setOptionsState('dog');
    setArticalAll(
      articalOrigin.filter((artical) => artical.category === 'dog')
    );
  };

  const handleFilterCat = () => {
    setOptionsState('cat');
    setArticalAll(
      articalOrigin.filter((artical) => artical.category === 'cat')
    );
  };

  const handleChange = (e) => {
    if (e.target.value === null) {
      return;
    }
    setQuery(e.target.value);
  };

  const handleChangeSelect = (e) => {
    if (e.target.value === 'default') {
      return;
    }
    if (e.target.value === 'all') {
      setArticalAll(articalOrigin);
    }
    if (e.target.value === 'dog') {
      setArticalAll(
        articalOrigin.filter((artical) => artical.category === 'dog')
      );
    }
    if (e.target.value === 'cat') {
      setArticalAll(
        articalOrigin.filter((artical) => artical.category === 'cat')
      );
    }
    setOptionsState(e.target.value);
  };

  const handleSearchArtical = (e) => {
    if (e.target.value === null) {
      return;
    }
    if (e.key === 'Enter') {
      const searchArtical = articalOrigin.filter((artical) =>
        artical['title'].includes(e.target.value)
      );
      if (searchArtical.length === 0) {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: '查無該關鍵字，請重新輸入',
          showConfirmButton: false,
          timer: 1000
        });
        setQuery('');
        return;
      }
      setArticalAll(searchArtical);
      setQuery('');
      e.preventDefault(); //瀏覽器預設行為中斷(需放在if)
    }
  };

  return (
    <>
      {isLoading && <Loading />}
      <BlogStyled>
        <HomeLinkWrapper>
          <GoToHome>
            <HomeIcon
              onClick={() => navigate('/')}
              style={{ color: 'var(--dark)', cursor: 'pointer' }}
            />
            <p className='text'>部落格</p>
          </GoToHome>
        </HomeLinkWrapper>
        <Breadcrumb />
        <BlogContent>
          <BlogSearchTop>
            <form>
              <input
                className='formStyled'
                type='text'
                placeholder='請輸入搜尋關鍵字'
                value={query}
                onChange={handleChange}
                onKeyDown={handleSearchArtical}
              />
            </form>
            <form>
              <select
                className='formStyled'
                value={optionsState}
                onChange={handleChangeSelect}
              >
                <option value='default'>- 請選擇文章分類 -</option>
                <option value='all'>全部文章分類</option>
                <option value='dog'>狗狗健康知識庫</option>
                <option value='cat'>貓咪健康知識庫</option>
              </select>
            </form>
          </BlogSearchTop>
          <BlogListWrapper>
            <ul>
              {articalAll.length === 0 &&
                articalOrigin?.map((artical) => {
                  return (
                    <BlogCard key={artical.title}>
                      <BlogCardImg
                        style={{ backgroundImage: `url("${artical.image}")` }}
                      />
                      <div className='BlogCardInner'>
                        <div className='BlogCardIntro'>
                          <h2 className='BlogTitle'>
                            {artical.isTop && (
                              <div className='topHighLight'>置頂</div>
                            )}
                            <b>{artical.title}</b>
                          </h2>
                          <ul className='DateCategory'>
                            <li className='BlogDate'>
                              <ClockIcon />
                              {new Date(artical.createdAt).toLocaleDateString()}
                            </li>
                            <li className='BlogCategory'>
                              <BookMarkIcon />
                              {artical['category'].includes('dog') &&
                                '狗狗健康知識庫'}
                              {artical['category'].includes('cat') &&
                                '貓貓健康知識庫'}
                            </li>
                          </ul>
                          <article>
                            <p>
                              {artical.content}
                              <span>...閱讀更多</span>
                            </p>
                          </article>
                        </div>
                      </div>
                    </BlogCard>
                  );
                })}
              {articalAll?.map((artical) => {
                return (
                  <BlogCard key={artical.title}>
                    <BlogCardImg
                      style={{ backgroundImage: `url("${artical.image}")` }}
                    />
                    <div className='BlogCardInner'>
                      <div className='BlogCardIntro'>
                        <h2 className='BlogTitle'>
                          {artical.isTop && (
                            <div className='topHighLight'>置頂</div>
                          )}
                          <b>{artical.title}</b>
                        </h2>
                        <ul className='DateCategory'>
                          <li className='BlogDate'>
                            <ClockIcon />
                            {new Date(artical.createdAt).toLocaleDateString()}
                          </li>
                          <li className='BlogCategory'>
                            <BookMarkIcon />
                            {artical['category'].includes('dog') &&
                              '狗狗健康知識庫'}
                            {artical['category'].includes('cat') &&
                              '貓貓健康知識庫'}
                          </li>
                        </ul>
                        <article>
                          <p>
                            {artical.content}
                            <span>...閱讀更多</span>
                          </p>
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
                    value={query}
                    onChange={handleChange}
                    onKeyDown={handleSearchArtical}
                  />
                </form>
              </BlogSearch>
              <BlogNews>
                <h4>
                  <b>最新文章</b>
                </h4>
                <BlogArticalList>
                  {articalOrigin?.map((artical) => {
                    return (
                      <li className='articalContent' key={artical.title}>
                        <h6>{artical.title}</h6>
                        <ul className='DateCategory'>
                          <li className='BlogDate'>
                            <ClockIcon />
                            {new Date(artical.updatedAt).toLocaleDateString()}
                          </li>
                        </ul>
                      </li>
                    );
                  })}
                </BlogArticalList>
              </BlogNews>
              <BlogCategoryArea>
                <h4>
                  <b>文章分類</b>
                </h4>
                <BlogCategoryList>
                  <li onClick={handleFilterDog}>
                    <div className='toFlex'>
                      <h6>狗狗健康知識庫</h6>
                    </div>
                  </li>
                  <li onClick={handleFilterCat}>
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
    </>
  );
};

export default Blogs;
