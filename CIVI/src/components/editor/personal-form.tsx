"use client";

import React from 'react';
import { useApp } from "@/contexts/app-provider";
import { useTranslation } from "@/hooks/use-translation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User, Upload } from "lucide-react";
import { Button } from '@/components/ui/button';

export function PersonalForm() {
  const { state, dispatch } = useApp();
  const t = useTranslation();
  const { personal } = state.cvData;
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "UPDATE_FIELD",
      payload: { section: `personal.${e.target.name}`, value: e.target.value },
    });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        dispatch({
          type: "UPDATE_FIELD",
          payload: { section: 'personal.image', value: event.target?.result as string },
        });
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  
  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="space-y-6">
        <div className="flex flex-col items-center gap-4">
           <button onClick={handleUploadClick} className="rounded-full relative group">
                <Avatar className="w-32 h-32 border-4 border-muted">
                    <AvatarImage src={personal.image} alt={personal.name} />
                    <AvatarFallback>
                        <User className="w-16 h-16 text-muted-foreground" />
                    </AvatarFallback>
                </Avatar>
                <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Upload className="w-8 h-8"/>
                </div>
            </button>

            <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleImageChange}
                className="hidden" 
                accept="image/*"
            />
        </div>
      <div className="space-y-4">
        <div className="space-y-2">
            <Label htmlFor="name">{t.name}</Label>
            <Input id="name" name="name" value={personal.name} onChange={handleChange} placeholder={t.namePlaceholder} />
        </div>
        <div className="space-y-2">
            <Label htmlFor="jobTitle">{t.jobTitle}</Label>
            <Input id="jobTitle" name="jobTitle" value={personal.jobTitle} onChange={handleChange} placeholder={t.jobTitlePlaceholder} />
        </div>
        <div className="space-y-2">
            <Label htmlFor="email">{t.email}</Label>
            <Input id="email" name="email" type="email" value={personal.email} onChange={handleChange} />
        </div>
        <div className="space-y-2">
            <Label htmlFor="phone">{t.phone}</Label>
            <Input id="phone" name="phone" value={personal.phone} onChange={handleChange} />
        </div>
        <div className="space-y-2">
            <Label htmlFor="address">{t.address}</Label>
            <Input id="address" name="address" value={personal.address} onChange={handleChange} />
        </div>
        <div className="space-y-2">
            <Label htmlFor="link">{t.link}</Label>
            <Input id="link" name="link" value={personal.link} onChange={handleChange} />
        </div>
      </div>
    </div>
  );
}
