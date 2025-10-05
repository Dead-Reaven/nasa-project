"use client"

import IntroAnimation from "@/components/intro-animation"

export default function Page() {
  return (
    <div className="min-h-screen bg-black">
      <IntroAnimation />
      <main className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Exoplanet Cython Analytics</h1>
          <p className="text-xl text-gray-300 mb-8">Explore the universe of exoplanets with advanced data analytics</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <h2 className="text-2xl font-semibold text-blue-400 mb-4">Data Analysis</h2>
              <p className="text-gray-400">
                Advanced analytics powered by Cython for high-performance exoplanet data processing
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <h2 className="text-2xl font-semibold text-green-400 mb-4">Visualization</h2>
              <p className="text-gray-400">
                Interactive visualizations of exoplanet characteristics and habitable zones
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <h2 className="text-2xl font-semibold text-purple-400 mb-4">Statistics</h2>
              <p className="text-gray-400">
                Comprehensive statistical analysis of planetary systems and discovery methods
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
