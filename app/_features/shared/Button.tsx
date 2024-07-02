import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      type="button"
      className="bg-blue-500 hover:bg-blue-700 text-white uppercase py-2 px-4 rounded"
    >
      {children}
    </button>
  );
}
