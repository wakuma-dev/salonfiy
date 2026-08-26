import { type ComponentPropsWithoutRef } from "react";
import { type FieldPath, type FieldValues, useController, type UseControllerProps } from "react-hook-form";
import { Field, FieldLabel, FieldError } from "@/components/ui/field";
import { Checkbox } from "@/components/ui/checkbox";

type CheckboxProps<T extends FieldValues> = UseControllerProps<T> & 
Omit<ComponentPropsWithoutRef<typeof Checkbox>, "name" | "value" | "defaultValue" | "onChangeValue"> & {
    name: FieldPath<T>
    label: string;
}
export function MyCheckbox<T extends FieldValues>({
    name,
    label,
    defaultValue,
    shouldUnregister,
    rules,
    control,
    disabled,
    ...checkboxProps
}: CheckboxProps<T>){
    const { field, fieldState} = useController({
        name,
        defaultValue,
        shouldUnregister,
        rules,
        control,
        disabled
    });
    return(
        <Field>
            <div className="flex items-start lg:items-center space-x-2">
                <Checkbox
                 id={field.name}
                 {...checkboxProps}
                 checked={!!field.value}
                 onCheckedChange={field.onChange}
                 disabled={field.disabled}
                 />
                <FieldLabel htmlFor={field.name} className="text-[14px] leading-[18px] font-normal">
                    {label}
                </FieldLabel>
            </div>
            {fieldState.error && <FieldError className="text-red-400 text-xs">
                  {fieldState.error?.message}
                </FieldError>}
        </Field>
    )
}