import React from 'react'
import { MenuSwitcher } from '@/components/tabswitcher'

interface MenuItem {
  key: string;
  label: string;
  icon?: React.ReactNode;
}

interface NotificationSidebarProps {
  selected: string;
  onSelect: (key: string) => void;
  title?: string; 
  mainMenus: MenuItem[]; 
  appMenus?: MenuItem[];
  appSectionTitle?: string; 
  className?: string;
}

export function NotificationSidebar({ 
  selected, 
  onSelect, 
  title = "การแจ้งเตือน",
  mainMenus,
  appMenus,
  appSectionTitle = "แอป",
  className
}: NotificationSidebarProps) {
  return (
    <aside className={`w-64 p-6 border-r ${className || ""}`}>
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      
      <MenuSwitcher
        items={mainMenus}
        selected={selected}
        onSelect={onSelect}
        variant="sidebar"
      />
      
      {appMenus && appMenus.length > 0 && (
        <>
          <div className="mt-6 text-gray-500 text-sm mb-2">{appSectionTitle}</div>
          <MenuSwitcher
            items={appMenus}
            selected={selected}
            onSelect={onSelect}
            variant="sidebar"
          />
        </>
      )}
    </aside>
  );
}