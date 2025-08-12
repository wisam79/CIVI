"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, FileText, Briefcase, GraduationCap, Star } from "lucide-react";
import { PersonalForm } from "./personal-form";
import { SummaryForm } from "./summary-form";
import { ExperienceForm } from "./experience-form";
import { EducationForm } from "./education-form";
import { SkillsForm } from "./skills-form";
import { useTranslation } from "@/hooks/use-translation";

export function EditorPanel() {
  const t = useTranslation();

  const tabs = [
      { value: "personal", label: t.personal, icon: User },
      { value: "summary", label: t.summary, icon: FileText },
      { value: "experience", label: t.experience, icon: Briefcase },
      { value: "education", label: t.education, icon: GraduationCap },
      { value: "skills", label: t.skills, icon: Star },
  ];
  
  return (
    <Tabs defaultValue="personal" className="flex-1 flex flex-col overflow-hidden">
      <div className="flex-shrink-0 p-4 border-b">
          <TabsList className="grid w-full grid-cols-5 h-auto p-1">
            {tabs.map(({value, label, icon: Icon}) => (
                <TabsTrigger key={value} value={value} className="flex flex-col gap-1 h-14">
                    <Icon className="h-5 w-5"/>
                    <span className="text-xs">{label}</span>
                </TabsTrigger>
            ))}
          </TabsList>
      </div>
      <div className="flex-1 overflow-y-auto">
          <TabsContent value="personal" className="mt-0"><div className="p-4"><PersonalForm /></div></TabsContent>
          <TabsContent value="summary" className="mt-0"><div className="p-4"><SummaryForm /></div></TabsContent>
          <TabsContent value="experience" className="mt-0"><div className="p-4"><ExperienceForm /></div></TabsContent>
          <TabsContent value="education" className="mt-0"><div className="p-4"><EducationForm /></div></TabsContent>
          <TabsContent value="skills" className="mt-0"><div className="p-4"><SkillsForm /></div></TabsContent>
      </div>
    </Tabs>
  );
}
