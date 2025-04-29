import React, { useState } from "react";
import { InputField } from "../components/Input/Input";
import { DropdownField } from "../components/DropDownField/DropdownInput";
import { useDispatch } from "react-redux";
import { uid } from "uid";
import { addVendor } from "../store/vendorSlice/vendorSlice";
import Button from "../components/Button/Button";

interface AddProductProps {
  closeModal: () => void; // Prop type for closeModal
}

const AddVendor: React.FC<AddProductProps> = ({ closeModal }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    vendorName: "",
    vendorId: "",
    product: "",
    category: "",
    buyingPrice: "",
    contactNumber: "",
    type: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const vendorId = uid();
    const upadtedFormData = { ...formData, vendorId };
    dispatch(addVendor(upadtedFormData));
    closeModal();
  };

  return (
    <div
      className="w-[90%] h-[95vh] overflow-y-scroll flex items-center"
      style={{ scrollbarWidth: "none" }}
    >
      <div
        className="h-fit max-w-[430px]  mx-auto bg-white shadow-lg rounded px-6 py-4   flex flex-col items-center dark:text-white text-gray space-y-3
       dark:bg-[#1E1E1E] dark:rounded-lg dark:p-4"
      >
        <h2 className="text-xl font-semibold mb-6">New Vendor</h2>
        <form onSubmit={handleSubmit}>
          <InputField
            label="Vendor Name"
            type="text"
            placeholder="Enter vendor name"
            name="vendorName"
            value={formData.vendorName}
            onChange={handleChange}
          />

          <InputField
            label="Product"
            placeholder="Enter Product"
            name="product"
            value={formData.product}
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
            placeholder="Select product category"
          />
          <InputField
            label="Buying Price"
            placeholder="Enter buying price"
            name="buyingPrice"
            value={formData.buyingPrice}
            onChange={handleChange}
            type="number"
          />
          <InputField
            label="Contact Number"
            placeholder="Enter supplier contact number"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            type="tel"
          />

          <DropdownField
            label="Type"
            name="type"
            value={formData.type}
            onChange={handleChange}
            options={["Taking Return", "Not Taking Return"]}
            placeholder="Select Type"
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
              label="Add Supplier"
            
              btnClass="w-[110px] h-[39px] text-sm rounded border bg-primary text-white"
            />

            
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddVendor;
