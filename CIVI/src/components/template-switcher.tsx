"use client";

import Image from "next/image";
import { useApp } from "@/contexts/app-provider";
import { useTranslation } from "@/hooks/use-translation";
import type { Template } from "@/lib/types";
import { CheckCircle } from "lucide-react";
import { OnyxIcon } from "./icons/templates/onyx-icon";
import { TopazIcon } from "./icons/templates/topaz-icon";
import { GarnetIcon } from "./icons/templates/garnet-icon";
import { QuartzIcon } from "./icons/templates/quartz-icon";
import { SapphireIcon } from "./icons/templates/sapphire-icon";
import { RubyIcon } from "./icons/templates/ruby-icon";
import { EmeraldIcon } from "./icons/templates/emerald-icon";
import { JadeIcon } from "./icons/templates/jade-icon";
import { AmethystIcon } from "./icons/templates/amethyst-icon";

const templates: { name: Template, icon: React.FC<React.SVGProps<SVGSVGElement>> }[] = [
  { name: "onyx", icon: OnyxIcon },
  { name: "topaz", icon: TopazIcon },
  { name: "garnet", icon: GarnetIcon },
  { name: "quartz", icon: QuartzIcon },
  { name: "sapphire", icon: SapphireIcon },
  { name: "ruby", icon: RubyIcon },
  { name: "emerald", icon: EmeraldIcon },
  { name: "jade", icon: JadeIcon },
  { name: "amethyst", icon: AmethystIcon },
];

export function TemplateSwitcher() {
  const { state, dispatch } = useApp();
  const t = useTranslation();

  const handleTemplateChange = (value: Template) => {
    dispatch({ type: "SET_TEMPLATE", payload: value });
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      {templates.map((template) => {
        const Icon = template.icon;
        const isSelected = state.template === template.name;
        return (
          <button
            key={template.name}
            onClick={() => handleTemplateChange(template.name)}
            className="p-0 rounded-md focus:ring-2 focus:ring-ring focus:ring-offset-2 outline-none group relative border-2"
            aria-label={t[template.name]}
             style={{
              borderColor: isSelected ? 'hsl(var(--primary))' : 'hsl(var(--border))'
            }}
          >
            <Icon className="w-full h-auto rounded-md transition-all duration-200 group-hover:opacity-80 aspect-[1/1.414]" />
            <div 
              className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-md transition-opacity duration-300 opacity-0 group-hover:opacity-100"
              style={{
                opacity: isSelected ? 1 : 0,
                backgroundColor: isSelected ? 'rgba(0,0,0,0.4)' : 'rgba(0,0,0,0.5)'
              }}
            >
             {isSelected && (
                <CheckCircle className="h-10 w-10 text-white" style={{color: 'hsl(var(--primary-foreground))'}}/>
             )}
            </div>
          </button>
        )}
      )}
    </div>
  );
}
