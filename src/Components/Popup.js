function Popup() {
    return (
        <div>
            <div className='container mx-auto flex-col bg-blue-900 text-white px-10 py-3'>
                <h1 className='text-center font-bold text-xl'>Freature Projects</h1>
                <p className='py-3 font-thin text-md text-center'>The National University of <br></br>Architecture</p>
            </div>
            <div className="container mx-auto flex items-center justify-between">
                <button className='flex justify-center bg-black text-white mx-auto w-full border-r-2 border-solid'>
                    <div className='flex items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                            <path fill-rule="evenodd" d="M7.28 7.72a.75.75 0 0 1 0 1.06l-2.47 2.47H21a.75.75 0 0 1 0 1.5H4.81l2.47 2.47a.75.75 0 1 1-1.06 1.06l-3.75-3.75a.75.75 0 0 1 0-1.06l3.75-3.75a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd" />
                        </svg>
                        Back
                    </div>
                </button>
                <button className='flex justify-center bg-black text-white mx-auto w-full border-l-2 border-solid'>
                    <div className='flex items-center'>
                        Next
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                            <path fill-rule="evenodd" d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                        </svg>
                    </div>
                </button>
            </div>
        </div>
    )
}
export default Popup