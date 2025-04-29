import React, { useState } from "react";
import { InputField } from "../components/Input/Input";
import { DropdownField } from "../components/DropDownField/DropdownInput";
import { useDispatch } from "react-redux";
import { addProduct } from "../store/productSlice/productSlice";
import { uid } from "uid";
import Button from "../components/Button/Button";
import useVendor from "../hooks/useVendor";

interface AddProductProps {
  closeModal: () => void;
}

const AddProduct: React.FC<AddProductProps> = ({ closeModal }) => {
  const vendors = useVendor();
  const dispatch = useDispatch();

  const vendorsList = vendors.map((vendor) => {
    return { vendorName: vendor.vendorName, vendorId: vendor.vendorId };
  });

  const [formData, setFormData] = useState({
    productName: "",
    productId: "",
    category: "",
    buyingPrice: "",
    quantity: "",
    unit: "",
    expiryDate: "",
    thresholdValue: "",
    availability: "",
    vendor: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission behavior
    const productId = uid();

    // Add validation to ensure all required fields are filled
    if (!formData.productName || !formData.category || !formData.buyingPrice) {
    alert("Please fill out all required fields.");
      return;
    }

    const updatedFormData = { ...formData, productId };

    try {
      dispatch(addProduct(updatedFormData)); // Dispatch Redux action
      closeModal();
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div
      className="w-[90%] h-[95vh] overflow-y-scroll"
      style={{ scrollbarWidth: "none" }}
    >
      <div
        className="h-fit max-w-[430px] mx-auto bg-white shadow-lg rounded px-6 py-4 flex flex-col items-center dark:text-white text-gray space-y-3
       dark:bg-[#1E1E1E] dark:rounded-lg dark:p-4"
      >
        <h2 className="text-xl font-semibold mb-6">New Product</h2>
        <form onSubmit={handleSubmit}>
          <InputField
            label="Product Name"
            placeholder="Enter Product Name"
            name="productName"
            type="text"
            value={formData.productName}
            onChange={handleChange}
          />

          <DropdownField
            label="Category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            options={[
              "Food",
              "Soft Drinks",
              "Cleaning Products",
              "Energy Drinks",
            ]}
            placeholder="Select a category"
          />
          <InputField
            label="Buying Price"
            placeholder="Enter buying price"
            name="buyingPrice"
            value={formData.buyingPrice}
            onChange={handleChange}
            type="text"
          />
          <InputField
            label="Quantity"
            placeholder="Enter product quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            type="number"
          />
          <InputField
            label="Unit"
            type="text"
            placeholder="Enter product unit"
            name="unit"
            value={formData.unit}
            onChange={handleChange}
          />
          <InputField
            label="Expiry Date"
            placeholder="Enter expiry date"
            name="expiryDate"
            value={formData.expiryDate}
            onChange={handleChange}
            type="date"
          />
          <InputField
            label="Threshold Value"
            placeholder="Enter threshold value"
            name="thresholdValue"
            value={formData.thresholdValue}
            onChange={handleChange}
            type="number"
          />
          <DropdownField
            label="Availability"
            name="availability"
            value={formData.availability}
            onChange={handleChange}
            options={["In- stock", "Out of stock", "Low  stock"]}
            placeholder="Select availability"
          />
          <DropdownField
            label="Vendors"
            name="vendor"
            value={formData.vendor}
            onChange={handleChange}
            options={vendorsList}
            placeholder="Select vendors"
          />
          <div className="flex justify-end gap-3 mt-6">
            <Button
              type="reset"
              label="Discard"
              onclick={closeModal}
              btnClass="w-[110px] h-[39px] text-sm rounded dark:text-white border dark:border-white "
            />
            <Button
              type="submit"
              label="Add Product"
              btnClass="w-[110px] h-[39px] text-sm rounded border bg-primary text-white"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
