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
  
  return (
    <div className="mx-auto max-w-5xl p-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-start">
      <Card
        onClick={() => alert(`Card clicked: ${title}`)}
        className={`cursor-pointer hover:shadow-lg transition ${cardPadding}`}
      >
        <CardHeader className={`flex flex-row items-center ${headerGap} text-left`}>
          {icons && <div className="text-primary">{icons}</div>}
          <div className="flex flex-col">
            <CardTitle className="text-lg">{title}</CardTitle>
            {description && <CardDescription>{description}</CardDescription>}
          </div>
        </CardHeader>
      </Card>
    </div>
  )
}
