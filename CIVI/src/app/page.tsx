"use client";

import { HomePage } from "@/components/home-page";
import { LandingPage } from "@/components/landing-page";
import React from "react";

export default function Home() {
  const [isAppStarted, setIsAppStarted] = React.useState(false);

  if (!isAppStarted) {
    return <LandingPage onGetStarted={() => setIsAppStarted(true)} />;
  }

  return <HomePage />;
}
