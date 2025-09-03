import React from "react";
import { LucideIcon } from "lucide-react";
import clsx from "clsx";

export interface ButtonProps {
  children?: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg" | "xl";
  color?: "default" | "success" | "warning" | "error" | "info";
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  fullRounded?: boolean;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
}

const buttonVariants = {
  primary: "bg-secondary text-white hover:bg-primary!",
  secondary: "bg-white text-black border-gray-300 hover:bg-gray-50",
  outline:
    "bg-transparent text-black border-2 text-primary border-primary hover:bg-primary hover:text-white",
  ghost: "bg-transparent text-black border-transparent hover:bg-gray-100",
};

const buttonSizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
  xl: "px-10 py-5 text-lg",
};

const buttonColors = {
  default: "",
  success: "bg-black text-white border-black hover:bg-gray-900",
  warning: "bg-gray-800 text-white border-gray-800 hover:bg-gray-700",
  error: "bg-black text-white border-black hover:bg-gray-900",
  info: "bg-gray-600 text-white border-gray-600 hover:bg-gray-500",
};

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  color = "default",
  icon: Icon,
  iconPosition = "left",
  disabled = false,
  loading = false,
  fullWidth = false,
  fullRounded = false,
  className,
  onClick,
  type = "button",
  ...props
}) => {
  const isIconOnly = Icon && !children;

  const baseClasses = clsx(
    "group relative flex items-center justify-center border font-ca-slalom font-bold transition-all duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-gray-400 hover:scale-[1.02] active:scale-[0.98]",
    fullRounded ? "rounded-full" : "rounded-lg",
    buttonSizes[size],
    fullWidth ? "w-full" : "w-auto",
    isIconOnly && "p-0",
    disabled && "opacity-50 cursor-not-allowed",
    !disabled && "cursor-pointer",
    loading && "cursor-wait",
    className
  );

  const variantClasses = clsx(
    buttonVariants[variant],
    color !== "default" && variant === "primary" && buttonColors[color]
  );

  const iconClasses = clsx("transition-all duration-200", {
    "text-white": variant === "primary",
    "text-black":
      variant === "secondary" || variant === "outline" || variant === "ghost",
  });

  const iconSizes = {
    sm: 16,
    md: 18,
    lg: 20,
    xl: 22,
  };

  return (
    <button
      type={type}
      className={clsx(baseClasses, variantClasses)}
      onClick={onClick}
      disabled={disabled || loading}
      {...props}
    >
      {variant === "primary" && (
        <div
          className={clsx(
            "absolute inset-0 duration-200",
            fullRounded ? "rounded-full" : "rounded-lg"
          )}
        />
      )}

      <div className="relative z-10 flex items-center justify-center">
        {isIconOnly ? (
          <div className={clsx(iconClasses, "p-2")}>
            <Icon size={iconSizes[size]} />
          </div>
        ) : (
          <>
            {Icon && iconPosition === "left" && (
              <div className={clsx(iconClasses, "mr-2")}>
                <Icon size={iconSizes[size]} />
              </div>
            )}

            <span className="tracking-wide">
              {loading ? "Chargement..." : children}
            </span>

            {Icon && iconPosition === "right" && (
              <div className={clsx(iconClasses, "ml-2")}>
                <Icon size={iconSizes[size]} />
              </div>
            )}

            {loading && (
              <div className="ml-2">
                <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
              </div>
            )}
          </>
        )}
      </div>
    </button>
  );
};
