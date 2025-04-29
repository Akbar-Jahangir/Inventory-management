import React, { useState } from "react";
import { InputField } from "../components/Input/input";
import { DropdownField } from "../components/DropDownField/DropdownInput";
import { useDispatch } from "react-redux";
import { addProduct } from "../store/ProductSlice/productSlice";
import { Product } from '../interfaces/product'
import useVendors from "../hooks/useVendor";
import Button from "../components/Button/Button";

interface EditProductProps {
  closeModal: () => void;
  productDetails: Product | undefined;
}

const EditProduct: React.FC<EditProductProps> = ({
  closeModal,
  productDetails,
}) => {
  let vendors = useVendors();

  let vendorsList = vendors.map((vendor) => {
    return { vendorName: vendor.vendorName, vendorId: vendor.vendorId };
  });
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    productName: productDetails?.productName,
    productId: productDetails?.productId,
    category: productDetails?.category,
    buyingPrice: productDetails?.buyingPrice,
    quantity: productDetails?.quantity,
    unit: productDetails?.unit,
    expiryDate: productDetails?.expiryDate,
    thresholdValue: productDetails?.thresholdValue,
    availability: productDetails?.availability,
    vendor: productDetails?.vendor,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(addProduct(formData));
    closeModal();
  };

  return (
    <div
      className="w-[90%] h-[95vh] overflow-y-scroll"
      style={{ scrollbarWidth: "none" }}
    >
      <div
        className="h-fit max-w-[430px]  mx-auto bg-white shadow-lg rounded px-6 py-4   flex flex-col items-center dark:text-white text-gray space-y-3
       dark:bg-[#1E1E1E] dark:rounded-lg dark:p-4"
      >
        <h2 className="text-xl font-semibold mb-6">New Product</h2>
        <form onSubmit={handleSubmit}>
          <InputField
            label="Product Name"
            placeholder="Enter Product Name"
            name="productName"
            value={formData.productName}
            onChange={handleChange}
            type="text"
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
            placeholder="Enter product unit"
            name="unit"
            value={formData.unit}
            onChange={handleChange}
            type="text"
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
              label="Edit Product"
              onclick={closeModal}
              btnClass="w-[110px] h-[39px] text-sm rounded border bg-primary text-white"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
