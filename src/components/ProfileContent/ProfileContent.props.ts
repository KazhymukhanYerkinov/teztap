import React from 'react';

export interface ProfileContentProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    title: string;
    children: React.ReactNode,
}