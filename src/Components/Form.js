function Form() {
    return (
        <div class="text-center bg-neutral-50 p-5 h-[460px]">
            <h1 class="text-3xl font-bold m-2">
                What can us do for you?
            </h1>
            <h5 class="m-2">We are ready to work on a project of any complexity, <br></br>whether it’s commercial or residential.</h5>
            <div class="w-2/3 justify-self-center mx-5">
                <div class="flex">
                    <input type="text" class="p-2 m-2 w-1/2" placeholder="Your Name" />
                    <input type="email" class="p-2 m-2 w-1/2" placeholder="Email" />
                </div>
                <div class="flex">
                    <input type="text" class="p-2 m-2 w-1/2" placeholder="Reason for Contacting" />
                    <input type="text" class="p-2 m-2 w-1/2" placeholder="Phone" />
                </div>
                <textarea class="p-2 m-2 w-full pb-5" placeholder="Message"></textarea>
                <p class="m-1 text-left font-thin"> indicates a required field</p>
                <button class="bg-sky-700 text-white font-normal w-[200px] h-[40px]">Submit</button>

            </div>
        </div>
    )
}

export default Form