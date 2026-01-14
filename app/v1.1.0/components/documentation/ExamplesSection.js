"use client"
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../../../GlobalComponents/ui/card";
import { Badge } from "../../../../GlobalComponents/ui/badge";
import { Button } from "../../../../GlobalComponents/ui/button";
import { Copy, Check, Terminal, Code } from "lucide-react";
import { motion } from "framer-motion";

const examples = [
  {
    title: "Housing Price Prediction (Regression)",
    description: "Train a model to predict house prices using the classic housing dataset.",
    type: "CLI",
    icon: Terminal,
    code: `# Train on housing data
mlforge-train \\
  --data_path housing.csv \\
  --dependent_feature SalePrice \\
  --cv 5 \\
  --n_iter 50 \\
  --artifacts_dir housing_artifacts \\
  --dashboard_title Housing Price Prediction

# Make predictions
mlforge-predict \\
  --model_path housing_artifacts/model.pkl \\
  --preprocessor_path housing_artifacts/preprocessor.pkl \\
  --input_data new_houses.csv`,
    badge: "Regression"
  },
  {
    title: "Customer Churn Classification",
    description: "Predict customer churn using classification with imbalanced data handling.",
    type: "Python",
    icon: Code,
    code: `from mlforge import train_model, predict

# Train classification model
train_model(
    data_path="customer_data.csv",
    dependent_feature="churn",
    f1_prob=0.8,  # Prioritize F1 score
    n_iter=200,
    artifacts_dir="churn_model",
    dashboard_title="Churn Prediction"

)

# Predict on new customers
predictions = predict(
    model_path="churn_model/model.pkl",
    preprocessor_path="churn_model/preprocessor.pkl",
    input_data_path="new_customers.csv",
    encoder_path="churn_model/encoder.pkl"
)

print(f"Predicted churners: {sum(predictions)}")`,
    badge: "Classification"
  },
  {
    title: "Fast Prototyping",
    description: "Quick model training for rapid experimentation and prototyping.",
    type: "CLI",
    icon: Terminal,
    code: `# Fast training without hyperparameter tuning
mlforge-train \\
  --data_path experiment_data.csv \\
  --dependent_feature target \\
  --fast \\
  --artifacts_dir quick_model \\
  --dashboard_title Quick Experiment

# Results available in seconds, not minutes!`,
    badge: "Fast Mode"
  },
  {
    title: "Multi-class Image Classification",
    description: "Classify images into multiple categories using extracted features.",
    type: "Python",
    icon: Code,
    code: `from mlforge import train_model, predict

# Train on image features
train_model(
    data_path="image_features.csv",
    dependent_feature="category", 
    rmse_prob=0.2,
    f1_prob=0.8,  # Focus on classification metrics
    cv=3,
    n_jobs=-1,
    artifacts_dir="image_classifier",
    dashboard_title="Image Classification Task"
)

# Classify new images
results = predict(
    model_path="image_classifier/model.pkl",
    preprocessor_path="image_classifier/preprocessor.pkl", 
    input_data_path="new_image_features.csv",
    encoder_path="image_classifier/encoder.pkl"
)`,
    badge: "Multi-class"
  }
];

export default function ExamplesSection() {
  const [copiedCode, setCopiedCode] = useState(null);

  const copyCode = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <section id="examples" className="py-12 md:py-16 border-t border-gray-200">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">Examples</h2>
          <p className="text-base md:text-lg text-gray-600">
            Real-world examples showing how to use mlforgex for different machine learning tasks.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 md:gap-6">
          {examples.map((example, index) => (
            <motion.div
              key={example.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader className="pb-4">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-100 rounded-lg flex items-center justify-center mt-1">
                        <example.icon className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                      </div>
                      <div>
                        <CardTitle className="text-base md:text-lg leading-tight">{example.title}</CardTitle>
                        <p className="text-gray-600 text-sm mt-1">{example.description}</p>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => copyCode(example.code, index)}
                      className="cursor-pointer self-start"
                      aria-label="Copy example code to clipboard"
                    >
                      {copiedCode === index ? (
                        <Check className="w-4 h-4" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </Button>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 mt-3">
                    <Badge 
                      className={`text-xs ${
                        example.badge === 'Regression' ? 'bg-blue-100 text-blue-800' :
                        example.badge === 'Classification' ? 'bg-green-100 text-green-800' :
                        example.badge === 'Multi-class' ? 'bg-purple-100 text-purple-800' :
                        'bg-orange-100 text-orange-800'
                      }`}
                    >
                      {example.badge}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {example.type}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="bg-gray-900 rounded-lg p-3 md:p-4 overflow-x-auto">
                    <pre className={`text-xs md:text-sm leading-relaxed whitespace-pre ${
                      example.type === 'CLI' ? 'text-green-400' : 'text-blue-400'
                    }`}>
                      <code>{example.code}</code>
                    </pre>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}