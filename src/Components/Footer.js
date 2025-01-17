import Logo from '../Images/Group.png';
import TheBox from '../Images/TheBox.png';
import iFB from '../Images/icon-fb.png';
import iLinkedIn from '../Images/icon-linkedin.png';
import iTwitter from '../Images/icon-twitter.png';

const iSocial = [
    {
        name: "Facebook",
        image: iFB,
        URL: "https://www.facebook.com/"
    },
    {
        name: "LinkedIn",
        image: iLinkedIn,
        URL: "https://www.linkedin.com/"
    },
    {
        name: "Twitter",
        image: iTwitter,
        URL: "https://twitter.com/"
    }
]

function Footer() {
    return (
        <footer className='text-2xl py-4'>
            <div className="container mx-auto flex">
                <div className="basis-1/2 p-10 ">
                    <p className="text-blue-500 p-2">ADDRESS: <span className="text-black">6391 Elgin St. Celina, Delaware 10299</span></p>
                    <p className="text-blue-500 p-2">PHONE: <span className="text-black">+84 1102 2703</span></p>
                    <p className="text-blue-500 p-2">EMAIL: <span className="text-black">hello@thebox.com</span></p>
                    <button className="flex items-center left-0">
                        <img className="bg-cover p-2" src={Logo}></img>
                        <img className="object-contain" src={TheBox}></img>
                    </button>
                </div>
                <div className="basis-1/2 p-10">
                    <p className="text-blue-500 p-2">NEWSLETTER:</p>
                    <div className="flex h-8">
                        <input className="w-1/2 p-2 mx-2 border-solid border-2 text-md" type="text" placeholder="Your email here"></input>
                        <button className="bg-orange-500 text-white px-1 text-md font-semibold w-36 rounded-sm">Subcribe</button>
                    </div>
                    <p className="text-blue-500 p-2">SOCIAL:</p>
                    <div className="flex mx-2">
                        {iSocial.map((i) => (
                            <button key={i.name}>
                                <img className="mx-1" src={i.image}></img>
                                <a href={i.URL}></a>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            <div className="bg-blue-700 text-white p-4">
                <p>TheBox Company @ 2022. All Rights Reserved</p>
            </div>
        </footer>
    );
}
export default Footer;