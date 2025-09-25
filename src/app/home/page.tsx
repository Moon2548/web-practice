import React from "react";
import { MainButton } from "@/components/main-button";
import { FaBeer } from "react-icons/fa";

export default function Home() {
    return (
        <div>
            <MainButton icon={<FaBeer />} label="Click Me" subLabel="This is a sub-label" />
            <MainButton icon={<FaBeer />} label="Click Me" />
        </div>
    )
}