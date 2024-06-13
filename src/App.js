import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import { HomePage } from "./pages/home/Home";
import { AboutPage } from "./pages/about/About";
import { LoginPage } from "./pages/auth/Login";
import { RegisterPage } from "./pages/auth/Register";
import { Error404 } from "./pages/error/Error";
import { LayoutDefault } from "./layouts/LayoutDefault";
import { AboutUsPage } from "./pages/about/AboutUs";
import { AboutHistory } from "./pages/about/ABoutHistory";
import { AboutGeneral } from "./pages/about/AboutGeneral";
import { ProductPage } from "./pages/product/Product";
import { ProductDetailPage } from "./pages/product/ProductDetail";
import { ProtectedRoute } from "./components/protectedRoute";
import { ProfilePage } from "./pages/profile/Profile";
import { CartPage } from "./pages/cart/Cart";
import { Provider } from "react-redux";
import { store } from './store';

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route element={<LayoutDefault />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />}>
                <Route index element={<AboutGeneral />} />
                <Route path="/aboutUs" element={<AboutUsPage />} />
                <Route path="/aboutHistory" element={<AboutHistory />} />
              </Route>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/product" >
                <Route index element={<ProductPage />} />
                <Route path=":productID" element={<ProductDetailPage />} />
              </Route>
              <Route path="/cart" element={<CartPage />} />
              <Route path="*" element={<Error404 />} />
              <Route path="profile" element={<ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
