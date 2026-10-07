import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'dark' | 'ghost';
  to?: string;
  href?: string;
}

export default function Button({ children, variant = 'primary', to, href, className = '', ...props }: ButtonProps) {
  const classes = `button button--${variant} ${className}`;
  if (to) return <Link className={classes} to={to}>{children}</Link>;
  if (href) return <a className={classes} href={href}>{children}</a>;
  return <button className={classes} {...props}>{children}</button>;
}