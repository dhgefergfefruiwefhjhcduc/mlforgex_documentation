import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Shield, ExternalLink, Mail, User, Globe,Github } from "lucide-react";
import { motion } from "framer-motion";

export default function LicenseSection() {
  return (
    <section id="license" className="py-16 border-t border-gray-200">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">License & Author</h2>
          <p className="text-lg text-gray-600">
            Open source software with MIT License - free for commercial and personal use.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-600" />
                MIT License
              </CardTitle>
              <p className="text-gray-600">Free and open source software</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex gap-2 flex-wrap justify-center items-center">
                <Badge className="bg-green-100 text-green-800 border-green-200 px-4 py-2">
                  ✅ Commercial Use Allowed
                </Badge>
                <Badge className="bg-blue-100 text-blue-800 border-blue-200 px-4 py-2">
                  ✅ Modification Allowed
                </Badge>
                <Badge className="bg-purple-100 text-purple-800 border-purple-200 px-4 py-2">
                  ✅ Distribution Allowed
                </Badge>
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  Permission is hereby granted, free of charge, to any person obtaining a copy of this software
                  and associated documentation files, to deal in the Software without restriction, including
                  without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense,
                  and/or sell copies of the Software.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5 text-blue-600" />
                Author Information
              </CardTitle>
              <p className="text-gray-600">Created and maintained by:</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">Priyanshu Mathur</h3>
                  <p className="text-gray-600">Machine Learning Enthusiast & Developer</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-gray-500" />
                    <a 
                      href="mailto:mathurpriyanshu2006@gmail.com"
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      mathurpriyanshu2006@gmail.com
                    </a>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Globe className="w-4 h-4 text-gray-500" />
                    <a 
                      href="https://my-portfolio-phi-two-53.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      Portfolio Website
                    </a>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <ExternalLink className="w-4 h-4 text-gray-500" />
                    <a 
                      href="https://pypi.org/project/mlforgex/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      PyPI Package
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer CTA */}
        <Card className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 border-none">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Install mlforgex now and transform your machine learning workflow with intelligent automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.open('https://pypi.org/project/mlforgex/', '_blank')}
                className="cursor-pointer bg-black text-white hover:bg-gray-600 hover:text-white"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View on PyPI
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.open('https://github.com/dhgefergfefruiwefhjhcduc/ML_Forgex', '_blank')}
                className="cursor-pointer bg-black text-white hover:bg-gray-600 hover:text-white"
              >
                <Github className="w-4 h-4 mr-2" />
                Open Source
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}