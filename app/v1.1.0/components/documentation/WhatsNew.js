import React from "react";

export default function WhatsNew() {
	return (
		<section id="whats-new" className="py-14">
			<div className="max-w-4xl mx-auto">
				<h2 className="text-3xl font-extrabold text-gray-900">What's New (v1.1.0)</h2>
				<p className="mt-4 text-gray-700">This section highlights the latest features, improvements, and changes in this release.</p>

				<div className="mt-8 space-y-6">
					<article className="bg-white shadow rounded-lg p-6">
						<h3 className="text-xl font-semibold">Single HTML Dashboard</h3>
						<p className="mt-2 text-gray-600">All visualizations and metrics consolidated into one interactive file.</p>
					</article>

					<article className="bg-white shadow rounded-lg p-6">
						<h3 className="text-xl font-semibold">Responsive Design</h3>
						<p className="mt-2 text-gray-600">Works seamlessly on desktop and mobile devices.</p>
					</article>

					<article className="bg-white shadow rounded-lg p-6">
						<h3 className="text-xl font-semibold">Expanded Python API</h3>
						<p className="mt-2 text-gray-600">Auto-highlights top-performing models with smart metric selection.</p>
					</article>
				</div>
			</div>
		</section>
	);
}
