// "use client"
// import React, { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { 
//   Download, 
//   Star, 
//   Code, 
//   Zap, 
//   Shield, 
//   Rocket, 
//   GitBranch,
//   ExternalLink,
//   Copy,
//   Check,
//   ChevronDown,
//   Brain,
//   Database,
//   BarChart3
// } from "lucide-react";

// import HeroSection from "../components/advertisement/HeroSection";
// import FeaturesSection from "../components/advertisement/FeaturesSection";
// import InstallationSection from "../components/advertisement/InstallationSection";
// import CodeExamples from "../components/advertisement/CodeExamples";
// import StatsSection from "../components/advertisement/StatsSection";
// import CTASection from "../components/advertisement/CTASection";

// export default function Advertisement() {
//   const { scrollY } = useScroll();
//   const y1 = useTransform(scrollY, [0, 300], [0, 50]);
//   const y2 = useTransform(scrollY, [0, 300], [0, -50]);

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900">
//       {/* Background Effects */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none">
//         <motion.div 
//           style={{ y: y1 }}
//           className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
//         />
//         <motion.div 
//           style={{ y: y2 }}
//           className="absolute top-60 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
//         />
//       </div>

//       <div className="relative z-10">
//         <HeroSection />
//         <FeaturesSection />
//         <InstallationSection />
//         <CodeExamples />
//         <StatsSection />
//         <CTASection />
//       </div>
//     </div>
//   );
// }

"use client"
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  BookOpen, 
  Download, 
  Code, 
  Play, 
  Terminal,
  FileText,
  Settings,
  Zap,
  Shield,
  BarChart3,
  ChevronRight,
  ExternalLink,
  Copy,
  Check,
  Menu,
  X
} from "lucide-react";

import DocumentationHeader from "../components/documentation/DocumentationHeader";
import NavigationSidebar from "../components/documentation/NavigationSidebar";
import HeroSection from "../components/documentation/HeroSection";
import QuickStartSection from "../components/documentation/QuickStartSection";
import InstallationSection from "../components/documentation/InstallationSection";
import FeaturesSection from "../components/documentation/FeaturesSection";
import CLIReferenceSection from "../components/documentation/CLIReferenceSection";
import PythonAPISection from "../components/documentation/PythonAPISection";
import ExamplesSection from "../components/documentation/ExamplesSection";
import ArtifactsSection from "../components/documentation/ArtifactsSection";
import HowItWorksSection from "../components/documentation/HowItWorksSection";
import TestingSection from "../components/documentation/TestingSection";
import LicenseSection from "../components/documentation/LicenseSection";

export default function Documentation() {
  const [activeSection, setActiveSection] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'overview', 'quickstart', 'installation', 'features', 
        'cli-reference', 'python-api', 'examples', 'artifacts', 
        'how-it-works', 'testing', 'license'
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
            <QuickStartSection />
            <InstallationSection />
            <FeaturesSection />
            <CLIReferenceSection />
            <PythonAPISection />
            <ExamplesSection />
            <ArtifactsSection />
            <HowItWorksSection />
            <TestingSection />
            <LicenseSection />
          </div>
      </div>
        </main>
    </div>
  );
}