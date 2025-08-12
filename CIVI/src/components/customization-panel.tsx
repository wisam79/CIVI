"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { TemplateSwitcher } from "./template-switcher";
import { useApp } from "@/contexts/app-provider";
import { useTranslation } from "@/hooks/use-translation";
import { ACCENT_COLORS, FONT_OPTIONS } from "@/lib/constants";
import { Check, Columns, Palette, Pilcrow, Ruler, Square } from "lucide-react";
import { Label } from "./ui/label";
import { cn } from "@/lib/utils";
import type { Font, PaperSize } from "@/lib/types";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Slider } from "./ui/slider";
import { ScrollArea } from "./ui/scroll-area";

export function CustomizationPanel() {
  const { state, dispatch } = useApp();
  const t = useTranslation();

  return (
    <ScrollArea className="flex-1">
    <div className="p-6 pt-0">
      <Accordion type="multiple" defaultValue={["item-1", "item-2", "item-3", "item-4"]} className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <div className="flex items-center gap-2">
                <Columns className="w-5 h-5"/>
                <span className="font-semibold">{t.templates}</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pt-4">
            <TemplateSwitcher />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            <div className="flex items-center gap-2">
                <Palette className="w-5 h-5"/>
                <span className="font-semibold">{t.accentColor}</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pt-4">
             <div className="grid grid-cols-7 gap-2">
                {ACCENT_COLORS.map(color => (
                    <button
                    key={color}
                    onClick={() => dispatch({ type: 'SET_ACCENT_COLOR', payload: color })}
                    className={`w-10 h-10 rounded-full border-2 transition-all flex items-center justify-center`}
                    style={{ backgroundColor: color, borderColor: state.accentColor === color ? 'hsl(var(--primary))' : 'transparent' }}
                    aria-label={`Set accent color to ${color}`}
                    >
                    {state.accentColor === color && <Check className="w-5 h-5 text-white" />}
                    </button>
                ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
             <div className="flex items-center gap-2">
                <Pilcrow className="w-5 h-5"/>
                <span className="font-semibold">{t.fontFamily}</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pt-4 space-y-4">
            <div className="space-y-3">
                <Label>{t.arabicFonts}</Label>
                <div className="grid grid-cols-2 gap-2">
                     {FONT_OPTIONS.arabic.map(font => (
                        <button key={font.value} onClick={() => dispatch({ type: 'SET_FONT', payload: font.value })} className={cn("border rounded-md px-3 py-2 text-sm text-center transition-colors", font.className, state.font === font.value ? 'bg-primary text-primary-foreground border-primary' : 'hover:bg-accent hover:text-accent-foreground')}>
                            {font.label}
                        </button>
                    ))}
                </div>
            </div>
             <div className="space-y-3">
                <Label>{t.englishFonts}</Label>
                <div className="grid grid-cols-2 gap-2">
                     {FONT_OPTIONS.english.map(font => (
                        <button key={font.value} onClick={() => dispatch({ type: 'SET_FONT', payload: font.value })} className={cn("border rounded-md px-3 py-2 text-sm text-center transition-colors", font.className, state.font === font.value ? 'bg-primary text-primary-foreground border-primary' : 'hover:bg-accent hover:text-accent-foreground')}>
                            {font.label}
                        </button>
                    ))}
                </div>
            </div>
          </AccordionContent>
        </AccordionItem>
         <AccordionItem value="item-4">
          <AccordionTrigger>
             <div className="flex items-center gap-2">
                <Ruler className="w-5 h-5"/>
                <span className="font-semibold">{t.layout}</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pt-4 space-y-6">
            <div className="space-y-3">
                <Label>{t.fontSize}</Label>
                <div className="flex items-center gap-4">
                    <Slider
                        id="font-size"
                        min={12}
                        max={18}
                        step={1}
                        value={[state.fontSize]}
                        onValueChange={([value]) => dispatch({ type: 'SET_FONT_SIZE', payload: value })}
                    />
                    <span className="text-sm w-8 text-center font-semibold">{state.fontSize}px</span>
                </div>
            </div>
            <div className="space-y-3">
                <Label>{t.borderRadius}</Label>
                <div className="flex items-center gap-4">
                    <Slider
                        id="border-radius"
                        min={0}
                        max={24}
                        step={2}
                        value={[state.borderRadius]}
                        onValueChange={([value]) => dispatch({ type: 'SET_BORDER_RADIUS', payload: value })}
                    />
                    <span className="text-sm w-8 text-center font-semibold">{state.borderRadius}px</span>
                </div>
            </div>
             <div className="space-y-3">
                <Label>{t.paperSize}</Label>
                 <RadioGroup 
                  value={state.paperSize} 
                  onValueChange={(value) => dispatch({ type: 'SET_PAPER_SIZE', payload: value as PaperSize })} 
                  className="flex gap-4"
                >
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="A4" id="a4" />
                        <Label htmlFor="a4" className="font-normal">A4</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="Letter" id="letter" />
                        <Label htmlFor="letter" className="font-normal">Letter</Label>
                    </div>
                </RadioGroup>
              </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
    </ScrollArea>
  );
}
