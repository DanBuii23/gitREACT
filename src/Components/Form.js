function Form() {
    return (
        <div className="text-center bg-neutral-50 p-5 h-[460px]">
            <h1 className="text-3xl font-bold m-2">
                What can us do for you?
            </h1>
            <h5 className="m-2">We are ready to work on a project of any complexity, <br></br>whether it’s commercial or residential.</h5>
            <div className="w-2/3 justify-self-center mx-5">
                <div className="flex">
                    <input type="text" className="p-2 m-2 w-1/2" placeholder="Your Name" />
                    <input type="email" className="p-2 m-2 w-1/2" placeholder="Email" />
                </div>
                <div class="flex">
                    <input type="text" className="p-2 m-2 w-1/2" placeholder="Reason for Contacting" />
                    <input type="text" className="p-2 m-2 w-1/2" placeholder="Phone" />
                </div>
                <textarea className="p-2 m-2 w-full pb-5" placeholder="Message"></textarea>
                <p className="m-1 text-left font-thin"> indicates a required field</p>
                <button className="bg-sky-700 text-white font-normal w-[200px] h-[40px]">Submit</button>

            </div>
        </div>
    )
}

export default Form