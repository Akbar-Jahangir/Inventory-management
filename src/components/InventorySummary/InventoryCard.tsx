import React from "react";
import { DataProps } from "./InventoryCard.interface";

const InventoryCard: React.FC<DataProps> = ({
  title,
  value1,
  description1,
  value2,
  description2,
}) => {
  return (
    <div>
      <h4
        className={`${
          title === "Categories"
            ? "text-primary"
            : title === "Total Products"
            ? "text-warning"
            : title === "Top Selling"
            ? "text-[#845EBC]"
            : "text-red"
        }`}
      >
        {title}
      </h4>
      <div className="flex gap-16">
        <div>
          <p className="my-3">{value1}</p>
          <p className="text-lightgray text-xs">{description1}</p>
        </div>

        <div>
          <p className="my-3">{value2}</p>
          <p className="text-lightgray text-xs">{description2}</p>
        </div>
      </div>
    </div>
  );
};

export default InventoryCard;
