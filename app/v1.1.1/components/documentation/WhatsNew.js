import React from "react";

export default function WhatsNew() {
	return (
		<section id="whats-new" className="py-14">
			<div className="max-w-4xl mx-auto">
				<h2 className="text-3xl font-extrabold text-gray-900">What's New (v1.1.1)</h2>
				<p className="mt-4 text-gray-700">This section highlights the latest features, improvements, and changes in this release.</p>

				<div className="mt-8 space-y-6">
					<article className="bg-white shadow rounded-lg p-6">
						<h3 className="text-xl font-semibold">Stacking ensembles</h3>
						<p className="mt-2 text-gray-600">Introduced stacking support to combine multiple base learners with a meta-learner, improving predictive performance on heterogeneous datasets.</p>
					</article>

					<article className="bg-white shadow rounded-lg p-6">
						<h3 className="text-xl font-semibold">Voting ensembles</h3>
						<p className="mt-2 text-gray-600">Added hard and soft voting strategies to aggregate predictions from several models for more robust results.</p>
					</article>

					<article className="bg-white shadow rounded-lg p-6">
						<h3 className="text-xl font-semibold">Now also contains CatBoost</h3>
						<p className="mt-2 text-gray-600">The package now includes CatBoost as an additional model option.</p>
					</article>

					<article className="bg-white shadow rounded-lg p-6">
						<h3 className="text-xl font-semibold">CatBoost integration</h3>
						<p className="mt-2 text-gray-600">Built-in support for CatBoost (`catboost`) models with optimized handling for categorical features and faster training on structured data.</p>
					</article>

					<article className="bg-white shadow rounded-lg p-6">
						<h3 className="text-xl font-semibold">Improved error handling</h3>
						<p className="mt-2 text-gray-600">Better validation and clearer error messages for common failure modes (data shape mismatches, missing categorical encodings, and training-time exceptions), making debugging easier.</p>
					</article>
					<article className="bg-white shadow rounded-lg p-6">
						<h3 className="text-xl font-semibold">Changed Import from mlforge to mlforgex</h3>
						<p className="mt-2 text-gray-600">Changed the import path from `mlforge` to `mlforgex` to reflect the updated package name.</p>
					</article>
					<article className="bg-white shadow rounded-lg p-6">
						<h3 className="text-xl font-semibold">Reduced the number of arguments in predict pipeline</h3>
						<p className="mt-2 text-gray-600">Simplified the predict pipeline by removing preprocessor_path and encoder_path, making it easier to use and maintain.</p>
					</article>
					<article className="bg-white shadow rounded-lg p-6">
						<h3 className="text-xl font-semibold">A new file metadata.pkl will be saved</h3>
						<p className="mt-2 text-gray-600">A new file `metadata.pkl` is now saved during training, which contains all necessary information for making predictions.</p>
					</article>

				</div>
			</div>
		</section>
	);
}
