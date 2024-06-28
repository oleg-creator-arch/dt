"use client";
import "./copy-text.scss";
import cn from "classnames";
import copy from "copy-to-clipboard";

interface ICopyTextProps {
  value: string;
  children: React.ReactNode;
  className?: string | string[];
}

export const CopyText: React.FC<ICopyTextProps> = ({
  children,
  value,
  className,
}) => {
  return (
    <div onClick={() => copy(value)} className={cn(className)}>
      {children}
    </div>
  );
};
