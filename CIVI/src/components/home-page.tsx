"use client";
import React from 'react';
import { Edit3, Eye, Settings2 } from 'lucide-react';
import { EditorPanel } from "@/components/editor/editor-panel";
import { PreviewPanel } from "@/components/preview/preview-panel";
import { Toolbar } from "@/components/toolbar";
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/hooks/use-translation';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CustomizationPanel } from './customization-panel';


export function HomePage() {
  const t = useTranslation();
  
  const isMobile = useIsMobile();
  const [activeView, setActiveView] = React.useState<'editor' | 'preview'>('editor');


  const desktopLayout = (
    <>
      <div className="flex-1 flex flex-col overflow-hidden border-r print-hidden">
        <EditorPanel />
      </div>
      <div className="md:flex-1 md:overflow-hidden flex flex-col relative">
        <PreviewPanel />
         <div className="print-hidden absolute top-4 right-4 z-10">
            <Sheet>
                <SheetTrigger asChild>
                    <Button size="icon" className="h-12 w-12 rounded-full shadow-lg">
                        <Settings2 className="h-6 w-6" />
                    </Button>
                </SheetTrigger>
                <SheetContent className="w-[350px] sm:w-[400px] p-0 flex flex-col">
                   <SheetHeader className="p-6 pb-4">
                        <SheetTitle>{t.customize}</SheetTitle>
                    </SheetHeader>
                    <CustomizationPanel />
                </SheetContent>
            </Sheet>
        </div>
      </div>
    </>
  );

  const mobileLayout = (
    <div className="flex-1 flex flex-col min-h-0 relative">
      <div className={`flex-1 flex-col min-h-0 ${activeView === 'editor' ? 'flex' : 'hidden'}`}>
        <EditorPanel />
      </div>
       <div className={`flex-1 flex-col min-h-0 ${activeView === 'preview' ? 'flex' : 'hidden'}`}>
        <PreviewPanel />
      </div>

      <div className="print-hidden absolute bottom-20 right-4 z-10">
            <Sheet>
                <SheetTrigger asChild>
                    <Button size="icon" className="h-14 w-14 rounded-full shadow-lg">
                        <Settings2 className="h-7 w-7" />
                    </Button>
                </SheetTrigger>
                <SheetContent className="w-[350px] sm:w-[400px] p-0 flex flex-col">
                   <SheetHeader className="p-6 pb-4">
                        <SheetTitle>{t.customize}</SheetTitle>
                    </SheetHeader>
                    <CustomizationPanel />
                </SheetContent>
            </Sheet>
        </div>
    </div>
  );

  return (
    <div className="flex h-screen flex-col bg-muted/40 print:bg-white print-container">
      <div className="relative flex flex-col h-full bg-background text-foreground w-full shadow-2xl overflow-hidden print:shadow-none print:overflow-visible">
        
        <div className="flex-shrink-0 print-hidden">
          <Toolbar />
        </div>
        
        <main className="flex-1 flex flex-col md:flex-row min-h-0 relative">
          {isMobile ? mobileLayout : desktopLayout}
        </main>
        
        {isMobile && (
          <div className="flex-shrink-0 grid grid-cols-2 gap-px bg-border print-hidden">
            <Button
              size="lg"
              variant={activeView === 'editor' ? 'default' : 'ghost'}
              className="rounded-none h-16"
              onClick={() => setActiveView('editor')}
            >
              <Edit3 className="mr-2" />
              {t.editor}
            </Button>
            <Button
              size="lg"
              variant={activeView === 'preview' ? 'default' : 'ghost'}
              className="rounded-none h-16"
              onClick={() => setActiveView('preview')}
            >
              <Eye className="mr-2" />
              {t.preview}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
