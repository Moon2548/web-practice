'use client';

import React from 'react';
import { Button } from "./ui/button"

type MainButtonProps = {
    label?: string;
    subLabel?: string;
    onClick: () => void;
};

export const MainButton: React.FC<MainButtonProps> = ({ label, subLabel, onClick }) => {
    return (
        <div className="flex flex-wrap items-center gap-2 md:flex-row">
            <Button>
                <span className="text-lg font-semibold">{label}</span>
                {subLabel && <span className="text-sm text-gray-500 ml-2">{subLabel}</span>}
            </Button>
        </div>
    )
}