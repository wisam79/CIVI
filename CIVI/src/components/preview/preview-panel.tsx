"use client";

import React from 'react';
import { useApp } from "@/contexts/app-provider";
import { OnyxTemplate } from "./templates/onyx-template";
import { TopazTemplate } from "./templates/topaz-template";
import { GarnetTemplate } from "./templates/garnet-template";
import { QuartzTemplate } from "./templates/quartz-template";
import { SapphireTemplate } from "./templates/sapphire-template";
import { RubyTemplate } from "./templates/ruby-template";
import { EmeraldTemplate } from "./templates/emerald-template";
import { JadeTemplate } from "./templates/jade-template";
import { AmethystTemplate } from "./templates/amethyst-template";
import type { PaperSize } from '@/lib/types';
import { FONT_OPTIONS } from '@/lib/constants';

const TemplateComponents = {
    onyx: OnyxTemplate,
    topaz: TopazTemplate,
    garnet: GarnetTemplate,
    quartz: QuartzTemplate,
    sapphire: SapphireTemplate,
    ruby: RubyTemplate,
    emerald: EmeraldTemplate,
    jade: JadeTemplate,
    amethyst: AmethystTemplate,
};

const PAGE_DIMENSIONS: Record<PaperSize, { width: number, height: number }> = {
    A4: { width: 595, height: 842 },
    Letter: { width: 612, height: 792 },
};

export function PreviewPanel() {
  const { state } = useApp();
  const { cvData, accentColor, template, language, paperSize, font, fontSize, borderRadius } = state;
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [scale, setScale] = React.useState(1);

  const TemplateComponent = TemplateComponents[template];
  
  const allFonts = [...FONT_OPTIONS.arabic, ...FONT_OPTIONS.english];
  const selectedFont = allFonts.find(f => f.value === font);
  const fontClass = selectedFont?.className ?? 'font-tajawal';
  
  const dimensions = PAGE_DIMENSIONS[paperSize];

  React.useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateScale = () => {
        const { width: containerWidth, height: containerHeight } = container.getBoundingClientRect();
        
        const scaleX = (containerWidth - 32) / dimensions.width;
        const scaleY = (containerHeight - 32) / dimensions.height;
        const newScale = Math.min(scaleX, scaleY, 1);
        setScale(newScale);
    };

    updateScale();
    const resizeObserver = new ResizeObserver(updateScale);
    resizeObserver.observe(container);
    
    return () => {
        if (container) {
            resizeObserver.unobserve(container);
        }
    };
  }, [dimensions.width, dimensions.height, paperSize]);

  return (
    <div 
        className="w-full h-full overflow-auto bg-muted p-4 flex justify-center items-start print:p-0 print:bg-white print:overflow-visible" 
        ref={containerRef}
        dir="ltr"
    >
       <div
        id="cv-preview-wrapper"
        className="mx-auto print:mx-0 print:!w-full print:!h-full"
        style={{ 
            height: `${dimensions.height * scale}px`,
            width: `${dimensions.width * scale}px`,
        }}
       >
            <div
                id="cv-preview"
                className="bg-white shadow-lg origin-top-left print:shadow-none"
                style={{
                    width: `${dimensions.width}px`,
                    height: `${dimensions.height}px`,
                    transform: `scale(${scale})`,
                    transformOrigin: 'top left',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: `${borderRadius}px`,
                    overflow: 'hidden'
                }}
            >
                <TemplateComponent 
                    data={cvData}
                    accentColor={accentColor}
                    language={language}
                    fontClass={fontClass}
                    fontSize={fontSize}
                />
            </div>
       </div>
    </div>
  );
}
