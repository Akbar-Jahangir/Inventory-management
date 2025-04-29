export interface DropdownFieldProps {
    label?: string|undefined;
    name: string|undefined;
    value: string|undefined;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    options: string[] | { vendorName: string; vendorId: string }[];
    placeholder?: string;
  }