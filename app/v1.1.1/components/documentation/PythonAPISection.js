"use client"
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../../../GlobalComponents/ui/card";
import { Button } from "../../../../GlobalComponents/ui/button";
import { Code, Copy, Check } from "lucide-react";
import { motion } from "framer-motion";

export default function PythonAPISection() {
  const [copiedCode, setCopiedCode] = useState(null);

  const trainCode = `from mlforgex import train_model

# Train a model with all options
train_model(
    data_path="path/to/your/data.csv",
    dependent_feature="target_column",
    rmse_prob=0.3,          # Weight for RMSE in regression
    f1_prob=0.7,            # Weight for F1 in classification
    n_jobs=-1,              # Use all CPU cores
    n_iter=100,             # Hyperparameter search iterations
    cv=5,                   # Cross-validation folds
    artifacts_dir="models", # Where to save artifacts
    fast=False              # Full training with tuning
    nlp=True                 # Enable NLP mode
    dashboard_title="My Model"  # Title for the dashboard
)

# Fast training (no hyperparameter tuning)
train_model(
    data_path="data.csv",
    dependent_feature="target",
    fast=True  # Skip tuning for faster results
)`;

  const predictCode = `from mlforgex import predict

# Make predictions on new data
predictions = predict(
    model_path="artifacts/model.pkl",
    input_data_path="new_data.csv",
)

# View predictions
print("First 10 predictions:")
print(predictions[:10])

# Save predictions to file
predictions.to_csv("predictions.csv", index=False)`;

  const copyCode = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <section id="python-api" className="py-16 border-t border-gray-200">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Python API</h2>
          <p className="text-lg text-gray-600">
            Use mlforgex directly in your Python applications with simple function calls.
          </p>
        </div>

        <div className="space-y-6">
          {/* Train Model */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Code className="w-5 h-5 text-blue-600" />
                  train_model()
                </CardTitle>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => copyCode(trainCode, 'train')}
                  className="cursor-pointer "
                  aria-label="Copy train_model code to clipboard"
                >
                  {copiedCode === 'train' ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </Button>
              </div>
              <p className="text-gray-600">
                Train a machine learning model with automatic preprocessing and model selection.
              </p>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
                <pre className="text-blue-400 text-sm leading-relaxed">
                  <code>{trainCode}</code>
                </pre>
              </div>
              
              <div className="mt-4 bg-blue-50 rounded-lg p-4">
                <h4 className="font-semibold text-blue-900 mb-2">Parameters:</h4>
                <div className="space-y-2 text-sm">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                    <code className="font-mono text-blue-700">data_path</code>
                    <span className="text-gray-600">str</span>
                    <span className="text-gray-700">Path to your CSV dataset</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                    <code className="font-mono text-blue-700">dependent_feature</code>
                    <span className="text-gray-600">str</span>
                    <span className="text-gray-700">Name of target column</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                    <code className="font-mono text-blue-700">fast</code>
                    <span className="text-gray-600">bool</span>
                    <span className="text-gray-700">Skip hyperparameter tuning</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Predict */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Code className="w-5 h-5 text-green-600" />
                  predict()
                </CardTitle>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => copyCode(predictCode, 'predict')}
                  className="cursor-pointer "
                  aria-label="Copy predict code to clipboard"
                >
                  {copiedCode === 'predict' ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </Button>
              </div>
              <p className="text-gray-600">
                Make predictions on new data using your trained model.
              </p>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
                <pre className="text-green-400 text-sm leading-relaxed">
                  <code>{predictCode}</code>
                </pre>
              </div>

              <div className="mt-4 bg-green-50 rounded-lg p-4">
                <h4 className="font-semibold text-green-900 mb-2">Returns:</h4>
                <p className="text-sm text-gray-700">
                  <code className="font-mono bg-white px-2 py-1 rounded">pandas.DataFrame</code> or{" "}
                  <code className="font-mono bg-white px-2 py-1 rounded">numpy.array</code> containing predictions for each input row.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </section>
  );
}