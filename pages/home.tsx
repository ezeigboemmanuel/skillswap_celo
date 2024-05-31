"use client"
import NavBar from "@/components/NavBar";
import Alert from "@/components/homecomponents/Alert";
import Circles from "@/components/homecomponents/Circles";
import Skills from "@/components/homecomponents/Skills";
import Stats from "@/components/homecomponents/Stats";
import Workshops from "@/components/homecomponents/Workshops";
import React, { useEffect } from "react";

const home = () => {
  useEffect(() => {
    return window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [])
  
  return (
    <div className="max-w-md mx-auto">
      <div className="fixed bottom-0 w-full z-10">
        <NavBar />
      </div>
      <div className="px-3">
        <Alert />
        <Stats />
        <Skills />
        <Workshops />
        <Circles />
      </div>
    </div>
  );
};

export default home;
