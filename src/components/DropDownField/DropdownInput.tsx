import { DropdownFieldProps } from "./DropdownInput.interface";

export const DropdownField: React.FC<DropdownFieldProps> = ({
  label,
  name,
  value,
  onChange,
  options,
  placeholder = "Select an option",
}) => {
  return (
    <div className="mb-4 flex justify-between items-center">
      <label className="text-sm mb-1 font-semibold">{label}</label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-[60%] px-2 py-2 border rounded text-black dark:text-white  dark:border-[#FFFFFF3B] dark:bg-[#1E1E1E] "
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option: any) => (
          <option
            key={option?.vendorId ?? option}
            value={option?.vendorId ?? option}
            
          >
            {option?.vendorName ?? option}
          </option>
        ))}
      </select>
    </div>
  );
};
