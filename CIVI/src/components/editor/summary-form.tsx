"use client";

import { useApp } from "@/contexts/app-provider";
import { useTranslation } from "@/hooks/use-translation";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function SummaryForm() {
  const { state, dispatch } = useApp();
  const t = useTranslation();

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch({
      type: "UPDATE_FIELD",
      payload: { section: "summary", value: e.target.value },
    });
  };

  return (
    <div className="space-y-2">
      <Label htmlFor="summary">{t.profileSummary}</Label>
      <Textarea
        id="summary"
        value={state.cvData.summary}
        onChange={handleChange}
        placeholder={t.summaryPlaceholder}
        rows={10}
      />
    </div>
  );
}
