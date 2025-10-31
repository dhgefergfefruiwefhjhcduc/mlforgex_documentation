"use client"
import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Menu, X, Download, ExternalLink, Github } from "lucide-react";

export default function DocumentationHeader({ sidebarOpen, setSidebarOpen }) {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="flex items-center justify-between px-6 py-2">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="cursor-pointer lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
          
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 flex items-center justify-center">
              <img src="./logo.png" alt="Logo" className="w-12 h-12" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">mlforgex</h1>
              <p className="text-xs text-gray-600">Documentation</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2">
            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
              v1.0.0
            </Badge>
            <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
              Python 3.8+
            </Badge>
          </div>
          
          <Button
            variant="outline"
            size="sm"
            onClick={() => window.open('https://pypi.org/project/mlforgex/', '_blank')}
            className=" cursor-pointer hidden sm:flex"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            PyPI
          </Button>
          
        </div>
      </div>
    </header>
  );
}