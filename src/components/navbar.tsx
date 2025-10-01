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
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { GoSidebarCollapse, GoSidebarExpand, GoBell, GoGear, GoPlus, GoCreditCard, GoSun, GoSignOut } from "react-icons/go";
import { MdHome } from "react-icons/md";
import { DiNetbeans } from "react-icons/di";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { AiOutlineTeam } from "react-icons/ai";
import { X, Settings } from "lucide-react";
import Link from "next/link";
import { MenuSwitcher } from '@/components/tabswitcher'

const tabItems = [
    { key: "direct", label: "โดยตรง" },
    { key: "seen", label: "เฝ้าดู" }
];

type NavbarProps = {
    setShowhelp: (a: boolean) => void;
    setOpenSidebar: (a: boolean) => void;
    showhelp: boolean;
    opensidebar: boolean;
};

export default function Navbar({ setShowhelp, setOpenSidebar, showhelp, opensidebar }: NavbarProps) {
    const [step, setStep] = useState<"create" | "teamForm">("create");
    const [tab, setTab] = useState("direct");
    
    // Team Form State
    const [teamFormData, setTeamFormData] = useState({
        teamName: '',
        teamType: '',
        inviteEmails: [] as string[]
    });
    const [emailInput, setEmailInput] = useState('');

    const addEmail = () => {
        if (emailInput && !teamFormData.inviteEmails.includes(emailInput)) {
            setTeamFormData(prev => ({
                ...prev,
                inviteEmails: [...prev.inviteEmails, emailInput]
            }));
            setEmailInput('');
        }
    };

    const removeEmail = (email: string) => {
        setTeamFormData(prev => ({
            ...prev,
            inviteEmails: prev.inviteEmails.filter(e => e !== email)
        }));
    };

    const handleTeamSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Team created:", teamFormData);
        // Reset form และกลับไป create menu
        setTeamFormData({ teamName: '', teamType: '', inviteEmails: [] });
        setStep("create");
    };

    return (
        <nav className="w-full bg-pink-200 border-b-purple-400 border-b-2 p-2">
            <div className="flex items-center justify-between">
                <div className="flex gap-2">
                    <MainButton icon={opensidebar ? <GoSidebarExpand /> : <GoSidebarCollapse />} onClick={() => setOpenSidebar(!opensidebar)}></MainButton>
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
                        <PopoverTrigger asChild>
                            <MainButton 
                                icon={<GoPlus />} 
                                label="สร้าง" 
                                onClick={() => setStep("create")} 
                                classname="bg-purple-600 text-white hover:text-white hover:bg-purple-400"
                            />
                        </PopoverTrigger>
                        <PopoverContent align="start" className="w-96 max-h-[500px] overflow-y-auto">
                            {step === "create" && (
                                <div>
                                    <MainButton 
                                        icon={<AiOutlineTeam />} 
                                        label="ทีม" 
                                        onClick={() => setStep("teamForm")}
                                        classname="w-full justify-start" 
                                    />
                                </div>
                            )}
                            
                            {step === "teamForm" && (
                                <div className="space-y-4">
                                    {/* Header */}
                                    <div className="flex items-center justify-between border-b pb-2">
                                        <h2 className="text-lg font-semibold">สร้างทีม</h2>
                                        <Button 
                                            variant="ghost" 
                                            size="sm"
                                            onClick={() => setStep("create")}
                                        >
                                            <X className="w-4 h-4" />
                                        </Button>
                                    </div>

                                    {/* Form */}
                                    <form onSubmit={handleTeamSubmit} className="space-y-4">
                                        {/* Team Name */}
                                        <div>
                                            <Label htmlFor="teamName" className="text-sm font-medium">
                                                ชื่อทีม *
                                            </Label>
                                            <Input
                                                id="teamName"
                                                value={teamFormData.teamName}
                                                onChange={(e) => setTeamFormData(prev => ({ ...prev, teamName: e.target.value }))
                                                }
                                                placeholder="ชื่อทีมของคุณ"
                                                className="mt-1"
                                                required
                                            />
                                        </div>

                                        {/* Team Type */}
                                        <div>
                                            <Label className="text-sm font-medium">เทมเพลตทีม</Label>
                                            <div className="mt-2 flex items-center gap-2">
                                                <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                                    <Settings className="w-3 h-3 mr-1" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Invite People */}
                                        <div>
                                            <Label className="text-sm font-medium">
                                                เชิญสมาชิก
                                            </Label>
                                            <div className="mt-2 flex gap-2">
                                                <Input
                                                    value={emailInput}
                                                    onChange={(e) => setEmailInput(e.target.value)}
                                                    placeholder="อีเมลหรือชื่อผู้ใช้"
                                                    className="flex-1"
                                                    onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addEmail())}
                                                />
                                                <Button type="button" onClick={addEmail} size="sm">
                                                    เพิ่ม
                                                </Button>
                                            </div>
                                            
                                            {/* Email Tags */}
                                            {teamFormData.inviteEmails.length > 0 && (
                                                <div className="mt-2 flex flex-wrap gap-1 max-h-20 overflow-y-auto">
                                                    {teamFormData.inviteEmails.map((email) => (
                                                        <div key={email} className="inline-flex items-center px-2 py-1 rounded text-xs bg-gray-100 border">
                                                            {email}
                                                            <Button
                                                                type="button"
                                                                variant="ghost"
                                                                size="sm"
                                                                className="ml-1 h-auto p-0 w-3 h-3"
                                                                onClick={() => removeEmail(email)}
                                                            >
                                                                <X className="w-2 h-2" />
                                                            </Button>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>

                                        {/* Submit Buttons */}
                                        <div className="flex justify-end gap-2 pt-2 border-t">
                                            <Button type="button" variant="outline" size="sm" onClick={() => setStep("create")}>
                                                ยกเลิก
                                            </Button>
                                            <Button type="submit" size="sm" className="bg-blue-600 hover:bg-blue-700">
                                                สร้าง
                                            </Button>
                                        </div>
                                    </form>
                                </div>
                            )}
                        </PopoverContent>
                    </Popover>
                </div>
                <div className="flex gap-2">
                    <Popover>
                        <PopoverTrigger asChild>
                            <MainButton icon={<GoBell />}></MainButton>
                        </PopoverTrigger>
                        <PopoverContent align="end" className="w-[540px] min-h-[700px]">
                            <div className="flex justify-start items-center text-[20px]">
                                การแจ้งเตือน
                            </div>
                            <MenuSwitcher
                                items={tabItems}
                                selected={tab}
                                onSelect={setTab}
                                variant="tabs"
                            />
                            {tab === "direct" && (
                                <div className="text-center">
                                    ไม่มีข้อมูล
                                </div>
                            )}
                            {tab === "seen" && (
                                <div className="text-center">
                                    คุณไม่มีรายการการแจ้งเตือนจาก 30 วันที่ผ่านมา
                                </div>
                            )}
                        </PopoverContent>
                    </Popover>
                    <MainButton icon={<IoMdHelpCircleOutline />} onClick={() => setShowhelp(!showhelp)}></MainButton>
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
                        <DropdownMenuTrigger asChild>
                            <MainButton icon={<FaUser />}></MainButton>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-100" align="end">
                            <DropdownMenuGroup>
                                <div className="flex">
                                    <FaUser className="mr-4 mt-auto mb-auto text-[50px]" />
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
