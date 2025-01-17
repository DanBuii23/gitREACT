import '../css/content.css';
import Popup from './Popup';

function Content() {
    return (

        <div className="relative bg-content bg-cover bg-center flex items-center h-[660px]">
            <div className='font-bold text-6xl pl-28'>
                Building things
                <br></br>
                is our mission.
            </div>
            <div className='absolute bottom-0 right-0'>
                <Popup />
            </div>
        </div>

    )
}

export default Content;