import maggi from "../assets/images/maggi.png";
import { EditSvg } from "../components/IconsSvgs";
import { useParams } from "react-router";
import useProducts from "../hooks/useProduct";
import { Product } from "../interfaces/product";
import useVendors from "../hooks/useVendor";
import { Vendor } from "../interfaces/vendor";
import { useState } from "react";
import EditProduct from "../modals/editProductModal";
import Button from "../components/Button/Button";

const ProductDetail: React.FC = () => {
  const [isModalOpen, setIsModaOpen] = useState<boolean>(false);
  const stockLocations = [
    { storeName: "Sulur Branch", stockInHand: 15 },
    { storeName: "Singanallur Branch", stockInHand: 19 },
  ];

  const { id } = useParams<string>();
  let products: Product[] = useProducts();

  let getProductDetails = products.find((items) => {
    if (items.productId === id) {
      return items;
    }
  });

  let vendors: Vendor[] = useVendors();

  let getVendorDetails = vendors.find((items) => {
    if (items.vendorId === getProductDetails?.vendor) {
      return items;
    }
  });

  return (
    <div className="w-[100%] pb-1">
      <div className="bg-white dark:bg-[#1E1E1E] rounded px-[16px] pb-[20px] pt-[20px] h-fit overflow-x-scroll xs:max-w-[430px] md:max-w-[616px] lg:max-w-[100%]">
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex justify-center items-center">
            <EditProduct
              productDetails={getProductDetails}
              closeModal={() => setIsModaOpen(false)}
            />
          </div>
        )}
        <div className="flex items-center justify-between pb-2">
          <h3 className="dark:text-white">{getProductDetails?.productName}</h3>
          <div className="flex gap-4">
            <button
              className="px-4 py-2 dark:text-white border border-slate rounded-md flex items-center gap-2"
              onClick={() => setIsModaOpen(true)}
            >
              <EditSvg />
              Edit
            </button>
            <Button
              type="button"
              label="Download all"
              btnClass="w-[110px] h-[39px] text-sm rounded dark:text-white border dark:border-white "
            />
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-4 border-b sm:max-w-[430px] md:max-w-[100%] dark:text-white">
          <ul className="flex flex-col md:flex-row gap-8  sm:text-xs md:text-lg">
            <li className="pb-2 border-b-2 border-blue-500">Overview</li>
            <li className="pb-2 hover:text-gray-700 cursor-pointer">
              Purchases
            </li>
            <li className="pb-2 hover:text-gray-700 cursor-pointer">
              Adjustments
            </li>
            <li className="pb-2 hover:text-gray-700 cursor-pointer">History</li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="mt-6 flex flex-col lg:flex-row justify-between gap-8 dark:text-white">
          {/* Left Section */}
          <div className="flex-1 flex-col">
            {/* Primary Details */}

            <div className="text-gray-600 space-y-6 sm:max-w-[90%] md:w-[377px] ">
              <h3 className="text-lg font-semibold">Primary Details</h3>
              <div className="flex w-full justify-between ">
                <p className="text-gray w-[35%]">Product name</p>
                <span className="w-[35%]">
                  {getProductDetails?.productName}
                </span>
              </div>
              <div className="flex w-full justify-between ">
                <p className="text-gray w-[35%]">Product ID</p>
                <span className="w-[35%]">{getProductDetails?.productId}</span>
              </div>
              <div className="flex w-full justify-between ">
                <p className="text-gray w-[35%]">Product category</p>
                <span className="w-[35%]">{getProductDetails?.category}</span>
              </div>
              <div className="flex w-full justify-between ">
                <p className="text-gray">Expiry Date</p>
                <span className="w-[35%]">{getProductDetails?.expiryDate}</span>
              </div>
              <div className="flex w-[100%] justify-between ">
                <p className="text-gray w-[35%]">Threshold Value</p>
                <span className="w-[35%] ">
                  {getProductDetails?.thresholdValue}
                </span>
              </div>

              <div className="text-gray-600 space-y-6 md:w-[377px]">
                <h3 className="text-lg font-semibold">Supplier Details</h3>
                <div className="flex w-full justify-between ">
                  <p className="text-gray">Supplier name</p>
                  <span className="w-[35%]">
                    {getVendorDetails?.vendorName}
                  </span>
                </div>
                <div className="flex w-[100%] justify-between ">
                  <p className="text-gray w-[35%]">Contact Number</p>
                  <span className="w-[35%] ">
                    {getVendorDetails?.contactNumber}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col items-center space-y-10  md:w-[35%] ">
            <img
              src={maggi}
              alt="Product"
              className="w-40 h-40 object-contain mb-4 border-2 border-dashed p-3"
            />
            <div className="text-gray-600 space-y-6 w-[90%] items-end ">
              <div className="flex w-full justify-between ">
                <p className="text-gray ">Opening Stock</p>
                <span>40</span>
              </div>
              <div className="flex w-full justify-between ">
                <p className="text-gray ">Remaining Stock</p>
                <span>34</span>
              </div>
              <div className="flex w-full justify-between ">
                <p className="text-gray ">On the way</p>
                <span>15</span>
              </div>
              <div className="flex w-full justify-between ">
                <p className="text-gray">Threshold value</p>
                <span>12</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stock Locations */}
        <div className="mt-10 max-w-[430px] dark:text-white">
          <h3>Stock Locations</h3>
          <table className=" mt-[22px] text-left w-full">
            <thead className="bg-[#F0F1F3] text-darkgray dark:text-white dark:bg-[#121212]">
              <tr className="flex justify-between pl-1 pr-6">
                <th className="py-2  ">Store Name</th>
                <th className="py-2  border-b ">Stock in Hand</th>
              </tr>
            </thead>
            <tbody>
              {stockLocations.map((location, index) => (
                <tr
                  key={index}
                  className="flex justify-between border-b pl-1 pr-6"
                >
                  <td className="py-2 text-gray ">{location.storeName}</td>
                  <td className="py-2 text-blue">{location.stockInHand}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
