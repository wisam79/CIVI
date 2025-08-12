"use client";
import { Plus, Trash } from "lucide-react";
import { useApp } from "@/contexts/app-provider";
import { useTranslation } from "@/hooks/use-translation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ExperienceForm() {
  const { state, dispatch } = useApp();
  const t = useTranslation();
  const { experience } = state.cvData;

  const handleAddItem = () => dispatch({ type: 'ADD_ITEM', payload: { section: 'experience' } });
  const handleRemoveItem = (id: string) => dispatch({ type: 'REMOVE_ITEM', payload: { section: 'experience', id } });
  const handleChange = (id: string, field: string, value: string) => {
    dispatch({ type: 'UPDATE_ITEM', payload: { section: 'experience', id, field, value } });
  };

  return (
    <div className="space-y-4">
      {experience.map((item, index) => (
        <Card key={item.id} className="overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between p-4 bg-muted/50 border-b">
             <CardTitle className="text-base font-medium">{item.role || t.role}</CardTitle>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground" onClick={() => handleRemoveItem(item.id)}>
              <Trash className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent className="p-4 space-y-4">
            <div className="space-y-4">
                <div className="space-y-2">
                <Label htmlFor={`exp-role-${index}`}>{t.role}</Label>
                <Input id={`exp-role-${index}`} value={item.role} onChange={(e) => handleChange(item.id, 'role', e.target.value)} />
                </div>
                <div className="space-y-2">
                <Label htmlFor={`exp-company-${index}`}>{t.company}</Label>
                <Input id={`exp-company-${index}`} value={item.company} onChange={(e) => handleChange(item.id, 'company', e.target.value)} />
                </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor={`exp-date-${index}`}>{t.date}</Label>
              <Input id={`exp-date-${index}`} value={item.date} onChange={(e) => handleChange(item.id, 'date', e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`exp-desc-${index}`}>{t.descriptionField}</Label>
              <Textarea id={`exp-desc-${index}`} value={item.description} onChange={(e) => handleChange(item.id, 'description', e.target.value)} />
            </div>
          </CardContent>
        </Card>
      ))}
      <Button onClick={handleAddItem} variant="outline" className="w-full">
        <Plus className="mr-2 h-4 w-4"/>
        {t.addExperience}
      </Button>
    </div>
  );
}
