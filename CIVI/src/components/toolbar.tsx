"use client";
import React from "react";
import { Moon, Sun, Languages, Download, Printer, RotateCcw, Loader2 } from "lucide-react";
import { useApp } from "@/contexts/app-provider";
import { useTranslation } from "@/hooks/use-translation";
import { Button } from "@/components/ui/button";
import { CvIcon } from "@/components/icons/cv-icon";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { Language } from "@/lib/types";
import { useToast } from "@/hooks/use-toast";

export function Toolbar() {
  const { state, dispatch } = useApp();
  const t = useTranslation();
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = React.useState(false);

  const handleThemeToggle = () => {
    dispatch({ type: "SET_THEME", payload: state.theme === "light" ? "dark" : "light" });
  };

  const handleLanguageChange = (lang: Language) => {
    dispatch({ type: 'SET_LANGUAGE', payload: lang });
  }

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadImage = async () => {
    setIsProcessing(true);
    try {
      const { default: html2canvas } = await import('html2canvas');
      const cvElement = document.getElementById('cv-preview-wrapper');
      
      if (!cvElement) {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Could not find CV element to capture.",
        });
        setIsProcessing(false);
        return;
      }

      const canvas = await html2canvas(cvElement, {
          scale: 3,
          useCORS: true,
          backgroundColor: null,
      });
      const link = document.createElement('a');
      link.download = `CeeVee-${Date.now()}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch(error) {
       toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to generate image. Please try again.",
      });
      console.error(error);
    } finally {
        setIsProcessing(false);
    }
  };


  const handleReset = () => {
      dispatch({ type: 'RESET_CV_DATA' });
  }

  return (
    <header className="flex-shrink-0 flex items-center justify-between p-2 border-b print-hidden">
      <div className="flex items-center gap-2">
        <div className="p-2 bg-primary/10 rounded-lg">
            <CvIcon className="text-primary" />
        </div>
        <h1 className="text-lg font-bold font-headline text-foreground">{t.title}</h1>
      </div>
      <div className="flex items-center gap-1">
        
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="ghost" size="icon">
              <RotateCcw />
              <span className="sr-only">{t.resetForm}</span>
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>{t.resetConfirmationTitle}</AlertDialogTitle>
              <AlertDialogDescription>
                {t.resetConfirmationDescription}
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>{t.cancel}</AlertDialogCancel>
              <AlertDialogAction onClick={handleReset} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">{t.confirmReset}</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                  <Languages />
                  <span className="sr-only">Toggle Language</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuRadioGroup value={state.language} onValueChange={(value) => handleLanguageChange(value as Language)}>
                  <DropdownMenuRadioItem value="en">{t.english}</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="ar">{t.arabic}</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>

        <Button variant="ghost" size="icon" onClick={handleThemeToggle}>
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
        
        <Button size="icon" onClick={handleDownloadImage} variant="ghost" disabled={isProcessing}>
            {isProcessing ? <Loader2 className="animate-spin" /> : <Download />}
            <span className="sr-only">{t.downloadImage}</span>
        </Button>

        <Button size="icon" onClick={handlePrint} variant="ghost">
          <Printer />
          <span className="sr-only">{t.print}</span>
        </Button>

      </div>
    </header>
  );
}
