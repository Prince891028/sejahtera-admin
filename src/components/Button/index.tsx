import classNames from 'classnames';
import React, { ReactNode } from 'react';

type Props = {
  type?: 'submit' | 'button' | 'reset' | undefined;
  className?: string;
  children: ReactNode;
  disabled?: boolean;
  onClick?: any;
};

export default function Button({
  type = 'submit',
  className = 'w-full bg-indigo-600 hover:bg-indigo-700',
  children,
  disabled = false,
  onClick = () => {},
}: Props) {
  return (
    <button
      // eslint-disable-next-line
      type={type}
      disabled={disabled}
      className={classNames(
        'flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white focus:outline-none',
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
