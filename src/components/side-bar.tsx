import { MainButton } from "./main-button";
import Link from "next/link";
import { FaUser } from "react-icons/fa";
import { GoClock, GoBell } from "react-icons/go";

export default function Sidebar() {

    return (
        <div className="h-full border-black border-r-1 border-r-purple-400" >
            <Link href="/home"><MainButton icon={<FaUser />} label="สำหรับคุณ" classname="w-full justify-start" /></Link>
            <Link href="/latest"><MainButton icon={<GoClock />} label="ล่าสุด" classname="w-full justify-start" /></Link>
            <Link href="/notifications"><MainButton icon={<FaUser />} label="การแจ้งเตือน" classname="w-full justify-start" /></Link>
        </div>
    )
}