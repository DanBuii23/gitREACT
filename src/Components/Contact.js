
function Contact() {
    return (
        <div className="container mx-auto flex h-[660px] m-10">
            <div className="basis-3/5 relative w-full h-full overflow-hidden flex justify-center items-center">
                <div className="absolute border-solid border-2 shadow-lg px-16 py-4 z-10 right-[320px] top-28">
                    <h1 className="text-7xl font-bold">123</h1>
                    <h3 className="text-slate-700 text-2xl px-8">Projects Completed</h3>
                </div>
                <div className="absolute border-solid border-2 shadow-lg px-16 py-4 right-[100px] top-6 z-30 bg-white ">
                    <h1 className="text-7xl font-bold">84</h1>
                    <h3 className="text-slate-700 text-2xl px-8">Happy Clients</h3>
                </div>
                <div className="absolute border-solid border-2 shadow-lg px-16 py-4 right-[300px] top-[320px] z-10">
                    <h1 className="text-7xl font-bold">30</h1>
                    <h3 className="text-slate-700 text-2xl px-8">Years in Business</h3>
                </div>
                <div className="absolute border-solid border-2 shadow-lg px-16 py-4 right-[160px] bottom-36 z-20 bg-white ">
                    <h1 className="text-7xl font-bold">37</h1>
                    <h3 className="text-slate-700 text-2xl px-8">Awards Win</h3>
                </div>
            </div>
            <div className="basis-2/5 flex-col items-center">
                <h3 className="font-bold text-blue-800 text-6xl m-3 my-10">
                    30 Years <br></br>
                    Experience
                </h3>
                <p className="text-xl text-slate-700 m-5">Our company has been the <br></br> leading provided construction <br></br> services to clients throughout <br></br> the USA since 1988.</p>
                <button className="bg-blue-800 text-white font-semibold text-xl m-5 py-5 px-10 rounded-sm">Contact Us</button>
            </div>
        </div>
    )
}

export default Contact