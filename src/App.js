import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { GlobalStyle, ResetStyle } from "./components/common/globalStyle";
import Layout from "./components/common/Layout";
import { Orders, Products } from "./components/sectionAdmin";
import AllProducts from "./components/sectionAdmin/products/AllProducts";
import CatProducts from "./components/sectionAdmin/products/CatProducts";
import DogProducts from "./components/sectionAdmin/products/DogProducts";
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
  ProductCat,
  ProductDog,
  ProductPage,
} from "./pages";

function App() {
  return (
    <>
      <ResetStyle />
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='home' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='product' element={<ProductPage />}>
              <Route path='all' element={<ProductAll />} />
              <Route path='dog' element={<ProductDog />} />
              <Route path='cat' element={<ProductCat />} />
            </Route>
            <Route path='blogs' element={<Blogs />} />
            <Route path='cart' element={<Cart />} />
            <Route path='order/query' element={<Order />} />
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
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
