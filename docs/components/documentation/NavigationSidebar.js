import React from "react";
import { motion } from "framer-motion";
import { 
  BookOpen, 
  Zap, 
  Download, 
  Settings, 
  Code, 
  Terminal, 
  FileText, 
  BarChart3,
  TestTube,
  Shield,
  X
} from "lucide-react";

const navigationItems = [
  { id: 'overview', title: 'Overview', icon: BookOpen },
  { id: 'quickstart', title: 'Quick Start', icon: Zap },
  { id: 'installation', title: 'Installation', icon: Download },
  { id: 'features', title: 'Features', icon: Settings },
  { id: 'cli-reference', title: 'CLI Reference', icon: Terminal },
  { id: 'python-api', title: 'Python API', icon: Code },
  { id: 'examples', title: 'Examples', icon: FileText },
  { id: 'artifacts', title: 'Artifacts & Outputs', icon: BarChart3 },
  { id: 'how-it-works', title: 'How It Works', icon: Settings },
  { id: 'testing', title: 'Testing', icon: TestTube },
  { id: 'license', title: 'License', icon: Shield }
];

export default function NavigationSidebar({ 
  activeSection, 
  setActiveSection, 
  sidebarOpen, 
  setSidebarOpen 
}) {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(sectionId);
      setSidebarOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed top-16 left-0 h-[calc(100vh-4rem)] sidebar w-[18%] bg-white border-r border-gray-200 z-40
        transform transition-transform duration-300 ease-in-out overflow-y-auto
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0
      `}>
        <div className="p-6">
          <nav className="space-y-1">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`
                  w-full cursor-pointer flex items-center gap-3 px-4 py-3 text-left rounded-lg transition-all duration-200
                  ${activeSection === item.id
                    ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-600'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }
                `}
              >
                <item.icon className={`w-4 h-4 ${
                  activeSection === item.id ? 'text-blue-600' : 'text-gray-400'
                }`} />
                <span className="font-medium">{item.title}</span>
              </button>
            ))}
          </nav>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Need Help?</h3>
              <p className="text-sm text-gray-600 mb-3">
                Check out our examples or contact the author.
              </p>
              <div className="text-xs text-gray-500">
                📧 mathurpriyanshu2006@gmail.com
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}