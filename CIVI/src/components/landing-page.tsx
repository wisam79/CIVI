"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { CvIcon } from "@/components/icons/cv-icon";
import { ArrowRight } from "lucide-react";

type LandingPageProps = {
  onGetStarted: () => void;
};

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
    </svg>
);


export function LandingPage({ onGetStarted }: LandingPageProps) {

  return (
    <div dir="rtl" className="flex h-full w-full flex-col bg-background text-foreground animate-in fade-in-5 duration-1000">
      <main className="flex-1 flex flex-col justify-center">
        <div className="container mx-auto flex flex-col items-center justify-center text-center px-4 py-8">
            <div className="inline-block p-4 bg-primary/10 rounded-2xl mb-6 animate-in fade-in slide-in-from-top-12 duration-1000">
              <CvIcon className="h-12 w-12 text-primary" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold font-cairo tracking-tighter !leading-tight animate-in fade-in slide-in-from-top-16 duration-1000 delay-100">
              أنشئ سيرتك الذاتية الاحترافية بكل سهولة
            </h1>
            <p className="mt-4 max-w-xl text-lg text-muted-foreground animate-in fade-in slide-in-from-top-20 duration-1000 delay-200 font-cairo">
              أنشئ، خصص، وحمل سيرة ذاتية مذهلة في دقائق. اختر من بين القوالب الاحترافية واترك انطباعًا دائمًا.
            </p>
            <div className="mt-8 animate-in fade-in slide-in-from-top-24 duration-1000 delay-300">
              <Button size="lg" onClick={onGetStarted} className="h-12 px-8 text-base group shadow-md hover:shadow-lg transition-all duration-300 rounded-full">
                  ابدأ الآن
                  <ArrowRight className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1" />
              </Button>
            </div>
              
        </div>
      </main>
      <footer className="flex-shrink-0 p-6 animate-in fade-in duration-1000 delay-500">
        <div className="container mx-auto flex flex-col items-center justify-center gap-2 text-sm text-muted-foreground">
          <p className="font-semibold">تم التطوير بواسطة وسام سمير</p>
          <a href="https://www.instagram.com/ly1r" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">
             <InstagramIcon className="h-7 w-7"/>
             <span className="sr-only">Instagram</span>
          </a>
        </div>
      </footer>
    </div>
  );
}
