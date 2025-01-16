function About() {
    return (
        <div className="flex justify-start items-center relative h-[690px]">
            <div className="absolute bg-about h-[480px] w-[660px] bg-cover left-14"></div>
            <div className="absolute bg-blue-900 text-white rounded-md h-[410px] w-[390px] right-16 container mx-auto flex-col" >
                <h1 className="text-3xl font-bold pt-8 pl-8">About Us</h1>
                <p className="p-8 text-sm">For more than 30 years we have been delivering world-class construction and we’ve built many lasting relationships along the way. <br></br><br></br>We’ve matured into an industry leader and trusted resource for those seeking quality, innovation and reliability when building in the U.S.</p>
                <button className="bg-white text-blue-900 rounded-md p-2 m-8 font-semibold">More on Our History</button>
            </div>
        </div>
    )
}

export default About;