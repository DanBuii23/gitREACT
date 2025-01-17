import ProjectCard from '../Images/hotel1.png'
import ProjectCard2 from '../Images/hotel3.png'
import ProjectCard3 from '../Images/hotel2.png'
import ProjectCard4 from '../Images/hotel4.png'

const pList = [
    {
        name: "All",
        link: '/all'
    },
    {

        name: "Commerial",
        link: '/commerial'
    },
    {

        name: "Residential",
        link: '/residential'
    },
    {

        name: "Other",
        link: '/other'
    },
]

const pbox = [
    {
        name: "Wildstone Infra Hotel",
        location: "2715 Ash Dr. San Jose, South Dakota",
        image: ProjectCard
    },
    {
        name: "Mr. Parkinston’s House",
        location: "3517 W. Gray St. Utica, Pennsylvania",
        image: ProjectCard2
    },
    {
        name: "Wish Stone Building",
        location: "2972 Westheimer Rd. Santa Ana, Illinois",
        image: ProjectCard3
    },
    {
        name: "Oregano Height",
        location: "2464 Royal Ln. Mesa, New Jersey",
        image: ProjectCard4
    },
]
function Projects() {
    const currentPath = "/all"
    return (
        <div className="h-[800px]">
            <h1>
                <ul className="text-3xl font-bold pt-20 pb-5 pl-32">Projects</ul>
            </h1>
            <div className="flex">
                <div className="basis-1/3 pl-36 font-semibold text-gray-400">
                    {pList.map((p) => (
                        <li key={p.link} className={currentPath === p.link ? "text-orange-300 font-bold list-none" : "list-none"}>{p.name}</li>
                    ))}
                </div>
                <div className="basis-2/3">
                    <div className="grid grid-rows-2 grid-flow-col gap-2 justify-center rounded-md">
                        {pbox.map((p) => (
                            <div className="m-3 w-[280px] h-[240px] flex flex-col">
                                <img key={p.image} className='w-[280px] h-[180px]' src={p.image}></img>
                                <div className="flex flex-col bg-blue-900 text-white p-2 h-[60px]">
                                    <h1 className='font-bold '>{p.name}</h1>
                                    <p className='text-sm'>{p.location}</p>
                                </div>
                            </div>))}

                    </div>
                    <div className="grid grid-rows grid-flow-col gap-2 justify-stretch h-[45px]" >
                        <button className='flex justify-center items-center bg-black text-white mx-auto w-[215px] border-2 border-solid'><div className='flex items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                <path fill-rule="evenodd" d="M7.28 7.72a.75.75 0 0 1 0 1.06l-2.47 2.47H21a.75.75 0 0 1 0 1.5H4.81l2.47 2.47a.75.75 0 1 1-1.06 1.06l-3.75-3.75a.75.75 0 0 1 0-1.06l3.75-3.75a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd" />
                            </svg>
                            Back
                        </div></button>

                        <div className="flex items-center justify-center gap-2">
                            <button className='w-2 h-2 bg-blue-500 text-white rounded-full flex items-center justify-center shadow-md'></button>
                            <button className='w-2 h-2 bg-gray-400 text-white rounded-full flex items-center justify-center shadow-md'></button>
                            <button className='w-2 h-2 bg-gray-400 text-white rounded-full flex items-center justify-center shadow-md'></button>
                            <button className='w-2 h-2 bg-gray-400 text-white rounded-full flex items-center justify-center shadow-md'></button>
                            <button className='w-2 h-2 bg-gray-400 text-white rounded-full flex items-center justify-center shadow-md'></button>
                        </div>

                        <button className='flex justify-center items-center bg-black text-white mx-auto w-[215px] border-2 border-solid'><div className='flex items-center'>
                            Next
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                <path fill-rule="evenodd" d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                            </svg>

                        </div></button>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Projects