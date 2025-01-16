
function Contact() {
    return (
        <div className="flex h-[530px] items-center">
            <div className="basis-2/3 relative pl-36">
                <div className="absolute border-solid border-2 shadow-lg p-5 z-10 bottom-[15px] w-[260px] h-[110px]">
                    <h1 className="text-3xl font-bold">123</h1>
                    <h3>Projects Completed</h3>
                </div>
                <div className="absolute border-solid border-2 shadow-lg p-5 left-[380px] bottom-[85px] z-30 bg-white w-[200px] h-[110px]">
                    <h1 className="text-3xl font-bold">84</h1>
                    <h3>Happy Clients</h3>
                </div>
                <div className="absolute border-solid border-2 shadow-lg p-5 left-52 -bottom-32 z-10 w-[240px] h-[110px]">
                    <h1 className="text-3xl font-bold">30</h1>
                    <h3>Years in Business</h3>
                </div>
                <div className="absolute border-solid border-2 shadow-lg p-5 left-[355px] -top-10 z-20 bg-white w-[200px] h-[110px]">
                    <h1 className="text-3xl font-bold">37</h1>
                    <h3>Awards Win</h3>
                </div>
            </div>
            <div className="basis-1/3 flex-col">
                <h3 className="font-bold text-blue-400 text-4xl m-3">
                    30 Years <br></br>
                    Experience
                </h3>
                <p className="text-lg m-5">Our company has been the <br></br> leading provided construction <br></br> services to clients throughout <br></br> the USA since 1988.</p>
                <button className="bg-sky-600 text-white font-bold text-xl m-5 p-5">Contact Us</button>
            </div>
        </div>
    )
}

export default Contact