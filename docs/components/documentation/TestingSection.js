import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TestTube, CheckCircle, Code } from "lucide-react";
import { motion } from "framer-motion";

export default function TestingSection() {
  const testCommand = `pytest test/`;

  const testCases = [
    "Preprocessing pipeline idempotence",
    "Correct problem detection behavior", 
    "Model training produces expected keys in metrics.txt",
    "Predict pipeline loads and transforms inputs without error",
    "Artifact saving and loading functionality",
    "Cross-validation and scoring mechanisms"
  ];

  return (
    <section id="testing" className="py-16 border-t border-gray-200">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Testing</h2>
          <p className="text-lg text-gray-600">
            mlforgex includes comprehensive tests to ensure reliability and correctness.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TestTube className="w-5 h-5 text-green-600" />
                Run Tests
              </CardTitle>
              <p className="text-gray-600">Execute the test suite to validate functionality:</p>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-900 rounded-lg p-4 mb-4">
                <pre className="text-green-400 text-lg font-mono">
                  <code>$ {testCommand}</code>
                </pre>
              </div>
              
              <div className="flex items-center gap-2">
                <Badge className="bg-green-100 text-green-800 border-green-200">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  pytest
                </Badge>
                <Badge className="bg-blue-100 text-blue-800 border-blue-200">
                  Unit Tests
                </Badge>
                <Badge className="bg-purple-100 text-purple-800 border-purple-200">
                  Integration Tests
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="w-5 h-5 text-blue-600" />
                Test Coverage
              </CardTitle>
              <p className="text-gray-600">Key areas covered by the test suite:</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {testCases.map((testCase, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{testCase}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-6">
          <CardContent className="p-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Assurance</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our comprehensive test suite ensures that mlforgex works reliably across different datasets,
                problem types, and configurations. Run tests before contributing or after making changes.
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}