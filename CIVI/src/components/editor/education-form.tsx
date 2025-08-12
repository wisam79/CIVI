"use client";
import { Plus, Trash } from "lucide-react";
import { useApp } from "@/contexts/app-provider";
import { useTranslation } from "@/hooks/use-translation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function EducationForm() {
  const { state, dispatch } = useApp();
  const t = useTranslation();
  const { education } = state.cvData;

  const handleAddItem = () => dispatch({ type: 'ADD_ITEM', payload: { section: 'education' } });
  const handleRemoveItem = (id: string) => dispatch({ type: 'REMOVE_ITEM', payload: { section: 'education', id } });
  const handleChange = (id: string, field: string, value: string) => {
    dispatch({ type: 'UPDATE_ITEM', payload: { section: 'education', id, field, value } });
  };

  return (
    <div className="space-y-4">
      {education.map((item, index) => (
        <Card key={item.id} className="overflow-hidden">
           <CardHeader className="flex flex-row items-center justify-between p-4 bg-muted/50 border-b">
             <CardTitle className="text-base font-medium">{item.degree || t.degree}</CardTitle>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground" onClick={() => handleRemoveItem(item.id)}>
              <Trash className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent className="p-4 space-y-4">
            <div className="space-y-4">
                <div className="space-y-2">
                <Label htmlFor={`edu-degree-${index}`}>{t.degree}</Label>
                <Input id={`edu-degree-${index}`} value={item.degree} onChange={(e) => handleChange(item.id, 'degree', e.target.value)} />
                </div>
                 <div className="space-y-2">
                    <Label htmlFor={`edu-institution-${index}`}>{t.institution}</Label>
                    <Input id={`edu-institution-${index}`} value={item.institution} onChange={(e) => handleChange(item.id, 'institution', e.target.value)} />
                </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor={`edu-date-${index}`}>{t.date}</Label>
              <Input id={`edu-date-${index}`} value={item.date} onChange={(e) => handleChange(item.id, 'date', e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`edu-desc-${index}`}>{t.descriptionField}</Label>
              <Textarea id={`edu-desc-${index}`} value={item.description} onChange={(e) => handleChange(item.id, 'description', e.target.value)} />
            </div>
          </CardContent>
        </Card>
      ))}
      <Button onClick={handleAddItem} variant="outline" className="w-full">
          <Plus className="mr-2 h-4 w-4"/>
          {t.addEducation}
      </Button>
    </div>
  );
}
