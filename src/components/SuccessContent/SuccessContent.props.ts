import React from 'react';

export interface SuccessContentProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string,
  children: React.ReactNode,
}