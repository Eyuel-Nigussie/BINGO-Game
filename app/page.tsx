export default function Home() {
  return (
    <div className="h-screen bg-gray-900 text-white flex flex-col items-center p-4  ">
        {/* Top Section - Bingo Board */}
        <section className="flex w-full h-2/3">
            {/* Column 1 - Timer & Small Bingo Preview */}
            <div className="w-1/6 bg-gray-900 flex flex-col items-center justify-center p-4 space-y-4">
                {/* Timer */}
                <div className="text-2xl font-bold bg-gray-200 p-4 rounded">25:27</div>

                {/* Small Bingo Card Preview */}
                <div className="w-16 h-16 bg-gray-500 rounded flex items-center justify-center">
                    <span className="text-sm">BINGO</span>
                </div>
            </div>

            {/* Column 2 - BINGO Letters & Numbers Grid */}
            <div className="w-5/6 p-4 grid grid-cols-16 gap-2 text-center bg-gray-950">
                {["B", "I", "N", "G", "O"].map((letter, rowIndex) => (
                    <>
                        {/* BINGO Letter Column */}
                    <div
                            key={letter}
                            className="bg-white w-20 h-20 text-7xl font-extrabold text-red-600 flex items-center justify-center rounded"
                        >
                            {letter}
                        </div>

                        {/* Numbers Grid */}
                        {[...Array(15)].map((_, colIndex) => {
                            const number = rowIndex * 15 + colIndex + 1;
                            return (
                                <div
                                    key={number}
                                    className="w-20 h-20 text-7xl text-gray-400 font-extrabold flex items-center justify-center rounded"
                                >
                                    {number}
                                </div>
                            );
                        })}
                    </>
                ))}
            </div>
        </section>
        {/* Bottom Section - Controls & Amount */}
        <div className="w-full h-1/3 bg-blue-900 flex">
                {/* Left Section - Current Drawn Number */}
                <div className="w-1/4 flex items-center justify-center">
                    <div className="w-40 h-40 flex items-center justify-center items-center bg-gray-200 text-black text-6xl font-bold rounded-full">
                        N <br /> 45
                    </div>
                </div>

                {/* Middle Section - Controls */}
                <div className="w-2/4 flex flex-col items-center justify-center space-y-4">
                    {/* Round Selection */}
                    <select className="bg-white text-black p-2 rounded w-40">
                        <option>Select Round</option>
                        <option>Round 1</option>
                        <option>Round 2</option>
                        <option>Round 3</option>
                    </select>

                    {/* Speed Slider */}
                    <div className="flex items-center space-x-2">
                        <span>Speed:</span>
                        <input type="range" className="w-32" />
                    </div>

                    {/* Clear Button */}
                    <button className="bg-blue-600 px-4 py-2 rounded">Check Board</button>
                </div>

                {/* Right Section - Total Amount */}
                <div className="w-1/3 flex items-center justify-center">
                    <div className="w-40 h-40 flex items-center justify-center bg-red-500 text-white text-8xl font-bold rounded-full">
                        60
                    </div>
                </div>
            </div>  
    </div>
   
  );
}
