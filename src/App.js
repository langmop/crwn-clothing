import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/home.components";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import { createContext, useEffect, useState } from "react";
import { UserProvider } from "./contexts/userContext";
import Shop from "./routes/shop/shop.component";
import { CartProvider } from "./contexts/cartContext";
import ProductCategoryView from "./components/product-category-view/product-category-view";
import { ProductProvider } from "./contexts/productContext";

const initialState = {
  user: null,
};

const App = () => {
  return (
    <UserProvider>
      <CartProvider>
        <ProductProvider>
          <Routes>
            <Route path="/" element={<Navigation />}>
              <Route index element={<Home />} />
              <Route path="/shop">
                <Route index element={<Shop />} />
                <Route path=":product" element={<ProductCategoryView />} />
              </Route>
              <Route path="/sign-in" element={<Authentication />} />
            </Route>
          </Routes>
        </ProductProvider>
      </CartProvider>
    </UserProvider>
  );
};

export default App;
