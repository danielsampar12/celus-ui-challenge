import React from 'react';

export interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'outline' | 'filled';
  text: string;
}
