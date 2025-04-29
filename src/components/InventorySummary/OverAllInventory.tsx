import { useMemo } from "react";
import useProductsDB from "../../hooks/useProduct";
import { Product } from "../../interfaces/product";
import InventoryStateCard from "./InventoryCard";

function OverAllInventory() {
  const products: Product[] = useProductsDB()

  // Calculate categories
  const categories: string[] = useMemo(() => {
    const categorySet = new Set<string>();
    products.forEach((product) => {
      categorySet.add(product.category); // Avoid duplicates
    });
    return Array.from(categorySet); // Convert the Set back to an array
  }, [products]);

  // Calculate total buying price using
  const totalBuyingPrice = useMemo(() => {
    return products.reduce((accumulator, product) => {
      return accumulator + parseFloat(product.buyingPrice || "0");
    }, 0);
  }, [products]);

  // Calculate the total in-stock and out-of-stock counts
  const totalOutOfStock = useMemo(() => {
    return products.filter((product) => product.availability === "Out of stock")
      .length;
  }, [products]);

  const totalInStock = useMemo(() => {
    return products.filter((product) => product.availability === "In-stock")
      .length;
  }, [products]);

  const states = [
    {
      title: "Categories",
      value1: categories.length,
      description1: "Categories",
      value2: "",
      description2: "",
    },
    {
      title: "Total Products",
      value1: products.length,
      description1: "Products",
      value2: `₹${totalBuyingPrice}`, // Formatting to two decimal places for display
      description2: "Total price",
    },
    {
      title: "Top Selling",
      value1: "0",
      description1: "Last 7 days",
      value2: "₹0",
      description2: "Cost",
    },
    {
      title: "Low Stocks",
      value1: totalInStock,
      description1: "In stock",
      value2: totalOutOfStock,
      description2: "Not in stock",
    },
  ];

  return (
    <>
      <div className="bg-white dark:text-white dark:bg-[#1E1E1E] rounded px-[16px] pb-[20px] pt-[20px] flex flex-col xs:max-w-[430px] md:max-w-[616px] lg:max-w-[100%] ">
        <h3>Overall Inventory</h3>

        <div className="w-[100%] inventory-items">
          {states.map((stat, index) => (
            <InventoryStateCard
              key={index}
              title={stat.title}
              value1={stat.value1}
              value2={stat.value2}
              description1={stat.description1}
              description2={stat.description2}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default OverAllInventory;
