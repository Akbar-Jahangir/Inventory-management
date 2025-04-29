export interface ButtonProps {
    label? :string;
    type:"submit" | "reset" | "button" | undefined;
    btnClass:string;
    onclick?:()=>void
    disabled?:boolean
}                 