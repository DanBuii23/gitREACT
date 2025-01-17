function Form() {
    return (
        <div className="text-center bg-neutral-50 p-5 h-full">
            <h1 className="text-5xl font-bold m-2">
                What can us do for you?
            </h1>
            <h5 className="m-2 text-2xl">We are ready to work on a project of any complexity, <br></br>whether it’s commercial or residential.</h5>
            <div className="w-2/5 justify-self-center mx-auto">
                <div className="flex w-full">
                    <input type="text" className="p-4 m-4 ml-0 w-1/2 text-2xl shadow-inner" placeholder="Your Name" />
                    <input type="email" className="p-4 m-4 mr-0 w-1/2 text-2xl shadow-inner" placeholder="Email" />
                </div>
                <div className="flex w-full">
                    <input type="text" className="p-4 m-4 ml-0 w-1/2 text-2xl shadow-inner" placeholder="Reason for Contacting" />
                    <input type="text" className="p-4 m-4 mr-0 w-1/2 text-2xl shadow-inner" placeholder="Phone" />
                </div>
                <textarea className="p-4 m-4 w-full h-40 mx-auto text-2xl shadow-inner" placeholder="Message"></textarea>
                <p className="text-left text-slate-600 text-xl"> indicates a required field</p>
                <button className="bg-sky-700 text-white text-xl py-4 px-24 font-bold round-sm">Submit</button>

            </div>
        </div>
    )
}

export default Form