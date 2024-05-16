"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName: string;
}

export const Button = ({ children, className, appName }: ButtonProps) => {
  return (
    <button className='mt-5 h-[48px] w-[200px] rounded-[25px] bg-[#00C3FD] '>{appName}</button>

  );
};
