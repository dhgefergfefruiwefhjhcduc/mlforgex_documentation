"use client"
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../../../GlobalComponents/ui/card";
import { Badge } from "../../../../GlobalComponents/ui/badge";
import { Terminal, Play } from "lucide-react";
import { motion } from "framer-motion";

const trainFlags = [
  { flag: "--data_path", type: "str", required: true, description: "CSV file path to the dataset. Must include header row and the target column." },
  { flag: "--dependent_feature", type: "str", required: true, description: "Name of the target column to predict." },
  { flag: "--rmse_prob", type: "float", default: "0.3", description: "Ranking weight for regression models (higher means RMSE is prioritized)." },
  { flag: "--f1_prob", type: "float", default: "0.7", description: "Ranking weight for classification models (higher means F1 is prioritized)." },
  { flag: "--n_jobs", type: "int", default: "-1", description: "Number of CPU cores used for parallelism (-1 uses all available cores)." },
  { flag: "--n_iter", type: "int", default: "100", description: "Number of parameter settings sampled when RandomizedSearchCV is used." },
  { flag: "--cv", type: "int", default: "3", description: "Number of cross-validation folds." },
  { flag: "--artifacts_dir", type: "str", default: "None", description: "Directory where artifacts, metrics, and plots will be saved." },
  { flag: "--artifacts_name", type: "str", default: "artifacts", description: "Name of the artifacts directory." },
  { flag: "--fast", type: "flag", default: "False", description: "Enable fast mode. Skips hyperparameter tuning and uses strong defaults for models." },
  { flag: "--nlp", type: "flag", default: "False", description: "Enable NLP mode. When provided, the trainer runs the text pipeline: uses an existing text column (or combines object cols), performs tokenization, stopword removal (keeps negations), lemmatization, vectorizes text (Word2Vec), enforces label encoding for classification, and saves NLP artifacts (word2vec/preprocessor)." },
  { flag: "--dashboard_title", type: "str", default: "mlforgex Dashboard", description: "The title displayed in the dashboard header." }
];

const predictFlags = [
  { flag: "--model_path", type: "str", required: true, description: "Path to the trained model pickle." },
  { flag: "--preprocessor_path", type: "str", required: true, description: "Path to the preprocessing pipeline pickle." },
  { flag: "--input_data", type: "str", required: true, description: "CSV file with rows to predict (same feature columns except target)." },
  { flag: "--encoder_path", type: "str", required: false, description: "Path to the encoder pickle (classification only)." },
  { flag: "--predicted_data", type: "flag", default: "True", description: "Saves the input data with prediction column. Use --no-predicted_data to disable." },
  { flag: "--nlp", type: "flag", default: "False", description: "Enable NLP/text-mode for prediction. When provided, the predictor will combine object/text columns (or use an existing text column), apply the same text preprocessing used at training, load the text preprocessor / Word2Vec model from --preprocessor_path, vectorize inputs (average word‑vectors on the saved preprocessor), and decode labels with --encoder_path if supplied. Use --nlp to enable." }
];

export default function CLIReferenceSection() {
  return (
    <section id="cli-reference" className="py-12 md:py-16 border-t border-gray-200">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">CLI Reference</h2>
          <p className="text-base md:text-lg text-gray-600">
            Complete command-line interface reference with all flags and options explained.
          </p>
        </div>

        <div className="space-y-6 md:space-y-8">
          {/* Train Command */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
                <Terminal className="w-5 h-5 text-blue-600" />
                mlforge-train
              </CardTitle>
              <p className="text-gray-600 text-sm md:text-base">Train a machine learning model with automatic preprocessing and model selection.</p>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-900 rounded-lg p-3 md:p-4 mb-4 md:mb-6 overflow-x-auto">
                <pre className="text-green-400 text-xs md:text-sm whitespace-pre">
{`mlforge-train \\
  --data_path <path> \\
  --dependent_feature <column> \\
  --rmse_prob <float> \\
  --f1_prob <float> \\
  [--n_jobs <int>] \\
  [--n_iter <int>] \\
  [--cv <int>] \\
  [--artifacts_dir <path>] \\
  [--artifacts_name <name>] \\
  [--fast] \\
  [--nlp] \\
  [--dashboard_title]
`}
                </pre>
              </div>

              {/* Mobile-friendly table */}
              <div className="space-y-4 md:hidden">
                {trainFlags.map((item) => (
                  <div key={item.flag} className="p-3 border border-gray-200 rounded-lg">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <code className="bg-gray-100 px-2 py-1 rounded text-xs font-mono">
                        {item.flag}
                      </code>
                      {item.required && (
                        <Badge className="bg-red-100 text-red-800 text-xs">Required</Badge>
                      )}
                      <Badge variant="outline" className="text-xs">{item.type}</Badge>
                    </div>
                    <p className="text-sm text-gray-700 mb-1">{item.description}</p>
                    <p className="text-xs text-gray-500">Default: {item.default || "—"}</p>
                  </div>
                ))}
              </div>

              {/* Desktop table */}
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 ">
                      <th className="text-left py-2 px-3 font-semibold text-gray-900 ">Flag</th>
                      <th className="text-left py-2 px-3 font-semibold text-gray-900 ">Required</th>
                      <th className="text-left py-2 px-3 font-semibold text-gray-900 ">Type</th>
                      <th className="text-left py-2 px-3 font-semibold text-gray-900 ">Default</th>
                      <th className="text-left py-2 px-3 font-semibold text-gray-900 ">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {trainFlags.map((item) => (
                      <tr key={item.flag} className="border-b border-gray-100">
                        <td className="py-3 px-3 flex items-center">
                          <code className="bg-gray-100 px-2 py-1 rounded text-xs font-mono">
                            {item.flag}
                          </code>
                         
                        </td>
                         <td className="py-3 px-3">
                          {item.required ? (
                            <Badge className="bg-red-100 text-red-800 text-xs">Yes</Badge>
                          ) : (
                            <Badge className="bg-gray-100 text-gray-800 text-xs">No</Badge>
                          )}
                        </td>
                        <td className="py-3 px-3 text-gray-600">{item.type}</td>
                        <td className="py-3 px-3 text-gray-600">{item.default || "—"}</td>
                        <td className="py-3 px-3 text-gray-700">{item.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Predict Command */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
                <Play className="w-5 h-5 text-green-600" />
                mlforge-predict
              </CardTitle>
              <p className="text-gray-600 text-sm md:text-base">Make predictions using a trained model on new data.</p>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-900 rounded-lg p-3 md:p-4 mb-4 md:mb-6 overflow-x-auto">
                <pre className="text-green-400 text-xs md:text-sm whitespace-pre">
{`mlforge-predict \\
  --model_path <model.pkl> \\
  --preprocessor_path <preprocessor.pkl> \\
  --input_data <input.csv> \\
  --encoder_path <encoder.pkl>`}
                </pre>
              </div>

              {/* Mobile-friendly table */}
              <div className="space-y-4 md:hidden">
                {predictFlags.map((item) => (
                  <div key={item.flag} className="p-3 border border-gray-200 rounded-lg">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <code className="bg-gray-100 px-2 py-1 rounded text-xs font-mono">
                        {item.flag}
                      </code>
                      <Badge className={`text-xs ${item.required ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-800'}`}>
                        {item.required ? 'Required' : 'Optional'}
                      </Badge>
                      <Badge variant="outline" className="text-xs">{item.type}</Badge>
                    </div>
                    <p className="text-sm text-gray-700">{item.description}</p>
                    <p className="text-xs text-gray-500">Default: {item.default || "—"}</p>

                  </div>
                ))}
              </div>

              {/* Desktop table */}
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-2 px-3 font-semibold text-gray-900">Flag</th>
                      <th className="text-left py-2 px-3 font-semibold text-gray-900">Type</th>
                      <th className="text-left py-2 px-3 font-semibold text-gray-900">Required</th>
                      <th className="text-left py-2 px-3 font-semibold text-gray-900">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {predictFlags.map((item) => (
                      <tr key={item.flag} className="border-b border-gray-100">
                        <td className="py-3 px-3">
                          <code className="bg-gray-100 px-2 py-1 rounded text-xs font-mono">
                            {item.flag}
                          </code>
                        </td>
                        <td className="py-3 px-3 text-gray-600">{item.type}</td>
                        <td className="py-3 px-3">
                          {item.required ? (
                            <Badge className="bg-red-100 text-red-800 text-xs">Yes</Badge>
                          ) : (
                            <Badge className="bg-gray-100 text-gray-800 text-xs">No</Badge>
                          )}
                        </td>
                        <td className="py-3 px-3 text-gray-600">{item.default || "—"}</td>
                        <td className="py-3 px-3 text-gray-700">{item.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </section>
  );
}