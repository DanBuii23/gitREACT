import ProjectCard from '../Images/ProjectCard.png'
import ProjectCard2 from '../Images/ProjectCard2.png'
import ProjectCard3 from '../Images/ProjectCard3.png'
import ProjectCard4 from '../Images/ProjectCard4.png'
import BackButton from '../Images/Back Button.png'
import NextButton from '../Images/Next Button.png'
import PageControl from '../Images/PageControl.png'

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

function Projects() {
    const currentPath = "/all"
    return (
        <div className="h-[800px]">
            <h1>
                <ul class="text-3xl font-bold pt-20 pb-5 pl-32">Projects</ul>
            </h1>
            <div class="flex">
                <div class="basis-1/3 pl-36 font-semibold text-gray-400">
                    {pList.map((p) => (
                        <li key={p.link} className={currentPath === p.link ? "text-orange-300 font-bold list-none" : "list-none"}>{p.name}</li>
                    ))}
                </div>
                <div class="basis-2/3">
                    <div class="grid grid-rows-2 grid-flow-col gap-3 justify-center">
                        <div class="m-3">
                            <img src={ProjectCard}></img>
                        </div>
                        <div class="m-3">
                            <img src={ProjectCard2}></img>
                        </div>
                        <div class="m-3">
                            <img src={ProjectCard3}></img>
                        </div>
                        <div class="m-3">
                            <img src={ProjectCard4}></img>
                        </div>
                    </div>
                    <div class="grid grid-row-1 grid-flow-col gap-3 justify-center">
                        <div class="">
                            <button><img class="bg-cover" src={BackButton}></img></button>
                        </div>
                        <div class="flex items-center">
                            <img src={PageControl}></img>
                        </div>
                        <div class="">
                            <button><img class="bg-cover" src={NextButton}></img></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Projects