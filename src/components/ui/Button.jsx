import React from 'react';

const buttonVariants = {
  default: "text-white bg-[#EB0028] border-2 border-black shadow-shadow hover:bg-[#ff0a36] hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none hover:scale-105",
  noShadow: "text-white bg-[#EB0028] border-2 border-black hover:bg-[#ff0a36]",
  neutral: "bg-white text-black border-2 border-black shadow-shadow hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none hover:bg-gray-100",
  reverse: "text-white bg-[#EB0028] border-2 border-black hover:bg-[#ff0a36] hover:translate-x-reverseBoxShadowX hover:translate-y-reverseBoxShadowY hover:shadow-shadow",
};

const sizeVariants = {
  default: "h-10 px-4 py-2",
  sm: "h-9 px-3",
  lg: "h-11 px-8",
  icon: "h-10 w-10",
};

export const Button = React.forwardRef(({ 
  className = "", 
  variant = "default", 
  size = "default", 
  children,
  ...props 
}, ref) => {
  const variantClass = buttonVariants[variant] || buttonVariants.default;
  const sizeClass = sizeVariants[size] || sizeVariants.default;
  
  const baseClasses = "inline-flex items-center justify-center whitespace-nowrap rounded-base text-sm font-bold transition-all duration-200 ease-in-out gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer";
  
  return (
    <button
      ref={ref}
      className={`${baseClasses} ${variantClass} ${sizeClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";

