import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-800 mb-6">
            Sudoku
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            A clean, minimalist Sudoku puzzle game that brings the classic pen-and-paper experience to your device. 
            Enjoy intuitive gameplay with automatic error detection and helpful hints.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-lg font-semibold mb-2">Clean Interface</h3>
              <p className="text-gray-600">Minimalist design focused on the puzzle with no distractions</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-4">🔍</div>
              <h3 className="text-lg font-semibold mb-2">Error Detection</h3>
              <p className="text-gray-600">Automatic checking to help you catch mistakes as you play</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-4">💡</div>
              <h3 className="text-lg font-semibold mb-2">Hint System</h3>
              <p className="text-gray-600">Get helpful hints when you're stuck on a challenging puzzle</p>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-800">Choose Your Difficulty</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/dashboard" 
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Easy
              </Link>
              <Link 
                href="/dashboard" 
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Medium
              </Link>
              <Link 
                href="/dashboard" 
                className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Hard
              </Link>
            </div>
          </div>

          <div className="mt-12 space-x-4">
            <Link 
              href="/login" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
            >
              Sign In
            </Link>
            <Link 
              href="/signup" 
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-2 rounded-lg font-medium transition-colors"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}