'use client'
import React, { useState } from 'react'
import { MainButton } from "@/components/main-button"
import { ActionCard } from '@/components/main-card'
import { DiAndroid, DiChrome } from "react-icons/di";

const cards = [
    { title: "Android", description: "Google's OS", icon: DiAndroid },
    { title: "Chrome", description: "Google Chrome", icon: DiChrome },
    { title: "test", icon: DiAndroid }
];

export default function Home() {
    // กำหนดค่าไว้นอก return
    const gridGap = "gap-4";
    const gridCols = "grid-cols-[repeat(auto-fill,minmax(280px,1fr))]"; // auto-fill grid
    const containerMargin = "m-4";

    return (
        <div className="max-w-full overflow-hidden"> {/* ป้องกัน overflow */}
            <div className="relative bg-yellow-200 m-4 h-[128px] p-4 rounded-[20px]">
                <div className="text-[16px] text-orange-600">สวัสดีวันจันทร์</div>
                <MainButton classname="absolute right-0 bottom-0 m-4" label="กิจกรรมของฉัน" />
            </div>
            <div className={containerMargin}>
                <div className='flex justify-between mb-4'> {/* เพิ่ม mb-4 */}
                    <h1 className='text-[20px]'>แอปของคุณ</h1>
                    <MainButton label='ดูแอปทั้งหมด' />
                </div>
                {/* เปลี่ยนจาก flex เป็น grid */}
                <div className={`grid ${gridGap} ${gridCols} items-start`}>
                    {cards.map((c) => (
                        <ActionCard
                            key={c.title}
                            title={c.title}
                            description={c.description}
                            icons={c.icon ? <c.icon /> : undefined}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}