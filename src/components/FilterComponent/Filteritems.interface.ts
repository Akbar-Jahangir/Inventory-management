export interface FilterProps {
    label?: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    options: string[] ;
    placeholder?: string;
  }