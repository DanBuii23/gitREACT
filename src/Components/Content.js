import Herobg from '../Images/Herobg.jpg'
import Popup from './Popup';

function Content() {
    return (
        <div>
            <div className="relative bg-content bg-cover h-[500px] flex items-center">
                <div className='font-bold text-5xl pl-28'>

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