function About() {
    return (
        <div className="flex items-center relative h-[600px]">
            <div className="bg-about bg-cover h-full w-2/3"></div>
            <div className="absolute bg-blue-900 text-white rounded-md h-[410px] w-1/3 right-20 container mx-auto flex-col " >
                <h1 className="text-3xl font-bold pt-8 pl-8">About Us</h1>
                <p className="p-8 text-sm">For more than 30 years we have been delivering world-class construction and we’ve built many lasting relationships along the way. <br></br><br></br>We’ve matured into an industry leader and trusted resource for those seeking quality, innovation and reliability when building in the U.S.</p>
                <button className="bg-white text-blue-900 rounded-md p-2 m-8 font-semibold">More on Our History</button>
            </div>
        </div>
    )
}

export default About;