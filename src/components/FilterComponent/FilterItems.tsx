import { FilterSvg } from "../IconsSvgs";
import { FilterProps } from "./Filteritems.interface";

export const Filter: React.FC<FilterProps> = ({
  name,
  value,
  onChange,
  options,
  placeholder = "Filter",
}) => {
  return (
    <div className="px-2 border text-[14px] rounded flex items-center w-fit h-[40px] gap-2">
      <FilterSvg />
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="rounded focus:outline-none appearance-none dark:bg-[#1E1E1E] dark:text-white"
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
