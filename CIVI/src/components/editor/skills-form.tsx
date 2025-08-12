"use client";
import { Trash, Plus } from "lucide-react";
import { useApp } from "@/contexts/app-provider";
import { useTranslation } from "@/hooks/use-translation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

export function SkillsForm() {
  const { state, dispatch } = useApp();
  const t = useTranslation();
  const { skills } = state.cvData;

  const handleAddItem = () => dispatch({ type: 'ADD_ITEM', payload: { section: 'skills' } });
  const handleRemoveItem = (id: string) => dispatch({ type: 'REMOVE_ITEM', payload: { section: 'skills', id } });
  const handleChange = (id: string, value: string) => {
    dispatch({ type: 'UPDATE_ITEM', payload: { section: 'skills', id, field: 'name', value } });
  };

  return (
    <div className="space-y-4">
      <Card>
        <CardContent className="p-4 space-y-4">
          <div className="grid grid-cols-1 gap-2">
            {skills.map((item) => (
              <div key={item.id} className="flex items-center gap-2">
                <Input
                  value={item.name}
                  onChange={(e) => handleChange(item.id, e.target.value)}
                  placeholder={t.skillName}
                />
                <Button variant="ghost" size="icon" className="h-9 w-9 text-muted-foreground shrink-0" onClick={() => handleRemoveItem(item.id)}>
                  <Trash className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      <Button onClick={handleAddItem} variant="outline" className="w-full">
        <Plus className="mr-2 h-4 w-4" />
        {t.addSkill}
      </Button>
    </div>
  );
}
