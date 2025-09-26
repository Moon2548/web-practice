'use client';

import { ReactNode, forwardRef } from 'react';
import { Button } from "./ui/button"
import { IconType } from "react-icons";
import { FaBeer } from "react-icons/fa";

// <FaBeer></FaBeer>

type MainButtonProps = {
    classname?: string;
    icon?: ReactNode;
    label?: string;
    subLabel?: string;
    onClick?: () => void;
};

export const MainButton = forwardRef<HTMLButtonElement, MainButtonProps>(({ classname, icon, label, subLabel, onClick, ...props }, ref) => {
    return (
        <Button
            ref={ref}
            onClick={onClick}
            className={`bg-white text-black flex items-start h-auto hover:bg-blue-100 hover:text-pink-400 ${classname}`}
            {...props}
        >
            {icon && <span className='mr-1 mt-auto mb-auto'>{icon}</span>}
            {label && <div className="flex flex-col text-left">
                <span className="font-semibold">{label}</span>
                {subLabel && <span className="text-[10px]">{subLabel}</span>}
            </div>}
        </Button>
    )
}
);