"use client"
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../../../GlobalComponents/ui/card";
import { Badge } from "../../../../GlobalComponents/ui/badge";
import { FileText, FolderOpen, BarChart3, Image } from "lucide-react";
import { motion } from "framer-motion";

const artifactStructure = `artifacts/
├─ model.pkl                 # Serialized best model
├─ preprocessor.pkl          # Fitted preprocessing pipeline
├─ word2vec.model            # word2vec model (NLP)
├─ encoder.pkl               # Label encoder (classification)
├─ metadata.pkl              # details for prediction
└─ Dashboard.html          # Interactive model analysis dashboard`;


export default function ArtifactsSection() {
  return (
    <section id="artifacts" className="py-12 md:py-16 border-t border-gray-200">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">Artifacts & Outputs</h2>
          <p className="text-base md:text-lg text-gray-600">
            mlforgex automatically saves all artifacts needed for reproducible machine learning workflows.
          </p>
        </div>

        <div className="grid grid-cols-1  gap-4 md:gap-6">
          {/* File Structure */}
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
                <FolderOpen className="w-5 h-5 text-blue-600" />
                File Structure
              </CardTitle>
              <p className="text-gray-600 text-sm md:text-base">After training, your artifacts directory contains:</p>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-900 rounded-lg p-3 md:p-6 overflow-x-auto">
                <pre className="text-gray-300 text-xs md:text-sm leading-relaxed whitespace-pre">
                  <code>{artifactStructure}</code>
                </pre>
              </div>
              
              <div className="mt-4 space-y-2 md:space-y-3">
                <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                  <FileText className="w-4 h-4 text-blue-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-blue-900 text-sm md:text-base">Model Files</h4>
                    <p className="text-xs md:text-sm text-blue-700">Serialized model and preprocessing pipeline for predictions</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                  <BarChart3 className="w-4 h-4 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-green-900 text-sm md:text-base">Metrics</h4>
                    <p className="text-xs md:text-sm text-green-700">Detailed performance metrics and configuration</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
                  <Image className="w-4 h-4 text-purple-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-purple-900 text-sm md:text-base">Visualizations</h4>
                    <p className="text-xs md:text-sm text-purple-700">Comprehensive plots for model analysis</p>
                  </div>
                </div>
              </div>
            <div className="mt-4 w-full justify-center flex-wrap flex gap-2 md:gap-3">
              <Badge className="bg-blue-100 text-blue-800 justify-center text-xs md:text-sm py-2">
                Performance Metrics
              </Badge>
              <Badge className="bg-green-100 text-green-800 justify-center text-xs md:text-sm py-2">
                Feature Information
              </Badge>
              <Badge className="bg-purple-100 text-purple-800 justify-center text-xs md:text-sm py-2">
                Model Configuration
              </Badge>
              <Badge className="bg-orange-100 text-orange-800 justify-center text-xs md:text-sm py-2">
                Training Parameters
              </Badge>
            </div>
            </CardContent>
          </Card>
        </div>

        {/* Visualization Types */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="text-lg md:text-xl">Generated Visualizations</CardTitle>
            <p className="text-gray-600 text-sm md:text-base">mlforgex automatically generates these plots for model analysis:</p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4">
              <div className="p-3 md:p-4 border border-gray-200 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">Correlation Heatmap</h4>
                <p className="text-xs md:text-sm text-gray-600">Feature correlation analysis</p>
              </div>
              <div className="p-3 md:p-4 border border-gray-200 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">Confusion Matrix</h4>
                <p className="text-xs md:text-sm text-gray-600">Classification performance</p>
              </div>
              <div className="p-3 md:p-4 border border-gray-200 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">ROC/PR Curves</h4>
                <p className="text-xs md:text-sm text-gray-600">Binary classification metrics</p>
              </div>
              <div className="p-3 md:p-4 border border-gray-200 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">Feature Importance</h4>
                <p className="text-xs md:text-sm text-gray-600">Model interpretability</p>
              </div>
              <div className="p-3 md:p-4 border border-gray-200 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">Learning Curves</h4>
                <p className="text-xs md:text-sm text-gray-600">Training vs validation</p>
              </div>
              <div className="p-3 md:p-4 border border-gray-200 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">Residual Plots</h4>
                <p className="text-xs md:text-sm text-gray-600">Regression analysis</p>
              </div>
              <div className="p-3 md:p-4 border border-gray-200 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">Feature Importance</h4>
                <p className="text-xs md:text-sm text-gray-600">Model interpretability</p>
              </div>
              <div className="p-3 md:p-4 border border-gray-200 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">Prediction Error Distribution</h4>
                <p className="text-xs md:text-sm text-gray-600">Model performance</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}