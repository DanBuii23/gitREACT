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
                <ul className="text-3xl font-bold pt-20 pb-5 pl-32">Projects</ul>
            </h1>
            <div className="flex">
                <div className="basis-1/3 pl-36 font-semibold text-gray-400">
                    {pList.map((p) => (
                        <li key={p.link} className={currentPath === p.link ? "text-orange-300 font-bold list-none" : "list-none"}>{p.name}</li>
                    ))}
                </div>
                <div className="basis-2/3">
                    <div className="grid grid-rows-2 grid-flow-col gap-3 justify-center">
                        <div className="m-3">
                            <img src={ProjectCard}></img>
                        </div>
                        <div className="m-3">
                            <img src={ProjectCard2}></img>
                        </div>
                        <div className="m-3">
                            <img src={ProjectCard3}></img>
                        </div>
                        <div className="m-3">
                            <img src={ProjectCard4}></img>
                        </div>
                    </div>
                    <div className="grid grid-row-1 grid-flow-col gap-3 justify-center">

                        <button><img className="bg-cover" src={BackButton}></img></button>

                        <div className="flex items-center">
                            <img src={PageControl}></img>
                        </div>

                        <button><img className="bg-cover" src={NextButton}></img></button>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Projects