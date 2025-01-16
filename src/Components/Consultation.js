function Consultation() {
    return (
        <div className="bg-black relative h-[220px]">
            <div className="absolute bg-consul bg-cover opacity-40 w-full h-full"></div>
            <div className="container mx-0 flex items-center z-20 h-full">
                <div className="container flex items-center justify-between p-10">
                    <div className="basis-2/3">
                        <h1 className="text-white text-2xl font-bold">Free consultation with exceptional quality</h1>
                        <h2 className="text-white text-2xl font-thin">Just one call away: <span className="underline">+84 1102 2703</span></h2>
                    </div>
                    <div className="basis-1/3">
                        <button className=" border-white border-2 border-solid text-white font-semibold w-[170px] h-[40px]">
                            Get your consultation
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Consultation