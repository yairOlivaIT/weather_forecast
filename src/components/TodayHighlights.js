import React from 'react';

export default function TodayHighlights({weather}) {
    
    const { consolidated_weather } = weather;
    
    return (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 justify-center justify-items-center mt-4">
            <div className="flex flex-col w-80 bg-gray-800">
                <div className="w-full p-4">
                    <p className="text-center text-white text-xl">Wind Status</p>
                </div>
                <div className="w-full pb-4">
                    <p className="text-center text-white text-5xl font-sans">{parseInt(consolidated_weather[0].wind_speed)}<span className="text-2xl text">mph</span></p>
                </div>
            </div>

            <div className="flex flex-col w-80 bg-gray-800">
                <div className="w-full p-4">
                    <p className="text-center text-white text-xl">Humidity</p>
                </div>
                <div className="w-full pb-4">
                    <p className="text-center text-white text-5xl font-sans">{parseInt(consolidated_weather[0].humidity)}<span className="text-2xl text">%</span></p>
                </div>
            </div>

            <div className="flex flex-col w-80 bg-gray-800">
                <div className="w-full p-4">
                    <p className="text-center text-white text-xl">Visibility</p>
                </div>
                <div className="w-full pb-4">
                    <p className="text-center text-white text-5xl font-sans">{parseInt(consolidated_weather[0].visibility)}<span className="text-2xl text">miles</span></p>
                </div>
            </div>

            <div className="flex flex-col w-80 bg-gray-800">
                <div className="w-full p-4">
                    <p className="text-center text-white text-xl">Air Pressure</p>
                </div>
                <div className="w-full p-4">
                    <p className="text-center text-white text-5xl font-sans">{parseInt(consolidated_weather[0].air_pressure)}<span className="text-2xl text">mb</span></p>
                </div>
            </div>
        </div>
    )
}
