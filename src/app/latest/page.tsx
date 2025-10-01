'use client'
import React, { useState } from 'react'
import { ActionCard } from '@/components/main-card'
import { DiAndroid, DiChrome } from "react-icons/di";
import { MenuSwitcher } from '@/components/tabswitcher'

const newCards = [
  { title: "Android", description: "Google's OS", icon: DiAndroid },
  { title: "Chrome", description: "Google Chrome", icon: DiChrome },
  { title: "test", icon: DiAndroid }
];

const oldCards = [
  { title: "Old Project 1", description: "เสร็จแล้ว", icon: DiAndroid },
  { title: "Old Project 2", description: "โปรเจกต์เก่า", icon: DiChrome },
  { title: "Archive", description: "ไฟล์เก็บ", icon: DiAndroid }
];

const tabItems = [
  { key: "done", label: "งานใหม่" },
  { key: "seen", label: "งานเก่า" }
];

export default function LatestPage() {
  const [tab, setTab] = useState("done");
  
  // กำหนดค่าไว้นอก return
  const gridGap = "gap-4"; 
  const containerPadding = "p-6"; 
  // ใช้ auto-fit กับ min-width แทน responsive columns
  const gridCols = "grid-cols-[repeat(auto-fit,minmax(280px,1fr))]";

  return (
    <div className="max-w-full overflow-hidden">
      <div className={`${containerPadding} w-full`}> 
        <h2 className="text-2xl font-bold mb-4">ล่าสุด</h2>
        <MenuSwitcher
          items={tabItems}
          selected={tab}
          onSelect={setTab}
          variant="tabs"
        />
        
        {tab === "done" && (
          <div className={`grid ${gridGap} ${gridCols} items-start`}> 
            {newCards.map((c) => (
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
          <div className={`grid ${gridGap} ${gridCols} items-start`}>
            {oldCards.map((c) => (
              <ActionCard
                key={c.title}
                title={c.title}
                description={c.description}
                icons={c.icon ? <c.icon /> : undefined}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}