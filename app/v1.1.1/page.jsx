
"use client"
import React, { useState, useEffect } from "react";
import DocumentationHeader from "../v1.1.1/components/documentation/DocumentationHeader";
import NavigationSidebar from "../v1.1.1/components/documentation/NavigationSidebar";
import HeroSection from "../../GlobalComponents/HeroSection";
import QuickStartSection from "../v1.1.1/components/documentation/QuickStartSection";
import InstallationSection from "../../GlobalComponents/InstallationSection";
import FeaturesSection from "../v1.1.1/components/documentation/FeaturesSection";
import CLIReferenceSection from "../v1.1.1/components/documentation/CLIReferenceSection";
import PythonAPISection from "../v1.1.1/components/documentation/PythonAPISection";
import ExamplesSection from "../v1.1.1/components/documentation/ExamplesSection";
import ArtifactsSection from "../v1.1.1/components/documentation/ArtifactsSection";
import HowItWorksSection from "../../GlobalComponents/HowItWorksSection";
import TestingSection from "../../GlobalComponents/TestingSection";
import LicenseSection from "../../GlobalComponents/LicenseSection";
import Why from "../../GlobalComponents/why";
import Automl from "../../GlobalComponents/automl";
import WhatsNew from "../v1.1.1/components/documentation/WhatsNew";


export default function Documentation() {
  const [activeSection, setActiveSection] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'overview','whats-new','automl', 'quickstart', 'installation', 'features', 
        'cli-reference', 'python-api', 'examples', 'artifacts', 
        'how-it-works', 'testing','mlforgex', 'license'
      ];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <DocumentationHeader 
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      
        
        <main className="flex-1 w-full min-h-screen">
      <div className=" grid-cols-2 w-full mob">
        <NavigationSidebar 
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
          <div className="w-[90%] pl-[25%] cont">
            <HeroSection />
            <Automl/>
            <WhatsNew />
            <QuickStartSection />
            <InstallationSection />
            <FeaturesSection />
            <CLIReferenceSection />
            <PythonAPISection />
            <ExamplesSection />
            <ArtifactsSection />
            <HowItWorksSection />
            <TestingSection />
            <Why />
            <LicenseSection />
          </div>
      </div>
        </main>
    </div>
  );
}