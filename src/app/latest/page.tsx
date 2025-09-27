'use client'
import React from 'react'
import {ActionCard} from '@/components/main-card'
import { DiAndroid,DiChrome  } from "react-icons/di";

const cards = [
  { title: "Android", description: "Google's OS", icon: DiAndroid },
  { title: "Chrome", description: "Google Chrome",icon:DiChrome },
  { title: "test",icon: DiAndroid }
];

export default function CardsPage() {
  return (
    <div className="mx-auto max-w-5xl p-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {cards.map((c) => (
        <ActionCard
          key={c.title}
          title={c.title}
          description={c.description}
          icons={c.icon ? <c.icon /> : undefined}
        />
      ))}
    </div>
  );
}