import React from 'react';
import './link.scss';
import cn from 'classnames';

interface ILinkProps {
  children: React.ReactNode;
  to: string;
  className?: string | string[];
  onClick?: () => void;
}

export const Link: React.FC<ILinkProps> = ({ className, children, onClick, to }: ILinkProps) => {
  return (
    <a href={to} className={cn(className)} onClick={onClick} target="_blank">
      {children}
    </a>
  );
};
