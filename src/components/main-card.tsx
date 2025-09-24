'use client'
import React, { ReactNode } from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardAction } from './ui/card'

export type ActionCardProps = {
    title: string;
    description : string;
    icons?:ReactNode;
}

export function ActionCard({title, description, icons }: ActionCardProps){
    return(<Card
  onClick={() => alert(`Card clicked: ${title}`)}
  className="cursor-pointer hover:shadow-lg transition"
>
  <CardHeader>
    {icons}
    <CardTitle>{title}</CardTitle>
    <CardDescription>{description}</CardDescription>
  </CardHeader>
</Card>
)
}