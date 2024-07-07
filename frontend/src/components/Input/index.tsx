import { useState, useEffect } from "react";
// import { FieldValues, UseFormRegister } from "react-hook-form"
import { Input } from "@/styles/components/Input";


export interface InputPropsType {
  type:string,
  name: string,
  placeholder: any,
  maxLength?:number
  minLength?:number
  pattern?:string
  value?:string
  disabled?:boolean
}

const InputComponent = ({
  type,
  name,
  placeholder,
  ...rest
}: InputPropsType) => {
  const [inputValue, setInputValue] = useState<string>("");

  useEffect(() => {
    setInputValue(rest.value || "");
  }, [rest.value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

 return (
  <Input
    type={type}
    placeholder={placeholder}
    minLength={rest.minLength}
    maxLength={rest.maxLength}
    pattern={rest.pattern}
    value={inputValue}
    onChange={handleChange} 
    disabled ={rest.disabled}
  />
);
}
export default InputComponent;
