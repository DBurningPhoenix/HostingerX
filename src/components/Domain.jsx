import React from 'react'

const Domain = () => {
  return (
    <>
    <div className="flex items-center justify-center w-full p-4 relative pt-[100px]">
    <div className="bg-gradient-to-b h-[calc(100vh-150px)] sm:h-full from-white/60 to-white/30 text-[#1c0708] backdrop-blur-[.5em] border-[1px] border-solid border-white border-opacity-10 rounded-2xl shadow-black/50  overflow-hidden shadow-2xl hover:-translate-y-1 hover:shadow-black/75 hover:backdrop-blur-[1em] transition">
        <div className="flex flex-col sm:flex-row items-center w-screen h-[300px]">
        <div className="grid grid-cols-6 gap-2 place-items-center">
        <div className="col-span-full p-8">
            <h2 className="mb-4 text-2xl font-bold">Choose Your Domain Today</h2>
            <input className="form-input 
              block w-full rounded-lg leading-none focus:outline-none placeholder-black/50 
              [ transition-colors duration-200 ] 
              [ py-3 pr-3 md:py-4 md:pr-4 lg:py-4 lg:pr-4 pl-12 ] 
              [ bg-black/20 focus:bg-black/25 ] 
              [ text-[#333] focus:text-black ]" type="text" name="domain" id="domain" placeholder="Choose A Domain" />
            <a href="!#" className="mt-6 py-3 px-5 inline-flex bg-[#e84118] hover:bg-[#c23616] transition-colors text-gray-200 font-bold rounded-full text-sm">Starts $1.99</a>
        </div>
        </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Domain