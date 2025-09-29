import React from "react";

interface MenuItem {
  key: string;
  label: string;
  icon?: React.ReactNode;
}

interface MenuSwitcherProps {
  items: MenuItem[];
  selected: string;
  onSelect: (key: string) => void;
  variant?: "tabs" | "sidebar";
}

export function MenuSwitcher({ items, selected, onSelect, variant = "tabs" }: MenuSwitcherProps) {
  // Tabsแนวนอน
  if (variant === "tabs") {
    return (
      <div className="flex gap-4 border-b mb-6">
        {items.map((item) => (
          <button
            key={item.key}
            className={`pb-1 border-b-2 ${
              selected === item.key
                ? "border-blue-500 text-blue-600 font-medium"
                : "border-transparent text-gray-500"
            }`}
            onClick={() => onSelect(item.key)}
          >
            {item.icon && <span className="mr-2">{item.icon}</span>}
            {item.label}
          </button>
        ))}
      </div>
    );
  }

  // แนวตั้ง
  if (variant === "sidebar") {
    return (
      <div className="space-y-1">
        {items.map((item) => (
          <button
            key={item.key}
            className={`flex items-center w-full px-3 py-2 rounded text-left ${
              selected === item.key
                ? "bg-blue-50 text-blue-600 font-medium border-l-4 border-blue-500"
                : "hover:bg-gray-100 text-gray-700"
            }`}
            onClick={() => onSelect(item.key)}
          >
            {item.icon && <span className="mr-2">{item.icon}</span>}
            {item.label}
          </button>
        ))}
      </div>
    );
  }

  return null;
}