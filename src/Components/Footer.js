import Logo from '../Images/Group.png';
import TheBox from '../Images/TheBox.png';
import iFB from '../Images/icon-fb.png';
import iLinkedIn from '../Images/icon-linkedin.png';
import iTwitter from '../Images/icon-twitter.png';

function Footer() {
    return (
        <footer className='h-[330px]'>
            <div class="flex">
                <div class="basis-1/2 p-10">
                    <p class="text-blue-500 p-2">ADDRESS: <span class="text-black">6391 Elgin St. Celina, Delaware 10299</span></p>
                    <p class="text-blue-500 p-2">PHONE: <span class="text-black">+84 1102 2703</span></p>
                    <p class="text-blue-500 p-2">EMAIL: <span class="text-black">hello@thebox.com</span></p>
                    <div class="flex items">
                        <img class="bg-cover p-2 ml-10" src={Logo}></img>
                        <img class="object-contain" src={TheBox}></img>
                    </div>
                </div>
                <div class="basis-1/2 p-10">
                    <p class="text-blue-500 p-2">NEWSLETTER:</p>
                    <div class="flex">
                        <input class="w-1/2 m-1 border-solid border-2" type="text" placeholder="Your email here"></input>
                        <button class="bg-orange-500 text-white px-2 font-thin">Subcribe</button>
                    </div>
                    <p class="text-blue-500 p-2">SOCIAL:</p>
                    <div class="flex">
                        <img class="mx-2" src={iFB}></img>
                        <img class="mx-2" src={iLinkedIn}></img>
                        <img class="mx-2" src={iTwitter}></img>
                    </div>
                </div>
            </div>
            <div class="bg-blue-700 text-white p-4">
                <p>TheBox Company @ 2022. All Rights Reserved</p>
            </div>
        </footer>
    );
}
export default Footer;