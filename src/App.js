import { createContext, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { GlobalStyle, ResetStyle } from './constants/globalStyle';
import Layout from './components/common/Layout';
import { Orders, Products } from './components/sectionAdmin';
import AllProducts from './components/sectionAdmin/products/AllProducts';
import CatProducts from './components/sectionAdmin/products/CatProducts';
import DogProducts from './components/sectionAdmin/products/DogProducts';
import {
  About,
  AdminIndex,
  AdminLogin,
  Blogs,
  Cart,
  Faq,
  Home,
  Order,
  ProductAll,
  ProductPage,
  SingleOrder,
  SingleProduct
} from './pages';
import ProductSearch from './pages/ProductSearch';

const basename = process.env.PUBLIC_URL;

function App() {
  const [blogFilter, setBlogFilter] = useState(null);
  return (
    <>
      <ResetStyle />
      <GlobalStyle />
      <BlogFilterContext.Provider value={{ blogFilter, setBlogFilter }}>
        <BrowserRouter basename={basename}>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route path='/' element={<Home />} />
              <Route path='about' element={<About />} />
              <Route path='product' element={<ProductPage />}>
                <Route path='all' element={<ProductAll />} />
                <Route path='search/:keyword' element={<ProductSearch />} />
                <Route path='dog' element={<ProductAll />} />
                <Route path='test' element={<ProductAll />} />
                <Route path='cat' element={<ProductAll />} />
                <Route path='detail/:productId' element={<SingleProduct />} />
              </Route>
              <Route path='blogs' element={<Blogs />} />
              <Route path='cart' element={<Cart />} />
              <Route path='order/query' element={<Order />} />
              <Route path='user-order/:orderNumber' element={<SingleOrder />} />
              <Route path='faq' element={<Faq />} />
            </Route>
            <Route path='login' element={<AdminLogin />} />
            <Route path='admin' element={<AdminIndex />}>
              <Route path='products' element={<Products />}>
                <Route path='all' element={<AllProducts />} />
                <Route path='dog' element={<DogProducts />} />
                <Route path='cat' element={<CatProducts />} />
              </Route>
              <Route path='orders' element={<Orders />} />
              <Route path='single-order/:orderId' element={<SingleOrder />} />
            </Route>
            <Route path='*' element={<div>404 Not Found</div>}></Route>
          </Routes>
        </BrowserRouter>
      </BlogFilterContext.Provider>
    </>
  );
}

export default App;
export const BlogFilterContext = createContext();
