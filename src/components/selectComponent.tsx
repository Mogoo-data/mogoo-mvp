import { FC } from "react";
import { ControllerRenderProps } from "react-hook-form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface SelectComponentProps {
  id: string;
  field: ControllerRenderProps<any, any>;
  placeholder: string;
  options: { label: string; value: string }[];
}

const SelectComponent: FC<SelectComponentProps> = ({ id, field, placeholder, options }) => {
  return (
    <Select onValueChange={field.onChange} defaultValue={field.value} name={field.name} autoComplete="off">
      <SelectTrigger id={id}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value} className="focus:bg-gray-200 dark:focus:bg-gray-700">
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SelectComponent;