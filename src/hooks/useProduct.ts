import { RootState } from "../store/store";
import { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { Product } from "../interfaces/product";

const useProduct = (): Product[] => {
  const [storedProducts, setStoredProducts] = useState<Product[]>([]);
  const processedProducts = useRef<Set<string>>(new Set()); // Track processed product IDs

  const productsList: Product[] = useSelector(
    (state: RootState) => state.productsList.products
  );

  const productId: string = useSelector(
    (state: RootState) => state.delete.productId
  );

  useEffect(() => {
    const openRequest = indexedDB.open("products", 1);

    openRequest.onupgradeneeded = () => {
      const db = openRequest.result;
      if (!db.objectStoreNames.contains("product")) {
        const store = db.createObjectStore("product", { keyPath: "productId" });
        store.createIndex("productName", "productName", { unique: false });
        store.createIndex("productId", "productId", { unique: true });
        store.createIndex("category", "category", { unique: false });
        store.createIndex("buyingPrice", "buyingPrice", { unique: false });
        store.createIndex("quantity", "quantity", { unique: false });
        store.createIndex("unit", "unit", { unique: false });
        store.createIndex("expiryDate", "expiryDate", { unique: false });
        store.createIndex("thresholdValue", "thresholdValue", {
          unique: false,
        });
        store.createIndex("availability", "availability", { unique: false });
      }
    };

    openRequest.onsuccess = () => {
      const db = openRequest.result;
      const transaction = db.transaction("product", "readwrite");
      const storeObject = transaction.objectStore("product");

      // Only add/update products that are not already processed
      productsList.forEach((product) => {
        if (!processedProducts.current.has(product.productId)) {
          const request = storeObject.put(product);

          request.onsuccess = () => {
            console.log("Product successfully added or updated:", product);
            processedProducts.current.add(product.productId); // Mark as processed
          };

          request.onerror = () => {
            console.error("Error while adding product to IndexedDB:", product);
          };
        }
      });

      // Fetch all products from IndexedDB
      const getAllRequest = storeObject.getAll();

      getAllRequest.onsuccess = () => {
        setStoredProducts(getAllRequest.result);
      };

      getAllRequest.onerror = () => {
        console.error("Error fetching products from IndexedDB");
      };

      // Delete product if productId is provided
      if (productId) {
        const deleteRequest = storeObject.delete(productId);

        deleteRequest.onsuccess = () => {
          console.log("Product deleted successfully");
          // Re-fetch products after deletion
          const getAllRequestAfterDelete = storeObject.getAll();
          getAllRequestAfterDelete.onsuccess = () => {
            setStoredProducts(getAllRequestAfterDelete.result);
          };
        };

        deleteRequest.onerror = () => {
          console.log("Error while deleting product");
        };
      }
    };

    openRequest.onerror = () => {
      console.error("Failed to open IndexedDB");
    };
  }, [productsList, productId]);

  return storedProducts;
};

export default useProduct;
