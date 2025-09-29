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

    return (
        <div>
            <div className="relative bg-yellow-200 m-4 h-[128px] p-4 rounded-[20px]">
                <div className="text-[16px] text-orange-600">สวัสดีวันจันทร์</div>
                <MainButton classname="absolute right-0 bottom-0 m-4" label="กิจกรรมของฉัน" />
            </div>
            <div className='m-4'>
                <div className='flex justify-between'>
                    <h1 className='text-[20px]'>แอปของคุณ</h1>
                    <MainButton label='ดูแอปทั้งหมด' />
                </div>
                <div className='flex'>
                    {cards.map((c) => (
                        <ActionCard
                            key={c.title}
                            title={c.title}
                            description={c.description}
                            icons={c.icon ? <c.icon /> : undefined}
                        />
                    ))}</div>
            </div>
        </div>
    )
}