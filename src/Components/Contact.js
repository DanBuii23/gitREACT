
function Contact() {
    return (
        <div className="flex h-[530px] items-center">
            <div className="basis-2/3 relative pl-36 w-full h-full overflow-hidden">
                <div className="absolute border-solid border-2 shadow-lg p-5 z-10 top-28 w-[260px] h-[110px]">
                    <h1 className="text-4xl font-bold">123</h1>
                    <h3 className="text-slate-700">Projects Completed</h3>
                </div>
                <div className="absolute border-solid border-2 shadow-lg p-5 left-[380px] top-16 z-30 bg-white w-[200px] h-[110px]">
                    <h1 className="text-4xl font-bold">84</h1>
                    <h3 className="text-slate-700">Happy Clients</h3>
                </div>
                <div className="absolute border-solid border-2 shadow-lg p-5 left-52 top-[280px] z-10 w-[240px] h-[110px]">
                    <h1 className="text-4xl font-bold">30</h1>
                    <h3 className="text-slate-700">Years in Business</h3>
                </div>
                <div className="absolute border-solid border-2 shadow-lg p-5 left-[355px] bottom-52 z-20 bg-white w-[200px] h-[110px]">
                    <h1 className="text-4xl font-bold">37</h1>
                    <h3 className="text-slate-700">Awards Win</h3>
                </div>
            </div>
            <div className="basis-1/3 flex-col">
                <h3 className="font-bold text-blue-800 text-4xl m-3">
                    30 Years <br></br>
                    Experience
                </h3>
                <p className="text-md text-slate-700 m-5">Our company has been the <br></br> leading provided construction <br></br> services to clients throughout <br></br> the USA since 1988.</p>
                <button className="bg-blue-800 text-white font-bold text-xl m-5 p-5">Contact Us</button>
            </div>
        </div>
    )
}

export default Contact