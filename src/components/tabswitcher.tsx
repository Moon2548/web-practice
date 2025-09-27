import React from "react";

type Tab = "done" | "seen";

interface TabSwitcherProps {
  tab: Tab;
  setTab: (tab: Tab) => void;
  labels?: { done: string; seen: string };
}

export function TabSwitcher({ tab, setTab, labels }: TabSwitcherProps) {
  const tabLabels = labels || { done: "ทำงานไปแล้วเมื่อ", seen: "ดูแล้ว" };

  return (
    <div className="flex gap-4 border-b mb-6">
      <button
        className={`pb-1 border-b-2 ${
          tab === "done"
            ? "border-blue-500 text-blue-600 font-medium"
            : "border-transparent text-gray-500"
        }`}
        onClick={() => setTab("done")}
      >
        {tabLabels.done}
      </button>
      <button
        className={`pb-1 border-b-2 ${
          tab === "seen"
            ? "border-blue-500 text-blue-600 font-medium"
            : "border-transparent text-gray-500"
        }`}
        onClick={() => setTab("seen")}
      >
        {tabLabels.seen}
      </button>
    </div>
  );
}