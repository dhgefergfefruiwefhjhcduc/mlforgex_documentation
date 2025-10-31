"use client"
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink, Star, Users, TrendingUp, ChevronDown,Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const scrollToFeatures = () => {
    document.getElementById('features').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="overview" className="py-8 md:py-12">
      <motion.div
      className="flex justify-between items-center flex-col"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-4 md:mb-6">
          <Badge className="bg-blue-100 text-blue-800 border-blue-200 text-xs md:text-sm">
            <TrendingUp className="w-3 h-3 mr-1" />
            End-to-End ML Automation
          </Badge>
          <Badge className="bg-green-100 text-green-800 border-green-200 text-xs md:text-sm">
            <Star className="w-3 h-3 mr-1" />
            Production Ready
          </Badge>
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6 tracking-tight">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            mlforgex
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8 max-w-3xl leading-relaxed">
          An <strong>end-to-end machine learning automation package</strong> for Python that allows you to{" "}
          <strong>train, evaluate, and make predictions</strong> with minimal effort — handling{" "}
          <strong>data preprocessing</strong>, <strong>model selection</strong>,{" "}
          <strong>hyperparameter tuning</strong>, and <strong>artifact generation</strong> automatically.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-6 md:mb-8">
          <Button 
            size="lg" 
            className="cursor-pointer bg-blue-600 hover:bg-blue-700 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg"
          >
            <Download className="w-4 h-4 md:w-5 md:h-5 mr-2" />
            pip install mlforgex
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="cursor-pointer px-6 md:px-8 py-3 md:py-4 text-base md:text-lg"
            onClick={() => window.open('https://pypi.org/project/mlforgex/', '_blank')}
          >
            <ExternalLink className="w-4 h-4 md:w-5 md:h-5 mr-2" />
            View on PyPI
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl md:rounded-2xl p-6 md:p-8">
          <div className="text-center">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-2 md:mb-3">
              <Users className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 text-sm md:text-base">Classification , Regression & Sentimental</h3>
            <p className="text-xs md:text-sm text-gray-600 mt-1">Supports problem types automatically</p>
          </div>

          <div className="text-center">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-2 md:mb-3">
              <TrendingUp className="w-5 h-5 md:w-6 md:h-6 text-purple-600" />
            </div>
            <h3 className="font-semibold text-gray-900 text-sm md:text-base">Auto Preprocessing</h3>
            <p className="text-xs md:text-sm text-gray-600 mt-1">Handles missing values, encoding, scaling</p>
          </div>

          <div className="text-center">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-2 md:mb-3">
              <Star className="w-5 h-5 md:w-6 md:h-6 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-900 text-sm md:text-base">Model Selection</h3>
            <p className="text-xs md:text-sm text-gray-600 mt-1">Automatically picks best performing model</p>
          </div>

          <div className="text-center">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-pink-100 rounded-xl flex items-center justify-center mx-auto mb-2 md:mb-3">
              <Zap className="w-5 h-5 md:w-6 md:h-6 text-pink-600" />
            </div>
            <h3 className="font-semibold text-gray-900 text-sm md:text-base">Dashboard & Artifacts</h3>
            <p className="text-xs md:text-sm text-gray-600 mt-1">Interactive dashboard for model analysis</p>
          </div>
        </div>

        {/* PyPI Stats */}
        <div className="mt-6 md:mt-8 flex flex-wrap items-center justify-center gap-4 md:gap-8 text-xs md:text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Python 3.8+</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span>MIT License</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <span>Active Development</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}