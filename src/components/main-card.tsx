'use client'
import React, { ReactNode } from 'react'
import { Card, CardHeader, CardTitle, CardDescription } from './ui/card'

export type ActionCardProps = {
  title: string
  description?: string
  icons?: ReactNode
}

export function ActionCard({ title, description, icons }: ActionCardProps) {
  const cardPadding = description ? 'py-4 px-6' : 'py-2 px-4';
  const headerGap = description ? 'gap-3' : 'gap-1';
  const minHeight = description ? 'min-h-[85px]' : 'min-h-[45 px]'; 
  const cardWidth = 'w-[100px]';

  return (
    <Card
      onClick={() => alert(`Card clicked: ${title}`)}
      className={`cursor-pointer hover:shadow-lg transition ${cardWidth} min-w-[220px] ${minHeight} ${cardPadding}`}
      
    >
      <CardHeader className={`flex flex-row items-center ${headerGap} text-left`}>
        {icons && <div className="text-primary">{icons}</div>}
        <div className="flex flex-col">
          <CardTitle className="text-lg">{title}</CardTitle>
          {description && <CardDescription>{description}</CardDescription>}
        </div>
      </CardHeader>
    </Card>
  )
}
