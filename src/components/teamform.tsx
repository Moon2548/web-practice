'use client'
import React, { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { X, ArrowLeft, Settings } from 'lucide-react'

interface TeamFormProps {
  onClose?: () => void;
  onSubmit?: (data: TeamFormData) => void;
}

interface TeamFormData {
  teamName: string;
  teamType: string;
  inviteEmails: string[];
}

export function TeamForm({ onClose, onSubmit }: TeamFormProps) {
  const [formData, setFormData] = useState<TeamFormData>({
    teamName: '',
    teamType: '',
    inviteEmails: []
  });

  const [emailInput, setEmailInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(formData);
  };

  const addEmail = () => {
    if (emailInput && !formData.inviteEmails.includes(emailInput)) {
      setFormData(prev => ({
        ...prev,
        inviteEmails: [...prev.inviteEmails, emailInput]
      }));
      setEmailInput('');
    }
  };

  const removeEmail = (email: string) => {
    setFormData(prev => ({
      ...prev,
      inviteEmails: prev.inviteEmails.filter(e => e !== email)
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <Button variant="ghost" size="sm" onClick={onClose}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            ยี่ง สร้างทีม
          </Button>
        </div>

        {/* Hero Banner */}
        <div className="bg-gradient-to-r from-green-400 to-green-500 rounded-lg p-6 mb-6 text-white relative overflow-hidden">
          <div className="relative z-10">
            <p className="text-sm opacity-90">วันจันทร์ที่ 23 กันยายน</p>
            <h1 className="text-2xl font-bold">สร้างสเปส </h1>
          </div>
          <div className="absolute right-4 top-4 w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
            <Settings className="w-8 h-8" />
          </div>
        </div>

        {/* Form */}
        <Card>
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Team Name */}
              <div>
                <Label htmlFor="teamName" className="text-sm font-medium">
                  Name *
                </Label>
                <Input
                  id="teamName"
                  value={formData.teamName}
                  onChange={(e) => setFormData(prev => ({ ...prev, teamName: e.target.value }))}
                  placeholder="ชื่อทีมของคุณ"
                  className="mt-1"
                  required
                />
              </div>

              {/* Team Type */}
              <div>
                <Label className="text-sm font-medium">เทมเพลตทีมต์ทีม *</Label>
                <div className="mt-2 flex items-center gap-2">
                  <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    <Settings className="w-3 h-3 mr-1" />
                   
                  </div>
                  <span className="text-sm text-gray-500">ปอมเทโนคนไม</span>
                </div>
              </div>

              {/* Invite People */}
              <div>
                <Label className="text-sm font-medium">
                  เรียนเชิญคนเข้าร่วมทีมของคุณ <span className="text-blue-600 underline cursor-pointer">เรียนรู้เพิ่มเติม</span>
                </Label>
                <div className="mt-2 flex gap-2">
                  <Input
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    placeholder="อีเมลหรือชื่อผู้ใช้"
                    onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addEmail())}
                  />
                  <Button type="button" onClick={addEmail}>
                    เพิ่ม
                  </Button>
                </div>
                
                {/* Email Tags */}
                {formData.inviteEmails.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {formData.inviteEmails.map((email) => (
                      <div key={email} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border border-gray-200 text-gray-800 bg-white pr-1">
                        {email}
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="ml-1 h-auto p-0 w-4 h-4"
                          onClick={() => removeEmail(email)}
                        >
                          <X className="w-3 h-3" />
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Submit Buttons */}
              <div className="flex justify-end gap-3 pt-4">
                <Button type="button" variant="outline" onClick={onClose}>
                  ยกเลิก
                </Button>
                <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                  สร้าง
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}