import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { GlobalStyle, ResetStyle } from "./components/common/globalStyle";
import {
  About,
  AdminIndex,
  AdminLogin,
  Blogs,
  Cart,
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
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='product' element={<ProductPage />}>
            <Route path='all' element={<ProductAll />} />
            <Route path='dog' element={<ProductDog />} />
            <Route path='cat' element={<ProductCat />} />
          </Route>
          <Route path='blogs' element={<Blogs />} />
          <Route path='login' element={<AdminLogin />} />
          <Route path='index' element={<AdminIndex />}>
            <Route />
          </Route>
          <Route path='cart' element={<Cart />} />
          <Route path='order/query' element={<Order />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
