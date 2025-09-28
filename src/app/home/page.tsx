"use client";

import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"
import { useState, useEffect } from "react";
import { MainButton } from "@/components/main-button";
import { FaBeer } from "react-icons/fa";
import Navbar from "@/components/navbar";
import Helpbar from "@/components/help-bar";
import Sidebar from "@/components/side-bar";
import Link from "next/link";

export default function Home() {
    const [showhelp, setShowhelp] = useState(false);
    const [opensidebar, setOpenSidebar] = useState(false)
    const [sidebarWidth, setSidebarWidth] = useState(250)
    const [windowWidth, setWindowWidth] = useState(0)

    useEffect(() => {
        setWindowWidth(window.innerWidth)
    }, [])

    return (
        <div>
            <Navbar setShowhelp={setShowhelp} setOpenSidebar={setOpenSidebar} showhelp={showhelp} opensidebar={opensidebar} />
            <div>
                {opensidebar && (
                    <ResizablePanelGroup direction="horizontal">
                        <ResizablePanel
                            defaultSize={(sidebarWidth / windowWidth) * 100}
                            minSize={(300 / windowWidth) * 100}
                            maxSize={50}
                            onResize={(size) => setSidebarWidth((windowWidth * size) / 100)}
                        >
                            <Sidebar />
                        </ResizablePanel>
                        <ResizableHandle />
                        <ResizablePanel className="flex h-screen">
                            <div className="bg-green-200 w-full w-min-[800px]">
                                main
                                <div>1</div>
                                <div>2</div>
                            </div>
                            {showhelp && (<Helpbar setShowhelp={setShowhelp} />)}
                        </ResizablePanel>
                    </ResizablePanelGroup>)}
                {!opensidebar && (
                    <div className="flex h-screen">
                        <div className="bg-green-200 w-full w-min-[800px]">
                            main
                            <div>1</div>
                            <div>2</div>
                        </div>
                        {showhelp && (<Helpbar setShowhelp={setShowhelp} />)}
                    </div>
                )}
            </div>
        </div>
    )
}