import Table from "../components/Table/Table";
import useVendor from "../hooks/useVendor";
import { Vendor } from "../interfaces/vendor";

function Vendors() {
  const vendors: Vendor[] = useVendor();

  const renderRow = (vendor: Vendor) => (
    <tr key={vendor.vendorId}  className="table-row">
      <td className="table-col">{vendor.vendorName}</td>
      <td className="table-col">{vendor.product}</td>
      <td className="table-col">{vendor.contactNumber}</td>
      <td className="table-col">{vendor.category}</td>
      <td className="table-col">
        <span
          className={`py-1 text-xs ${
            vendor.type === "Taking Return" ? "text-success" : "text-[#DA3E33]"
          }`}
        >
          {vendor.type}
        </span>
      </td>
      <td className="table-col">₹ {vendor.buyingPrice}</td>
    </tr>
  );

  return (
    <>
      <div className="w-[100%] bg-lightgray dark:bg-[#121212] flex md:flex-row flex-col">
        <div className="w-full flex flex-col gap-y-4">
          <Table
            tableName="Vendors"
            tablehead={[
              "Vendor Name",
              "Product",
              "Contact Number",
              "Email",
              "Type",
              "On the way",
            ]}
            tableData={vendors.map((vendor) => renderRow(vendor))}
          />
        </div>
      </div>
    </>
  );
}

export default Vendors;
