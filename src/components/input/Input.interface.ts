 
export interface InputFieldProps {
    label?: string| undefined;
    placeholder: string| undefined;
    type: string| undefined;
    name: string| undefined;
    value: string | number| undefined;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }
 
  
  
 