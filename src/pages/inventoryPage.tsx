import { MdDelete } from "react-icons/md";
import Table from "../components/Table/Table";
import useProduct from "../hooks/useProduct";
import { Product } from "../interfaces/product";
import OverAllInventory from "../components/InventorySummary/OverAllInventory";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../store/DeleteProductSlice/deleteProductSlice";
import { useNavigate } from "react-router";

function InventoryPage() {
  const products: Product[] = useProduct();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = (e: React.MouseEvent, id: string) => {
    e?.stopPropagation();
    dispatch(deleteProduct(id));
  };

  const handleRowClick = (id: string) => {
    navigate(`/productdetail/${id}`);
  };

  const renderRow = (product: Product) => (
    <tr key={product.productId} className="table-row" onClick={() =>
      handleRowClick(
        product?.["productId"]
      )
    }>
      <td className="table-col">{product.productName}</td>
      <td className="table-col">₹ {product.buyingPrice}</td>
      <td className="table-col">{product.quantity} Packets</td>
      <td className="table-col">{product.thresholdValue} Packets</td>
      <td className="table-col">{product.expiryDate}</td>
      <td className="table-col">
        <span
          className={`py-1 text-xs ${product.availability === "In- stock"
            ? "text-success"
            : product.availability === "Out of stock"
              ? "text-[#DA3E33]"
              : "text-warning"
            }`}
        >
          {product.availability}
        </span>
      </td>
      <td className="table-col">
        <MdDelete
          className="text-red cursor-pointer w-6 h-6"
          onClick={(e) => handleDelete(e, product.productId)}
        />
      </td>
    </tr>
  );

  return (
    <>
      <div className="w-[100%] bg-lightgray dark:bg-[#121212] flex md:flex-row flex-col">
        <div className="w-full flex flex-col gap-y-4">
          <OverAllInventory />
          <Table
            tableName="Products"
            tablehead={[
              "Products",
              "Buying Price",
              "Quantity",
              "Threshold Value",
              "Expiry Date",
              "Availability",
              "Delete",
            ]}
            tableData={products.map((product) => renderRow(product))}
            tableModal='AddProduct'
            tableFilter='InventoriesFilter'

          />
        </div>
      </div>
    </>
  );
}

export default InventoryPage;
