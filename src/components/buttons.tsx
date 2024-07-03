import React from "react";

export const GhostButton = (
  {
    buttonText,
    className,
    linkText,
  }: {
    buttonText: string;
    className?: string;
    linkText?: string;
  },
  Props: React.ButtonHTMLAttributes<HTMLButtonElement>
) => {
  return (
    <button
    onClick={()=>location.href = linkText as string}
      {...Props}
      className={
        className +
        ` p-3 border-2 border-white rounded-md text-white cursor-pointer`
      }
    >
      {buttonText || "button"}
    </button>
  );
};

const SimpleButton = (
  {
    buttonText,
    className,
    linkText,
  }: {
    buttonText: string;
    className?: string;
    linkText?: string;
  },
  Props: React.ButtonHTMLAttributes<HTMLButtonElement>
) => {
  return (
    <button
    onClick={()=>location.href = linkText as string}
      {...Props}
      className={
        className + ` p-3 bg-blue-500 rounded-md text-white cursor-pointer`
      }
    >
      {buttonText || "button"}
    </button>
  );
};

export default SimpleButton;
