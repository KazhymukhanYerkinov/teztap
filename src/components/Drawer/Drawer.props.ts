import React from 'react';

export interface DrawerProps {
    title?: string;
    children: React.ReactNode;
    drawer: boolean;
    deactivateDrawer: () => void;
}