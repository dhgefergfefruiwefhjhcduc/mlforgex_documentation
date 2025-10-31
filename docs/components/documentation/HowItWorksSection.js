"use client"
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  Target, 
  Settings, 
  BarChart3, 
  Zap, 
  CheckCircle, 
  Save,
  ChevronRight
} from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: FileText,
    title: "Load & Validate Data",
    description: "Reads CSV, checks for target column, basic schema validation.",
    color: "bg-blue-100 text-blue-600"
  },
  {
    icon: Target,
    title: "Problem Detection", 
    description: "Infers whether we have regression or classification automatically.",
    color: "bg-purple-100 text-purple-600"
  },
  {
    icon: Settings,
    title: "Preprocessing",
    description: "Missing value imputation, encoding, scaling, duplicate/outlier removal.",
    color: "bg-green-100 text-green-600"
  },
  {
    icon: BarChart3,
    title: "Imbalance Handling",
    description: "If classification and imbalance detected, apply resampling on training folds.",
    color: "bg-orange-100 text-orange-600"
  },
  {
    icon: Zap,
    title: "Model Training",
    description: "Train a curated set of models appropriate for the detected task.",
    color: "bg-red-100 text-red-600"
  },
  {
    icon: CheckCircle,
    title: "Hyperparameter Tuning",
    description: "Use randomized search to tune hyperparameters (skipped in fast mode).",
    color: "bg-indigo-100 text-indigo-600"
  },
  {
    icon: Target,
    title: "Model Selection",
    description: "Rank models by composite score and pick the best performing one.",
    color: "bg-cyan-100 text-cyan-600"
  },
  {
    icon: Save,
    title: "Dashboard & Artifacts",
    description: "Store model, pipeline, metrics, plots, and run config for reproducibility.",
    color: "bg-pink-100 text-pink-600"
  }
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-16 border-t border-gray-200">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-lg text-gray-600 max-w-3xl">
            mlforgex follows a comprehensive 8-step pipeline to automate your entire machine learning workflow,
            from raw data to production-ready models.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex items-center gap-3">
                      <Badge className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </Badge>
                      <div className={`w-12 h-12 rounded-xl ${step.color} flex items-center justify-center`}>
                        <step.icon className="w-6 h-6" />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Pipeline Flow */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">End-to-End Automation</h3>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <Badge className="bg-white text-gray-700 px-4 py-2">Raw CSV Data</Badge>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <Badge className="bg-blue-100 text-blue-800 px-4 py-2">Auto Preprocessing</Badge>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <Badge className="bg-green-100 text-green-800 px-4 py-2">Model Training</Badge>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <Badge className="bg-purple-100 text-purple-800 px-4 py-2">Best Model</Badge>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <Badge className="bg-orange-100 text-orange-800 px-4 py-2">Production Ready</Badge>
          </div>
          <p className="text-center text-gray-600 mt-4">
            From raw data to production-ready model in one command
          </p>
        </div>
      </motion.div>
    </section>
  );
}