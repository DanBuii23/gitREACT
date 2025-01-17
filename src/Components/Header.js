import Logo from '../Images/Group.png';
import TheBox from '../Images/TheBox.png';

const menus = [
    {
        label: "Home",
        link: "/"
    },
    {
        label: "About us",
        link: "/about"
    },
    {
        label: "Projects",
        link: "/projects"
    },
    {
        label: "Services",
        link: "/services"
    },
    {
        label: "Contact Us",
        link: "/contact Us"
    },
]

function Header() {
    const currentPath = "/"
    return (
        <div className="container mx-auto flex items-center justify-between m-4 px-8">
            <div className="basis-1/2 flex gap-2 ml-10">
                <img src={Logo} className="object-contain"></img>
                <img src={TheBox} className="object-contain"></img>
            </div>
            <div className="basis-1/2 flex gap-10">
                {menus.map((menu) => (
                    <div key={menu.link} className={currentPath === menu.link ? "text-orange-300 font-bold" : ""}>
                        <h5>{menu.label}</h5>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Header;