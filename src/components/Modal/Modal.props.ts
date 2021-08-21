import React from 'react';

export interface ModalProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  modal: boolean;
  deactivateModal: () => void;
  title: string;
  children: React.ReactNode;
}