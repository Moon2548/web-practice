'use client'
import React, { useState } from 'react'
import { NotificationSidebar } from '@/components/sideswitcher'
import { FiMail, FiFlag, FiEye, FiTag } from "react-icons/fi";

const pageTitle = "ระบบการแจ้งเตือน";
const appSectionName = "เครื่องมือ";

const notificationMenus = [
  { key: "all", label: "ทั้งหมด", icon: <FiMail /> },
  { key: "direct", label: "โดยตรง", icon: <FiFlag /> },
  { key: "watch", label: "เฝ้าดู", icon: <FiEye /> },
];

const appMenus = [
  { key: "all-apps", label: "แอปทั้งหมด", icon: <FiTag /> },
  { key: "jira", label: "Jira" },
  { key: "confluence", label: "Confluence" },
];

function NotificationContent({ selected }: { selected: string }) {
  switch (selected) {
    case "all":
      return (
        <div>
          <h1 className="text-3xl font-bold mb-6">การแจ้งเตือนทั้งหมด</h1>
          <div className="space-y-4">
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="font-semibold">แจ้งเตือนใหม่</h3>
              <p className="text-gray-600">คุณมีข้อความใหม่ 5 ข้อความ</p>
              <span className="text-sm text-gray-400">2 นาทีที่แล้ว</span>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="font-semibold">อัปเดตจากทีม</h3>
              <p className="text-gray-600">โปรเจกต์ ABC ได้รับการอัปเดตแล้ว</p>
              <span className="text-sm text-gray-400">1 ชั่วโมงที่แล้ว</span>
            </div>
          </div>
        </div>
      );
    
    case "direct":
      return (
        <div>
          <h1 className="text-3xl font-bold mb-6">การแจ้งเตือนโดยตรง</h1>
          <div className="space-y-4">
            <div className="p-4 border border-blue-200 rounded-lg bg-blue-50">
              <h3 className="font-semibold text-blue-800">ข้อความส่วนตัว</h3>
              <p className="text-blue-700">John Doe ส่งข้อความหาคุณ</p>
              <span className="text-sm text-blue-500">10 นาทีที่แล้ว</span>
            </div>
          </div>
        </div>
      );
    
    case "watch":
      return (
        <div>
          <h1 className="text-3xl font-bold mb-6">รายการที่เฝ้าดู</h1>
          <div className="space-y-4">
            <div className="p-4 border border-yellow-200 rounded-lg bg-yellow-50">
              <h3 className="font-semibold text-yellow-800">อัปเดตโปรเจกต์</h3>
              <p className="text-yellow-700">โปรเจกต์ XYZ มีการเปลี่ยนแปลง</p>
              <span className="text-sm text-yellow-600">30 นาทีที่แล้ว</span>
            </div>
          </div>
        </div>
      );
    
    case "all-apps":
      return (
        <div>
          <h1 className="text-3xl font-bold mb-6">แจ้งเตือนจากแอปทั้งหมด</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold">Jira</h3>
              <p className="text-gray-600">5 งานใหม่ถูกมอบหมาย</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold">Confluence</h3>
              <p className="text-gray-600">เอกสารใหม่ถูกแชร์</p>
            </div>
          </div>
        </div>
      );
    
    case "jira":
      return (
        <div>
          <h1 className="text-3xl font-bold mb-6">แจ้งเตือนจาก Jira</h1>
          <div className="space-y-4">
            <div className="p-4 border border-green-200 rounded-lg bg-green-50">
              <h3 className="font-semibold text-green-800">งานใหม่</h3>
              <p className="text-green-700">PROJ-123: แก้ไข bug ในระบบ login</p>
              <span className="text-sm text-green-600">มอบหมายให้คุณ</span>
            </div>
            <div className="p-4 border border-green-200 rounded-lg bg-green-50">
              <h3 className="font-semibold text-green-800">งานเสร็จแล้ว</h3>
              <p className="text-green-700">PROJ-120: การออกแบบ UI เสร็จสิ้น</p>
              <span className="text-sm text-green-600">1 ชั่วโมงที่แล้ว</span>
            </div>
          </div>
        </div>
      );
    
    case "confluence":
      return (
        <div>
          <h1 className="text-3xl font-bold mb-6">แจ้งเตือนจาก Confluence</h1>
          <div className="space-y-4">
            <div className="p-4 border border-purple-200 rounded-lg bg-purple-50">
              <h3 className="font-semibold text-purple-800">เอกสารใหม่</h3>
              <p className="text-purple-700">คู่มือการใช้งานระบบใหม่</p>
              <span className="text-sm text-purple-600">แชร์โดย Admin</span>
            </div>
          </div>
        </div>
      );
    
    default:
      return (
        <div className="text-center py-12">
          <h2 className="text-xl text-gray-500">เลือกเมนูทางซ้ายเพื่อดูเนื้อหา</h2>
        </div>
      );
  }
}

export default function NotificationsPage() {
  const [selected, setSelected] = useState("all");

  return (
    <div className="flex min-h-screen">
      <NotificationSidebar
        selected={selected}
        onSelect={setSelected}
        title={pageTitle}              
        appSectionTitle={appSectionName} 
        mainMenus={notificationMenus}
        appMenus={appMenus}
      />
      <main className="flex-1 p-6">
        <NotificationContent selected={selected} />
      </main>
    </div>
  );
}