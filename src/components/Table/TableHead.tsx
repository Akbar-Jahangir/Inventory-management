import React from "react";
import { TableProps } from "./Table.inteface";

const TableHead:React.FC<TableProps> = ({
  tablehead,
}) => {
  return (
    <>
      <thead className="text-gray dark:text-white dark:bg-[#121212] font-normal w-[100%]">
        <tr className="flex justify-between w-[100%]">
          {tablehead.map((item: string, index: number) => (
            <th key={index} className="table-col">
              {item}
            </th>
          ))}
        </tr>
      </thead>
    </>
  );
};

export default TableHead;
