function Consultation() {
    return (
        <div className="bg-black relative ">
            <div className="absolute bg-consul bg-cover opacity-30 w-full h-full"></div>
            <div className=" flex items-center justify-between w-full py-10 px-40 z-10">
                <div className="basis-2/3">
                    <h1 className="text-white text-5xl font-bold p-5">Free consultation with exceptional quality</h1>
                    <h2 className="text-white text-4xl font-thin p-5">Just one call away: <span className="underline">+84 1102 2703</span></h2>
                </div>
                <div className="basis-1/3 z-20">
                    <button className=" border-white border-2 border-solid text-white font-bold text-2xl py-2 px-5">
                        Get your consultation
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Consultation