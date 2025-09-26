import React from "react";
import { MainButton } from "@/components/main-button";
import { FaBeer } from "react-icons/fa";
import Navbar from "@/components/navbar";
import Link from "next/link";

export default function Home() {
    return (
        <div>
            <Navbar />
            <MainButton icon={<FaBeer />} label="Click Me" subLabel="This is a sub-label---------------------------" />
            <MainButton icon={<FaBeer />} label="Click Me" />
        </div>
    )
}