import React from 'react';

export interface AuthContentProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: React.ReactNode,
}