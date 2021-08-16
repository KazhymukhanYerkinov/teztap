import React from 'react';

export interface DescriptionProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size?: 'small' | 'medium';
  position?: 'left' | 'center' | 'right';
  children: React.ReactNode;
}