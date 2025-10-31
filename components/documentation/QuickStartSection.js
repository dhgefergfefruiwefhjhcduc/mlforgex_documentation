"use client"
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Terminal, Code, Copy, Check } from "lucide-react";
import { motion } from "framer-motion";

export default function QuickStartSection() {
  const [copiedCode, setCopiedCode] = useState(null);

  const copyCode = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const cliCode = `# Train a model
mlforge-train \\
  --data_path path/to/data.csv \\
  --dependent_feature TargetColumn \\
  --rmse_prob 0.3 \\
  --f1_prob 0.7 \\
  --n_jobs -1 \\
  --n_iter 100 \\
  --cv 3 \\
  --artifacts_dir artifacts \\
  --dashboard_title "My Model"  # Title for the dashboard
  # add --fast to speed up the run
  # add --nlp to enable NLP mode

# Make predictions
mlforge-predict \\
  --model_path artifacts/model.pkl \\
  --preprocessor_path artifacts/preprocessor.pkl \\
  --input_data path/to/new_data.csv \\
  --encoder_path artifacts/encoder.pkl \\
  # add --no-predicted_data to disable saving predicted data \\
  # add --nlp to enable NLP mode \\`;
  const pythonCode = `from mlforgex import train_model, predict

# Train a model
train_model(
    data_path="data.csv",
    dependent_feature="TargetColumn",
    rmse_prob=0.3,   # weight for regression models
    f1_prob=0.7,     # weight for classification models
    n_jobs=-1,
    n_iter=100,
    cv=3,
    artifacts_dir="artifacts",
    fast=False ,      # set True to skip tuning and go faster
    nlp=False        # set True to enable NLP mode
    dashboard_title="My Model"  # Title for the dashboard
)

# Make predictions
preds = predict(
    model_path="artifacts/model.pkl",
    preprocessor_path="artifacts/preprocessor.pkl",
    input_data_path="new_data.csv",
    encoder_path="artifacts/encoder.pkl"  # optional
    nlp=False  # set True to enable NLP mode
)
print(preds[:10])`;

  return (
    <section id="quickstart" className="py-12 md:py-16 border-t border-gray-200">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">Quick Start</h2>
          <p className="text-base md:text-lg text-gray-600">
            Get started with mlforgex in minutes. Choose between CLI or Python API.
          </p>
        </div>

        <Tabs defaultValue="cli" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-4 md:mb-6">
            <TabsTrigger value="cli" className="flex items-center gap-2 text-sm md:text-base">
              <Terminal className="w-4 h-4" />
              <span className="hidden sm:inline">CLI Interface</span>
              <span className="sm:hidden">CLI</span>
            </TabsTrigger>
            <TabsTrigger value="python" className="flex items-center gap-2 text-sm md:text-base">
              <Code className="w-4 h-4" />
              <span className="hidden sm:inline">Python API</span>
              <span className="sm:hidden">Python</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="cli">
            <Card>
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
                      <Terminal className="w-5 h-5" />
                      Command Line Interface
                    </CardTitle>
                    <p className="text-gray-600 mt-1 text-sm md:text-base">
                      Train and predict directly from your terminal
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => copyCode(cliCode, 'cli')}
                    className="cursor-pointer "
                  >
                    {copiedCode === 'cli' ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-900 rounded-lg p-3 md:p-6 overflow-x-auto">
                  <pre className="text-green-400 text-xs md:text-sm leading-relaxed whitespace-pre">
                    <code>{cliCode}</code>
                  </pre>
                </div>
                <div className="mt-3 md:mt-4">
                  <Badge className="bg-blue-100 text-blue-800 text-xs md:text-sm">
                    Add --fast flag for quicker training without hyperparameter tuning
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="python">
            <Card>
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
                      <Code className="w-5 h-5" />
                      Python API
                    </CardTitle>
                    <p className="text-gray-600 mt-1 text-sm md:text-base">
                      Integrate mlforgex into your Python applications
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => copyCode(pythonCode, 'python')}
                    className="cursor-pointer "
                  >
                    {copiedCode === 'python' ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-900 rounded-lg p-3 md:p-6 overflow-x-auto">
                  <pre className="text-blue-400 text-xs md:text-sm leading-relaxed whitespace-pre">
                    <code>{pythonCode}</code>
                  </pre>
                </div>
                <div className="mt-3 md:mt-4">
                  <Badge className="bg-purple-100 text-purple-800 text-xs md:text-sm">
                    Auto-detects classification vs regression from your target column
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>
    </section>
  );
}