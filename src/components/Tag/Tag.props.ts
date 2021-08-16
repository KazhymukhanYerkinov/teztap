import React from 'react';

export interface TagProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  href?: string,
  underline?: boolean,
  size?: 'small' | 'medium',
  children: React.ReactNode,
  position?: 'left' | 'center' | 'right',
}