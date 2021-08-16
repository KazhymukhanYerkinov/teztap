import React from "react";

export interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
	error?: boolean 
    errorText?: string
}