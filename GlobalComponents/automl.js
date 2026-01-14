"use client"

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Brain, Zap, BarChart3, Lock } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: Zap,
    title: "Speed",
    description: "Automates repetitive tasks like hyperparameter tuning and feature selection, reducing development time from weeks to hours."
  },
  {
    icon: Brain,
    title: "Accessibility",
    description: "Makes ML accessible to non-experts by handling complex preprocessing and model selection automatically."
  },
  {
    icon: BarChart3,
    title: "Consistency",
    description: "Applies standardized, reproducible pipelines across datasets, reducing human error and bias."
  },
  {
    icon: Lock,
    title: "Reproducibility",
    description: "Saves all artifacts, configs, and pipelines so results can be replicated and audited."
  }
];

const challenges = [
  {
    title: "Black Box Problem",
    description: "Many AutoML tools don't explain why they chose a specific model or preprocessing step.",
    solution: "mlforgex provides transparent, configurable pipelines with clear step-by-step logging."
  },
  {
    title: "Limited Control",
    description: "Generic AutoML may not support specialized tasks like NLP or custom preprocessing.",
    solution: "mlforgex supports Classification, Regression, and NLP with fine-grained control flags."
  },
  {
    title: "Data Leakage",
    description: "Naive AutoML implementations apply preprocessing to entire datasets, causing data leakage.",
    solution: "mlforgex applies resampling and preprocessing only within cross-validation folds."
  },
  {
    title: "Artifact Management",
    description: "Many AutoML tools don't save complete artifacts, making production deployment difficult.",
    solution: "mlforgex saves model, preprocessor, encoders, and metrics for seamless deployment."
  }
];

export default function WhatIsAutoML() {
  return (
    <section id="automl" className="py-12 md:py-16 border-t border-gray-200">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">What is AutoML?</h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl leading-relaxed">
            <strong>AutoML (Automated Machine Learning)</strong> refers to the automation of repetitive and time-consuming tasks in the machine learning pipeline. Instead of manually designing features, selecting models, and tuning hyperparameters, AutoML tools handle these steps automatically based on the data and task type.
          </p>
        </div>

        {/* Definition Card */}
        <Card className="mb-8 bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
          <CardHeader>
            <CardTitle className="text-lg md:text-xl">The AutoML Pipeline</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 bg-white rounded-lg border border-blue-100">
                <div className="font-semibold text-blue-600 mb-2">1. Data Loading</div>
                <p className="text-sm text-gray-600">Read and validate input data</p>
              </div>
              <div className="p-4 bg-white rounded-lg border border-purple-100">
                <div className="font-semibold text-purple-600 mb-2">2. Preprocessing</div>
                <p className="text-sm text-gray-600">Clean, encode, and scale features</p>
              </div>
              <div className="p-4 bg-white rounded-lg border border-green-100">
                <div className="font-semibold text-green-600 mb-2">3. Model Training</div>
                <p className="text-sm text-gray-600">Train multiple candidate models</p>
              </div>
              <div className="p-4 bg-white rounded-lg border border-orange-100">
                <div className="font-semibold text-orange-600 mb-2">4. Evaluation</div>
                <p className="text-sm text-gray-600">Select best model automatically</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Benefits */}
        <div className="mb-8">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Benefits of AutoML</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((benefit) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                >
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                          <p className="text-sm text-gray-600">{benefit.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Common Challenges */}
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">AutoML Challenges & How mlforgex Addresses Them</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {challenges.map((challenge, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base md:text-lg text-red-600">{challenge.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <Badge className="bg-red-100 text-red-800 mb-2">Challenge</Badge>
                      <p className="text-sm text-gray-600">{challenge.description}</p>
                    </div>
                    <div>
                      <Badge className="bg-green-100 text-green-800 mb-2">mlforgex Solution</Badge>
                      <p className="text-sm text-gray-600">{challenge.solution}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}