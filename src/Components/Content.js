import Herobg from '../Images/Herobg.jpg'
import Popup from './Popup';

function Content() {
    return (
        <div>
            <div className="relative bg-content bg-cover h-[500px]">
                <div class='absolute inset-0 flex items-center left-40 font-bold text-6xl'>
                    Building things
                    <br></br>
                    is our mission.
                </div>
                <div className='absolute bottom-0 right-0'>
                    <Popup />
                </div>
            </div>
        </div>
    )
}

export default Content;