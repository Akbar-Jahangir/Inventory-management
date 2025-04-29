import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import Button from "../Button/Button";
import { TableProps } from "./Table.inteface";
import { searchItem } from "../../store/productSearchSlice/productSearchSlice";
import AddProduct from "../../modals/addProductModal";
import { Filter } from "../FilterComponent/FilterItems";
import AddVendor from "../../modals/addSupplierModal";

const Table: React.FC<TableProps> = ({
  tableName,
  tablehead,
  tableData,
  itemsPerPage = 10,
  tableModal,
  tableFilter,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  // const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [filter, setFilter] = useState<string>("");

  const dispatch = useDispatch();
  const term = useSelector((state: RootState) => state.search.term);

  useEffect(() => {
    dispatch(searchItem(filter));
  }, [filter, dispatch]);

  // Filter and Paginate
  const filteredData = tableData.filter((item) =>
    Object.values(item).some((value) =>
      value?.toString().toLowerCase().includes(term.toLowerCase())
    )
  );

  

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePrevious = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNext = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  return (
    <div className="relative w-full">
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex justify-center items-center">
          {tableModal === "AddProduct" ? (
            <AddProduct closeModal={() => setIsModalOpen(false)} />
          ) : (
            <AddVendor closeModal={() => setIsModalOpen(false)} />
          )}
        </div>
      )}
      <div className="bg-white dark:bg-[#1E1E1E] rounded px-[16px] pb-[20px] pt-[20px] h-fit overflow-x-scroll xs:max-w-[430px] md:max-w-[616px] lg:max-w-[100%]">
        <div className="w-[200vw] lg:w-[100%] md:w-[100vw]">
          <div className="flex justify-between items-center mb-4">
            <h3 className="dark:text-white">{tableName}</h3>
            <div className="flex space-x-2">
              <Button
                type="button"
                label="Add Product"
                onclick={() => setIsModalOpen(true)}
                btnClass="w-[110px] h-[39px] text-sm rounded bg-primary text-white"
              />
              {tableFilter === "InventoriesFilter" ? (
                <Filter
                  name="Filters"
                  value={filter}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                    setFilter(e.target.value)
                  }
                  options={["In- stock","Out of stock", "Low stock"]}
                  placeholder="Filters"
                />
              ) : (
                <Filter
                  name="Filters"
                  value={filter}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                    setFilter(e.target.value)
                  }
                  options={["Taking Return","Not Taking Return"]}
                  placeholder="Filters"
                />
              )}

              <Button
                type="button"
                label="Download all"
                btnClass="w-[110px] h-[39px] text-sm rounded dark:text-white border  dark:border-white "
              />
            </div>
          </div>

          <table className="w-[100%] flex flex-col gap-y-4 text-sm text-left">
            <thead className="text-gray dark:text-white dark:bg-[#121212] font-normal w-[100%]">
              <tr className="flex justify-between w-[100%]">
                {tablehead.map((header, index) => (
                  <th key={index} className="table-col">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {paginatedData.length > 0 ? (
                paginatedData
              ) : (
                <tr>
                  <td colSpan={tablehead.length} className="text-center py-4 dark:text-white">
                    No Data Available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          {filteredData.length > itemsPerPage && (
            <div className="flex justify-between items-center mt-4">
              <Button
                type="button"
                label="Previous"
                onclick={handlePrevious}
                disabled={currentPage === 1}
                btnClass="w-[92px] h-[38px] text-sm rounded dark:text-white border dark:border-white border-black"
              />
              <span>
                Page {currentPage} of {totalPages}
              </span>
              <Button
                type="button"
                label="Next"
                onclick={handleNext}
                disabled={currentPage === totalPages}
                btnClass="w-[66px] h-[38px] text-sm rounded dark:text-white border dark:border-white border-black"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Table;
