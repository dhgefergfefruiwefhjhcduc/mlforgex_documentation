"use client"

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Check, X } from "lucide-react";
import { motion } from "framer-motion";

const rows = [
  { feature: "Automatic data preprocessing (impute/encode/scale)", mlforgex: true, other: false, note: "Handles numeric/categorical, VIF, outliers" },
  { feature: "Automatic problem detection (clf vs reg vs nlp)", mlforgex: true, other: false, note: "Auto-detects task + binary/multi" },
  { feature: "NLP pipeline (Word2Vec + saved preprocessor)", mlforgex: true, other: false, note: "Saves word2vec & text preprocessor" },
  { feature: "Cross-validated resampling (SMOTE inside folds)", mlforgex: true, other: false, note: "Avoids leakage by resampling inside CV" },
  { feature: "Composite ranking (f1_prob / rmse_prob)", mlforgex: true, other: false, note: "Customizable metric weighting" },
  { feature: "Single interactive Dashboard (Dashboard.html)", mlforgex: true, other: false, note: "Aggregates plots & model comparison" },
  { feature: "Fast mode (skip tuning, robust defaults)", mlforgex: true, other: "partial", note: "Quick runs vs full tune" },
  { feature: "Saved reproducible artifacts (model+preproc+encoder)", mlforgex: true, other: "partial", note: "Many AutoML skip full pipeline artifacts" },
  { feature: "Fine-grained control flags (nlp, fast, n_iter, cv)", mlforgex: true, other: "partial", note: "CLI + Python API parity" },
];

export default function Why() {
  return (
    <section id="mlforgex" className="py-12 md:py-16 border-t border-gray-200">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Why mlforgex?</h2>
          <p className="text-gray-600 mt-2 max-w-2xl">
            A concise comparison showing capabilities mlforgex provides vs what many generic AutoML tools commonly omit.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg md:text-xl">Feature comparison</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm md:text-base border-collapse">
                <thead>
                  <tr className="text-left bg-gray-50">
                    <th className="py-3 px-3 font-semibold text-gray-900">Feature</th>
                    <th className="py-3 px-3 font-semibold text-gray-900">mlforgex</th>
                    <th className="py-3 px-3 font-semibold text-gray-900">Typical AutoML</th>
                    <th className="py-3 px-3 font-semibold text-gray-900">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r) => (
                    <tr key={r.feature} className="border-b last:border-b-0">
                      <td className="py-3 px-3 align-top text-gray-800">{r.feature}</td>
                      <td className="py-3 px-3 align-top">
                        <div className="flex items-center gap-2">
                          {r.mlforgex === true ? (
                            <Badge className="bg-green-100 text-green-800 flex items-center gap-1">
                              <Check className="w-3 h-3" /> Yes
                            </Badge>
                          ) : (
                            <Badge className="bg-gray-100 text-gray-800 flex items-center gap-1">
                              <X className="w-3 h-3" /> No
                            </Badge>
                          )}
                        </div>
                      </td>
                      <td className="py-3 px-3 align-top">
                        <div className="flex items-center gap-2">
                          {r.other === true ? (
                            <Badge className="bg-green-100 text-green-800 flex items-center gap-1">
                              <Check className="w-3 h-3" /> Yes
                            </Badge>
                          ) : r.other === "partial" ? (
                            <Badge className="bg-yellow-100 text-yellow-800 flex items-center gap-1">
                              Partial
                            </Badge>
                          ) : (
                            <Badge className="bg-gray-100 text-gray-800 flex items-center gap-1">
                              <X className="w-3 h-3" /> No
                            </Badge>
                          )}
                        </div>
                      </td>
                      <td className="py-3 px-3 text-gray-600 align-top">{r.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 text-xs text-gray-600">
              Note: "Typical AutoML" is a generalization — some AutoML platforms may implement parts of these features, but mlforgex aims to provide all listed capabilities out-of-the-box with reproducible artifacts and NLP support.
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}