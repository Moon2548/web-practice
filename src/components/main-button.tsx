'use client';

import React from 'react';
import { Button } from "./ui/button"
import { IconType } from "react-icons";

type MainButtonProps = {
    icon?: IconType;
    label?: string;
    subLabel?: string;
    onClick?: () => void;
};

export const MainButton: React.FC<MainButtonProps> = ({ label, subLabel, onClick }) => {
    return (
        <Button onClick={onClick}>
            <div>{label}</div>
            {subLabel && <div className="text-sm">{subLabel}</div>}
        </Button>
    )
}