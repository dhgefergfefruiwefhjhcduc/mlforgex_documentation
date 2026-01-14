
// "use client"
// import React, { useState, useEffect } from "react";
// import DocumentationHeader from "../components/documentation/DocumentationHeader";
// import NavigationSidebar from "../components/documentation/NavigationSidebar";
// import HeroSection from "../components/documentation/HeroSection";
// import QuickStartSection from "../components/documentation/QuickStartSection";
// import InstallationSection from "../components/documentation/InstallationSection";
// import FeaturesSection from "../components/documentation/FeaturesSection";
// import CLIReferenceSection from "../components/documentation/CLIReferenceSection";
// import PythonAPISection from "../components/documentation/PythonAPISection";
// import ExamplesSection from "../components/documentation/ExamplesSection";
// import ArtifactsSection from "../components/documentation/ArtifactsSection";
// import HowItWorksSection from "../components/documentation/HowItWorksSection";
// import TestingSection from "../components/documentation/TestingSection";
// import LicenseSection from "../components/documentation/LicenseSection";
// import Why from "../components/documentation/why";
// import Automl from "../components/documentation/automl";

// export default function Documentation() {
//   const [activeSection, setActiveSection] = useState('overview');
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = [
//         'overview','automl', 'quickstart', 'installation', 'features', 
//         'cli-reference', 'python-api', 'examples', 'artifacts', 
//         'how-it-works', 'testing','mlforgex', 'license'
//       ];
      
//       for (const section of sections) {
//         const element = document.getElementById(section);
//         if (element) {
//           const rect = element.getBoundingClientRect();
//           if (rect.top <= 100 && rect.bottom >= 100) {
//             setActiveSection(section);
//             break;
//           }
//         }
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <DocumentationHeader 
//         sidebarOpen={sidebarOpen}
//         setSidebarOpen={setSidebarOpen}
//       />
      
        
//         <main className="flex-1 w-full min-h-screen">
//       <div className=" grid-cols-2 w-full mob">
//         <NavigationSidebar 
//           activeSection={activeSection}
//           setActiveSection={setActiveSection}
//           sidebarOpen={sidebarOpen}
//           setSidebarOpen={setSidebarOpen}
//         />
//           <div className="w-[90%] pl-[25%] cont">
//             <HeroSection />
//             <Automl/>
//             <QuickStartSection />
//             <InstallationSection />
//             <FeaturesSection />
//             <CLIReferenceSection />
//             <PythonAPISection />
//             <ExamplesSection />
//             <ArtifactsSection />
//             <HowItWorksSection />
//             <TestingSection />
//             <Why />
//             <LicenseSection />
//           </div>
//       </div>
//         </main>
//     </div>
//   );
// }
"use client"
import {useEffect } from "react";
import { useRouter} from "next/navigation";
export default function Documentation() {
  const router=useRouter();
  useEffect(() => {
    router.replace('/v1.1.1');
  }, [router]);

  return null;
}