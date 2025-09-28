"use client";

import { useState } from "react";

import { MainButton } from "./main-button";

import { GoX, GoComment, GoCommentDiscussion, GoAlertFill, GoBug, GoGlobe } from "react-icons/go";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { RiComputerLine } from "react-icons/ri";

type HelpbarProps = {
    setShowhelp: (a: boolean) => void;
};



export default function Helpbar({ setShowhelp }: HelpbarProps) {

    return (
        <div className="w-[550px] max-w-[550px] min-w-[500px] h-full ml-auto border-2 border-black">
            <div className="flex items-center justify-between h-[80px] bg-gray-200">
                <div></div>
                <h1 className="my-auto text-[20px] font-bold">Help</h1>
                <MainButton icon={<GoX />} onClick={() => setShowhelp(false)} classname="bg-gray-200" />
            </div>
            <div>
                <MainButton icon={<IoMdHelpCircleOutline />} label="อ่านบทความการช่วยเหลือ" classname="w-full justify-start" />
                <MainButton icon={<GoComment />} label="สอบถามชุมชน" classname="w-full justify-start" />
                <MainButton icon={<GoCommentDiscussion />} label="ให้ข้อคิดเห็น" classname="w-full justify-start" />
                <MainButton icon={<GoGlobe />} label="รับการสนันสนุน" classname="w-full justify-start" />
                <MainButton icon={<GoBug />} label="ข้อผิดพลาดที่รู้จัก" classname="w-full justify-start" />
                <MainButton icon={<GoAlertFill />} label="หน้าข้อมูลสถานะ" classname="w-full justify-start" />
                <MainButton icon={<RiComputerLine />} label="ปุ่มลัดบนคีย์บอร์ด" classname="w-full justify-start" />
            </div>
        </div>
    )
}