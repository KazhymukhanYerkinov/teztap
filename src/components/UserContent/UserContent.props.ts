import React from 'react';

export interface UserContentProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  name?: string;
  phone?: string;
  update?: boolean;
}