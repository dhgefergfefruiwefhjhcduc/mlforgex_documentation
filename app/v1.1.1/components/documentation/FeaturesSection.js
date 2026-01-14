"use client"
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../../../GlobalComponents/ui/card";
import { 
  Settings, 
  Target, 
  BarChart3, 
  Zap, 
  FileText, 
  TrendingUp,
  Database,
  Layers,
  Brain
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Settings,
    title: "Automatic Data Preprocessing",
    description: "Missing value handling, outlier & duplicate removal, encoding, scaling, and multicollinearity handling.",
    details: [
      "Numeric columns: mean/median imputation",
      "Categorical columns: mode or constant label",
      "One-Hot vs Ordinal encoding based on cardinality",
      "StandardScaler by default",
      "VIF-based multicollinearity handling"
    ]
  },
  {
    icon: Target,
    title: "Automatic Problem Detection", 
    description: "Classification vs regression detection, binary vs multiclass detection.",
    details: [
      "Regression: numeric target with many unique values",
      "Classification: categorical or few unique values",
      "Binary vs multiclass detection",
      "Metric selection based on problem type"
    ]
  },
  {
    icon: BarChart3,
    title: "Imbalanced Data Handling",
    description: "SMOTE oversampling, under-sampling, auto detection and application.",
    details: [
      "Automatic imbalance detection",
      "SMOTE (Synthetic Minority Oversampling)",
      "Random under-sampling options",
      "Applied only to training folds (no data leakage)"
    ]
  },
  {
    icon: Brain,
    title: "Model Training & Evaluation",
    description: "Trains candidate models and selects the best using task-appropriate metrics and cross-validation.",
    details: [
      "Multiple candidate models per task type",
      "Cross-validation for performance estimation",
      "Composite scoring for model selection",
      "Hyperparameter tuning with RandomizedSearchCV"
    ]
  },
  {
    icon: FileText,
    title: "Artifact Saving",
    description: "Trained model, preprocessing pipeline, encoder, metrics, plots, and feature importances saved to disk.",
    details: [
      "Serialized model (.pkl)",
      "Preprocessing pipeline",
      "Word2Vec model (NLP mode)",
      "Label encoder (classification)",
      "Dashboard with metrics & visualizations",
    ]
  },
  {
    icon: TrendingUp,
    title: "Dashboard & Visualizations",
    description: "Interactive HTML dashboard with key metrics and plots for model analysis.",
    details: [
      "Correlation heatmap",
      "Confusion matrix & ROC curves",
      "Precision-Recall curves",
      "Learning curves (train vs validation)",
      "Feature importance bar charts",
      "Residual plots for regression",
      "WordCloud",
      "Feature Importance",
      "Prediction Error Distribution"
    ]
  }
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-12 md:py-16 border-t border-gray-200">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">Key Features</h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl">
            mlforgex provides comprehensive automation for your machine learning workflow,
            from data preprocessing to model deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <feature.icon className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg font-semibold text-gray-900 leading-tight">{feature.title}</h3>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 mb-3 md:mb-4 text-sm md:text-base">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs md:text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}