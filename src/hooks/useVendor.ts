import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { RootState } from "../store/store";
import { Vendor } from "..//interfaces/vendor";

const useVendor = (): Vendor[] => {
  const [storedVendors, setstoredVendors] = useState<Vendor[]>([]);
  const vendorsList: Vendor[] = useSelector(
    (state: RootState) => state.vendorsList.vendors
  );

  useEffect(() => {
    const openRequest = indexedDB.open("vendors", 1);

    openRequest.onupgradeneeded = () => {
      const db = openRequest.result;
      if (!db.objectStoreNames.contains("vendor")) {
        const store = db.createObjectStore("vendors", { keyPath: "vendorId" });
        store.createIndex("vendorName", "vendorName", { unique: false });
        store.createIndex("product", "product", { unique: false });
        store.createIndex("vendorId", "vendorId", { unique: true });
        store.createIndex("category", "category", { unique: false });
        store.createIndex("buyingPrice", "buyingPrice", { unique: false });
        store.createIndex("contactNumber", "contactNumber", { unique: false });
        store.createIndex("type", "type", { unique: false });
      }
    };

    openRequest.onsuccess = () => {
      const db = openRequest.result;
      const transaction = db.transaction("vendors", "readwrite");
      const storeObject = transaction.objectStore("vendors");

      vendorsList.forEach((vendor) => {
        const request = storeObject.put(vendor);

        request.onsuccess = () => {
          console.log("Vendors successfully added");
        };

        request.onerror = () => {
          console.error("Error while adding vendors to IndexedDB");
        };
      });

      const getAllRequest = storeObject.getAll();

      getAllRequest.onsuccess = () => {
        setstoredVendors(getAllRequest.result);
      };
      getAllRequest.onerror = () => {
        console.error("Error fetching vendors from IndexedDB");
      };
    };

    openRequest.onerror = () => {
      console.error("Failed to open IndexedDB");
    };
  }, [vendorsList]);

  return storedVendors;
};

export default useVendor;
