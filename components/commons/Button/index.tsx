import { HtmlHTMLAttributes } from 'react';
import cn from 'classnames';
import style from './style.module.scss';

export default function Button({
  children,
  className,
  ...props
}: HtmlHTMLAttributes<HTMLButtonElement>) {
  return (
    <button type='button' className={cn(style.button, className)} {...props}>
      {children}
    </button>
  );
}
