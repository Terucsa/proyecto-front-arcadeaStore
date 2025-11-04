import { Trash2,  Play} from "lucide-react";

function CardJuegos() {
    return (
        <>
            <div className="max-w-7xl mx-auto px-4 py-8 ">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-15">

                    {/* Card 1 */}
                    <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 shadow-lg hover:shadow-xl transition-shadow duration-200">
                        <div className="w-full h-40 bg-gradient-to-br from-purple-200 to-pink-200 rounded-xl mb-4 flex items-center justify-center">
                            <span className="text-5xl">🎮</span>
                        </div>
                        <div className="mb-3">
                            <h3 className="text-lg font-semibold text-gray-800 mb-1">
                                Balloon Pop
                            </h3>
                            <span className="inline-block px-2 py-1 bg-purple-100 text-purple-600 text-xs rounded-full">
                                            Arcade
                                        </span>
                            <span className="inline-block px-2 py-1 bg-green-100 text-green-600 text-xs rounded-full">
                                            +12
                                        </span>
                        </div>
                        <div className="flex items-center justify-between">
                                  <span className="text-2xl font-bold text-green-600">
                                    Gratis
                                  </span>
                            <button className="p-2 text-blue-500 hover:bg-blue-50 rounded-full transition-colors duration-200">
                                <Play className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 shadow-lg hover:shadow-xl transition-shadow duration-200">
                        <div className="w-full h-40 bg-gradient-to-br from-purple-200 to-pink-200 rounded-xl mb-4 flex items-center justify-center">
                            <span className="text-5xl">🧩</span>
                        </div>
                        <div className="mb-3">
                            <h3 className="text-lg font-semibold text-gray-800 mb-1">
                                Puzzle Master
                            </h3>
                            <span className="inline-block px-2 py-1 bg-purple-100 text-purple-600 text-xs rounded-full">
                Puzzle
              </span>
                        </div>
                        <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-purple-600">
                Q 80.00
              </span>
                            <button className="p-2 text-blue-500 hover:bg-blue-50 rounded-full transition-colors duration-200">
                                <Play className="w-5 h-5" />
                            </button>

                            <button className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors duration-200">
                                <Trash2 className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 shadow-lg hover:shadow-xl transition-shadow duration-200">
                        <div className="w-full h-40 bg-gradient-to-br from-purple-200 to-pink-200 rounded-xl mb-4 flex items-center justify-center">
                            <span className="text-5xl">🏎️</span>
                        </div>
                        <div className="mb-3">
                            <h3 className="text-lg font-semibold text-gray-800 mb-1">
                                Speed Racer
                            </h3>
                            <span className="inline-block px-2 py-1 bg-purple-100 text-purple-600 text-xs rounded-full">
                Racing
              </span>
                        </div>
                        <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-purple-600">
                Q 50.00
              </span>
                            <button className="p-2 text-blue-500 hover:bg-blue-50 rounded-full transition-colors duration-200">
                                <Play className="w-5 h-5" />
                            </button>

                            <button className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors duration-200">
                                <Trash2 className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 shadow-lg hover:shadow-xl transition-shadow duration-200">
                        <div className="w-full h-40 bg-gradient-to-br from-purple-200 to-pink-200 rounded-xl mb-4 flex items-center justify-center">
                            <span className="text-5xl">⚔️</span>
                        </div>
                        <div className="mb-3">
                            <h3 className="text-lg font-semibold text-gray-800 mb-1">
                                Battle Arena
                            </h3>
                            <span className="inline-block px-2 py-1 bg-purple-100 text-purple-600 text-xs rounded-full">
                Action
              </span>
                        </div>
                        <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-purple-600">
                Q 120.00
              </span>
                            <button className="p-2 text-blue-500 hover:bg-blue-50 rounded-full transition-colors duration-200">
                                <Play className="w-5 h-5" />
                            </button>

                            <button className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors duration-200">
                                <Trash2 className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {/* Card 5 */}
                    <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 shadow-lg hover:shadow-xl transition-shadow duration-200">
                        <div className="w-full h-40 bg-gradient-to-br from-purple-200 to-pink-200 rounded-xl mb-4 flex items-center justify-center">
                            <span className="text-5xl">🎯</span>
                        </div>
                        <div className="mb-3">
                            <h3 className="text-lg font-semibold text-gray-800 mb-1">
                                Target Master
                            </h3>
                            <span className="inline-block px-2 py-1 bg-purple-100 text-purple-600 text-xs rounded-full">
                Arcade
              </span>
                        </div>
                        <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-purple-600">
                Q 35.00
              </span>
                            <button className="p-2 text-blue-500 hover:bg-blue-50 rounded-full transition-colors duration-200">
                                <Play className="w-5 h-5" />
                            </button>

                            <button className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors duration-200">
                                <Trash2 className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {/* Card 6 */}
                    <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 shadow-lg hover:shadow-xl transition-shadow duration-200">
                        <div className="w-full h-40 bg-gradient-to-br from-purple-200 to-pink-200 rounded-xl mb-4 flex items-center justify-center">
                            <span className="text-5xl">🎲</span>
                        </div>
                        <div className="mb-3">
                            <h3 className="text-lg font-semibold text-gray-800 mb-1">
                                Dice Master
                            </h3>
                            <span className="inline-block px-2 py-1 bg-purple-100 text-purple-600 text-xs rounded-full">
                Strategy
              </span>
                        </div>
                        <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-green-600">
                Gratis
              </span>
                            <button className="p-2 text-blue-500 hover:bg-blue-50 rounded-full transition-colors duration-200">
                                <Play className="w-5 h-5" />
                            </button>

                            <button className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors duration-200">
                                <Trash2 className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {/* Card 7 */}
                    <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 shadow-lg hover:shadow-xl transition-shadow duration-200">
                        <div className="w-full h-40 bg-gradient-to-br from-purple-200 to-pink-200 rounded-xl mb-4 flex items-center justify-center">
                            <span className="text-5xl">🚀</span>
                        </div>
                        <div className="mb-3">
                            <h3 className="text-lg font-semibold text-gray-800 mb-1">
                                Space Adventure
                            </h3>
                            <span className="inline-block px-2 py-1 bg-purple-100 text-purple-600 text-xs rounded-full">
                Adventure
              </span>
                        </div>
                        <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-purple-600">
                Q 95.00
              </span>
                            <button className="p-2 text-blue-500 hover:bg-blue-50 rounded-full transition-colors duration-200">
                                <Play className="w-5 h-5" />
                            </button>

                            <button className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors duration-200">
                                <Trash2 className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {/* Card 8 */}
                    <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 shadow-lg hover:shadow-xl transition-shadow duration-200">
                        <div className="w-full h-40 bg-gradient-to-br from-purple-200 to-pink-200 rounded-xl mb-4 flex items-center justify-center">
                            <span className="text-5xl">🎨</span>
                        </div>
                        <div className="mb-3">
                            <h3 className="text-lg font-semibold text-gray-800 mb-1">
                                Color Match
                            </h3>
                            <span className="inline-block px-2 py-1 bg-purple-100 text-purple-600 text-xs rounded-full">
                Casual
              </span>
                        </div>
                        <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-purple-600">
                Q 25.00
              </span>
                            <button className="p-2 text-blue-500 hover:bg-blue-50 rounded-full transition-colors duration-200">
                                <Play className="w-5 h-5" />
                            </button>

                            <button className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors duration-200">
                                <Trash2 className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default CardJuegos;