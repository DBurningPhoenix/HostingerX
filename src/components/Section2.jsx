import React from 'react'

const Section2 = () => {
  return (
    <>
    <div name="about" className="flex items-center justify-center w-full p-4 relative pt-[100px]">
    <div className="bg-gradient-to-b h-[calc(100vh-150px)] sm:h-full from-white/60 to-white/30 text-[#1c0708] backdrop-blur-[.5em] border-[1px] border-solid border-white border-opacity-10 rounded-2xl shadow-black/50  overflow-hidden shadow-2xl hover:-translate-y-1 hover:shadow-black/75 hover:backdrop-blur-[1em] transition">
        <div className="flex flex-col sm:flex-row items-center m-2">
        <div className="col-span-3">
            <img className="h-60 w-60 rounded-[50%]" src={require('../assets/business-investor-gaining-profit-from-investment.gif')} alt="pic"/>
        </div>
        <div className="col-span-3 p-8">
            <h2 className="mb-4 text-2xl font-bold">If opportunity doesn't knock, build a door</h2>
            <p className="text-sm text-[#1c0708]/60">We are a web hosting company with a mission to help everyone who goes online succeed.</p>
            <p className="text-sm text-[#1c0708]/60">Make your dream website a relity with HostingerX.</p>
            <a href="!#" className="mt-6 py-3 px-5 inline-flex bg-[#e84118] hover:bg-[#c23616] transition-colors text-gray-200 font-bold rounded-full text-sm">Explore More</a>
        </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Section2