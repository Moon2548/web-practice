"use client";

import { useState } from "react";

import { MainButton } from "./main-button";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Input } from "./ui/input";
import { GoSidebarCollapse, GoSidebarExpand, GoBell, GoGear, GoPlus, GoCreditCard, GoSun, GoSignOut } from "react-icons/go";
import { MdHome } from "react-icons/md";
import { DiNetbeans } from "react-icons/di";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { AiOutlineTeam } from "react-icons/ai";
import Link from "next/link";

export default function Navbar() {
    const [step, setStep] = useState<"create" | "teamForm">("create");

    return (
        <nav className="w-full bg-pink-200 border-b-purple-400 border-b-2 p-2">
            <div className="flex items-center justify-between">
                <div className="flex gap-2">
                    <MainButton icon={<GoSidebarCollapse />}></MainButton>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <MainButton icon={<DiNetbeans />} ></MainButton>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-50" align="start">
                            <DropdownMenuGroup>
                                <DropdownMenuItem>
                                    <MdHome /> หน้าแรก
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <AiOutlineTeam /> ทีม
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <GoGear /> ฝ่ายดูแลระบบ
                                </DropdownMenuItem>
                            </DropdownMenuGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <Link href="/home"><MainButton icon={<MdHome />} label="Home"></MainButton></Link>
                </div>
                <div className="flex w-1/2 gap-2">
                    <Input className="border-purple-500" placeholder="ค้นหา"></Input>
                    <Popover>
                        <PopoverTrigger>
                            <MainButton icon={<GoPlus />} label="สร้าง" onClick={() => setStep("create")} classname="bg-purple-600 text-white hover:text-white hover:bg-purple-400"></MainButton>
                        </PopoverTrigger>
                        <PopoverContent align="start" className="w-60">
                            {step === "create" && (
                                <div>
                                    <MainButton icon={<AiOutlineTeam />} label="ทีม" onClick={() => setStep("teamForm")} classname="w-full justify-start" />
                                </div>
                            )}
                            {step === "teamForm" && (
                                <div>
                                    <h1>test form</h1>
                                    <Input placeholder="name"></Input>
                                </div>
                            )}
                        </PopoverContent>
                    </Popover>
                </div>
                <div className="flex gap-2">
                    <Popover>
                        <PopoverTrigger>
                            <MainButton icon={<GoBell />}></MainButton>
                        </PopoverTrigger>
                        <PopoverContent align="end">
                            <div>
                                <h1>การแจ้งเตือน</h1>
                                <MainButton label="test"></MainButton>
                            </div>
                        </PopoverContent>
                    </Popover>
                    <MainButton icon={<IoMdHelpCircleOutline />}></MainButton>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <MainButton icon={<GoGear />}></MainButton>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-100" align="end">
                            <DropdownMenuGroup>
                                <h1 className="text-[12px]">การตั้งค่าทั่วไป</h1>
                                <DropdownMenuItem>
                                    <MainButton icon={<FaUser />} label="การตั้งต่าส่วนบุคคล" subLabel="จัดการการตั้งค่าการแจ้งเตือนและธีม" classname="w-full justify-start" />
                                </DropdownMenuItem>
                            </DropdownMenuGroup>
                            <DropdownMenuSeparator />
                            <DropdownMenuGroup>
                                <h1 className="text-[12px]">การตั้งค่าผู้ดูแล</h1>
                                <DropdownMenuItem>
                                    <MainButton icon={<AiOutlineTeam />} label="การจัดการผู้ใช้" subLabel="จัดการผู้ใช้ กลุ่ม และคำขอการเข้าถึง" classname="w-full justify-start" />
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <MainButton icon={<GoCreditCard />} label="การออกใบอนุญาติ" subLabel="การออกใบอนุญาตสำหรับศูนย์เซิร์ฟเวอร์และข้อมูล" classname="w-full justify-start" />
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <MainButton icon={<GoCreditCard />} label="การเรียกเก็บเงิน" subLabel="อัปเดตรายละเอียดการเรียกเก็บเงิน จัดการการสมัครใช้งาน และอื่น ๆ" classname="w-full justify-start" />
                                </DropdownMenuItem>
                            </DropdownMenuGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <MainButton icon={<FaUser />}></MainButton>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-100" align="end">
                            <DropdownMenuGroup>
                                <div className="flex">
                                    <FaUser className="mr-4 text-[50px]" />
                                    <div>
                                        <h1 className="text-[24px]">Name_test</h1>
                                        <h1>gmail</h1>
                                    </div>
                                </div>
                            </DropdownMenuGroup>
                            <DropdownMenuGroup>
                                <DropdownMenuItem>
                                    <MainButton icon={<FaUser />} label="โปรไฟล์" classname="w-full justify-start" />
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <MainButton icon={<GoGear />} label="การตั้งค่าบัญชี" classname="w-full justify-start" />
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <MainButton icon={<GoSun />} label="ธีม" classname="w-full justify-start" />
                                </DropdownMenuItem>
                            </DropdownMenuGroup>
                            <DropdownMenuSeparator />
                            <DropdownMenuGroup>
                                <DropdownMenuItem>
                                    <MainButton icon={<AiOutlineTeam />} label="สลับบัญชี" classname="w-full justify-start" />
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <div className="flex justify-between">
                                        <MainButton icon={<GoSignOut />} label="ออกจากระบบ" classname="w-full justify-start" />
                                    </div>
                                </DropdownMenuItem>
                            </DropdownMenuGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </nav >
    );
}
