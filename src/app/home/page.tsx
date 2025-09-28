"use client";

import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"
import { useState } from "react";
import { MainButton } from "@/components/main-button";
import { FaBeer } from "react-icons/fa";
import Navbar from "@/components/navbar";
import Helpbar from "@/components/help-bar";
import Sidebar from "@/components/side-bar";
import Link from "next/link";

export default function Home() {
    const [showhelp, setShowhelp] = useState(false);
    const [opensidebar, setOpenSidebar] = useState(false)

    return (
        <div>
            <Navbar setShowhelp={setShowhelp} setOpenSidebar={setOpenSidebar} showhelp={showhelp} opensidebar={opensidebar} />
            <div className="flex h-screen">
                {opensidebar && (<Sidebar />)}
                <div>
                    <MainButton icon={<FaBeer />} label="Click Me" subLabel="This is a sub-label---------------------------" />
                    <MainButton icon={<FaBeer />} label="Click Me" />
                </div>
                <div className="bg-green-200 w-20 w-full">
                    <div>1</div>
                    <div>2</div>
                </div>
                {showhelp && (<Helpbar setShowhelp={setShowhelp} />)}
            </div>
        </div>
    )
}