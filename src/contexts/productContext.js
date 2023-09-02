import { noop } from "lodash";
import { createContext, useState, useEffect } from "react";
import { getCategoriesAndDocument } from "../utils/firebase.util";

export const ProductContext = createContext(null);

export const ProductProvider = ({ children }) => {
  const [productData, setProductData] = useState({  });
  const value = { productData, setProductData };

  useEffect(() => {
    const getData = async () => {
      const data = await getCategoriesAndDocument();
      setProductData(data);
    };
    getData();
  }, []);

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
