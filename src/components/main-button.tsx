'use client';

import { ReactNode } from 'react';
import { Button } from "./ui/button"
import { IconType } from "react-icons";
import { FaBeer } from "react-icons/fa";

// <FaBeer></FaBeer>

type MainButtonProps = {
    icon?: ReactNode;
    label?: string;
    subLabel?: string;
    onClick?: () => void;
};

export const MainButton: React.FC<MainButtonProps> = ({ icon, label, subLabel, onClick }) => {
    return (
        <Button
            onClick={onClick}
            className="bg-white text-black flex items-start gap-2 h-auto py-2 hover:bg-blue-100 hover:text-pink-400 "
        >
            {icon && <span className="mt-1">{icon}</span>}
            <div className="flex flex-col text-left">
                {label && <span className="font-semibold">{label}</span>}
                {subLabel && <span className="text-[10px]">{subLabel}</span>}
            </div>
        </Button>
    )
}