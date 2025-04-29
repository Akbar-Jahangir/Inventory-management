import { useEffect, useState } from "react";
import { User } from "../interfaces/user";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const useRegister = (): User[] => {
  const usersList: User[] = useSelector(
    (state: RootState) => state.signUp.users
  );

  const [storedUsers, setStoredUsers] = useState<User[]>([]);

  useEffect(() => {
    const openRequest = indexedDB.open("users", 1);

    openRequest.onupgradeneeded = () => {
      const db = openRequest.result;
      if (!db.objectStoreNames.contains("user")) {
        const store = db.createObjectStore("users", { keyPath: "userId" });
        store.createIndex("userId", "userId", { unique: true });
        store.createIndex("userName", "userName", { unique: false });
        store.createIndex("userEmail", "userEmail", { unique: true });
        store.createIndex("userPassword", "userPassword", { unique: false });
      }
    };

    openRequest.onsuccess = () => {
      const db = openRequest.result;
      const transaction = db.transaction("users", "readwrite");
      const storeObject = transaction.objectStore("users");
      usersList.forEach((user) => {
        const request = storeObject.put(user);

        request.onsuccess = () => {
          console.log("Users successfully added");
        };

        request.onerror = () => {
          console.error("Error while adding users to IndexedDB");
        };
      });

      const request = storeObject.getAll();
      request.onsuccess = () => {
        setStoredUsers(request.result);
      };

      request.onerror = () => {
        console.log("Faild to fetch usersData from indexDB");
      };
    };
    openRequest.onerror = () => {
      console.log("Failed to create User IndexDB");
    };
  }, [usersList]);
  return storedUsers;
};
export default useRegister;
