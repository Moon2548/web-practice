'use client'
import React, { useState } from 'react'
import { ActionCard } from '@/components/main-card'
import { DiAndroid, DiChrome } from "react-icons/di";
import { MenuSwitcher } from '@/components/tabswitcher'

const cards = [
  { title: "Android", description: "Google's OS", icon: DiAndroid },
  { title: "Chrome", description: "Google Chrome", icon: DiChrome },
  { title: "test", icon: DiAndroid }
];

const tabItems = [
  { key: "done", label: "งานใหม่" },
  { key: "seen", label: "งานเก่า" }
];

export default function LatestPage() {
  const [tab, setTab] = useState("done");
  const gridGap = "gap-0"; 
  const containerPadding = "p-8"; 

  return (
    <div className={`mx-auto max-w-5xl ${containerPadding} w-full`}> 
      <h2 className="text-2xl font-bold mb-4">ล่าสุด</h2>
      <MenuSwitcher
        items={tabItems}
        selected={tab}
        onSelect={setTab}
        variant="tabs"
      />
      {tab === "done" && (
        <div className={`grid ${gridGap} grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 items-start`}> 
          {cards.map((c) => (
            <ActionCard
              key={c.title}
              title={c.title}
              description={c.description}
              icons={c.icon ? <c.icon /> : undefined}
            />
          ))}
        </div>
      )}
      {tab === "seen" && (
        <div className="text-gray-400 text-center py-12">ไม่มีข้อมูล</div>
      )}
    </div>
  );
}