import { zodResolver } from "@hookform/resolvers/zod";
import { UseFormProps, useForm as useFormRHF } from "react-hook-form";

/**
 * Custom hook to create a form with Zod validation using react-hook-form.
 * @param {Object} options - Form options.
 * @param {any} options.schema - The Zod validation schema.
 * @param {UseFormProps} [options.props] - Additional options to pass to react-hook-form.
 * @returns The useForm hook from react-hook-form configured with Zod validation.
 * @example
 * const { register, handleSubmit, formState } = useForm({ schema: myZodSchemaValidation });
 */
export const useForm = <
  TFieldValues extends Record<string, any> = Record<string, any>,
>({ schema, ...props }: { schema?: any } & UseFormProps<TFieldValues> = {}) => {
  return useFormRHF<TFieldValues>({
    ...(schema ? { resolver: zodResolver(schema) } : {}),
    mode: props.mode || "onTouched",
    reValidateMode: props.reValidateMode || "onChange",
    shouldFocusError: props.shouldFocusError ?? true,
    ...props,
  });
};
