"use client"
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Download, Copy, Check, Package, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const requirements = [
  "pandas", "numpy", "scikit-learn", "matplotlib", "seaborn", 
  "xgboost", "imbalanced-learn", "tqdm", "scipy", "requests"
];

export default function InstallationSection() {
  const [copied, setCopied] = useState(false);
  const installCommand = "pip install mlforgex";

  const copyInstallCommand = () => {
    navigator.clipboard.writeText(installCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="installation" className="py-16 border-t border-gray-200">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Installation</h2>
          <p className="text-lg text-gray-600">
            Install mlforgex from PyPI with a single command.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Download className="w-5 h-5 text-blue-600" />
                Install from PyPI
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-900 rounded-lg p-4 mb-4">
                <div className="flex items-center justify-between">
                  <code className="text-green-400 text-lg font-mono">
                    $ {installCommand}
                  </code>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={copyInstallCommand}
                    className="cursor-pointer text-gray-400 hover:text-black"
                    aria-label="Copy installation command to clipboard"
                  >
                    {copied ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </Button>
                </div>
              </div>
              
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-green-100 text-green-800 border-green-200">
                  <Package className="w-3 h-3 mr-1" />
                  Latest Version
                </Badge>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open('https://pypi.org/project/mlforgex/', '_blank')}
                  className="cursor-pointer"
                >
                  <ExternalLink className=" w-3 h-3 mr-1" />
                  View on PyPI
                </Button>
              </div>

              <p className="text-sm text-gray-600">
                The package will automatically install all required dependencies.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Requirements</CardTitle>
              <p className="text-gray-600">Minimum tested environment:</p>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <Badge className="bg-blue-100 text-blue-800 border-blue-200 mb-2">
                  Python {">="} 3.8
                </Badge>
              </div>

              <h4 className="font-semibold text-gray-900 mb-3">Key Dependencies:</h4>
              <div className="grid grid-cols-2 gap-2">
                {requirements.map((req) => (
                  <div key={req} className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    <code className="font-mono">{req}</code>
                  </div>
                ))}
              </div>

              <p className="text-xs text-gray-500 mt-4">
                See the full list in requirements.txt
              </p>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </section>
  );
}