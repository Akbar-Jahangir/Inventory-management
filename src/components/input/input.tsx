import { InputFieldProps } from "./Input.interface";

export const Input: React.FC<InputFieldProps> = ({
  label,
  type,
  placeholder,
  onChange,
  value,
}) => {
  return (
    <div className="flex flex-col space-y-1">
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className="w-[100%] py-[8px] px-[14px] border rounded-md focus:outline-none  dark:border-[#FFFFFF3B] dark:bg-[#1E1E1E]"
      />
    </div>
  );
};

export const InputField: React.FC<InputFieldProps> = ({
  label,
  placeholder,
  type = "text",
  name,
  value,
  onChange,
}) => {
  return (
    <div className="mb-4 flex justify-between items-center">
      <label className="text-sm mb-1 font-semibold">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-[60%] px-2 py-2 border rounded focus:outline-none dark:border-[#FFFFFF3B] text-black dark:text-white dark:bg-[#1E1E1E] dark:hover:bg-[#1E1E1E]"
      />
    </div>
  );
};
