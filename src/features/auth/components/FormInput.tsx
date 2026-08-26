import {useState, type ComponentPropsWithoutRef } from "react";
import {type FieldValues, type FieldPath, type UseControllerProps, useController} from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Field, FieldLabel, FieldError } from "@/components/ui/field";
import { cn } from "@/lib/utils";
import { Eye, EyeOff } from "lucide-react";



type InputProps<T extends FieldValues> = UseControllerProps<T> & 
Omit<ComponentPropsWithoutRef<typeof Input>, "name" | "value" | "defaultValue" | "onChange"> & {
   name: FieldPath<T>;
   label: string;
   isPasswordField?: boolean;
}
export function MyInput<T extends FieldValues>({
    name,
    label,
    isPasswordField = false,
    control,
    rules,
    defaultValue,
    shouldUnregister,
    ...inputProps
}: InputProps<T>){
    const [showPassword, setShowPassword] = useState(false);
    const inputType = isPasswordField ? showPassword ? "text" : "password" : inputProps.type || "text";
    const { field, fieldState } = useController({
        name,
        defaultValue,
        shouldUnregister,
        rules,
        control
    });
    return(
        <Field>
            <FieldLabel htmlFor={field.name}>
                {label}
            </FieldLabel>
            <div className="relative">
                <Input 
                  id={field.name}
                  {...field}
                  {...inputProps}
                  type={inputType}
                  className={cn("w-full", isPasswordField && "pr-10", inputProps.className)}
                  />
                  {isPasswordField && (
                    <button type="button"
                            onClick={() => setShowPassword((prev) => !prev)}
                            className="absolute top-1/2 -translate-y-1/2 right-3 cursor-pointer">
                                {showPassword ? <EyeOff size={14}/> : <Eye size={14} />}
                            </button>
                  )}
            </div>
            {fieldState.error && (
                <FieldError className="text-red-400 text-xs">
                    {fieldState.error?.message}
                </FieldError>
            )}
        </Field>
    )
}

