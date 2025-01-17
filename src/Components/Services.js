import ServiceCard from '../Images/sv1.png'
import ServiceCard2 from '../Images/sv4.png'
import ServiceCard3 from '../Images/sv2.png'
import ServiceCard4 from '../Images/sv5.png'
import ServiceCard5 from '../Images/sv3.png'
import ServiceCard6 from '../Images/sv6.png'

function Serviecs() {
    return (
        <div className="bg-neutral-50">
            <div>
                <h1 className="pt-10 text-center text-3xl font-bold">
                    Services
                </h1>
            </div>
            <div className="grid grid-rows-2 grid-flow-col gap-y-16 gap-x-32 justify-center p-10">
                <div className="bg-white flex flex-col justify-center items-center shadow-lg rounded-md p-10">
                    <img className='p-3' src={ServiceCard}></img>
                    <hr className="shadow-lg"></hr>
                    <h1 className='text-blue-900 font-semibold text-2xl'>Construction</h1>
                </div>
                <div className="bg-blue-900 flex flex-col justify-center items-center shadow-lg rounded-md p-10">
                    <img className='p-3' src={ServiceCard2}></img>
                    <hr className="shadow-lg"></hr>
                    <h1 className='text-white font-semibold text-2xl'>Repair Services</h1>
                </div>
                <div className="bg-blue-900 flex flex-col justify-center items-center shadow-lg rounded-md p-10">
                    <img className='p-3' src={ServiceCard3}></img>
                    <hr className="shadow-lg"></hr>
                    <h1 className='text-white font-semibold text-2xl'>Renovation</h1>
                </div>
                <div className="bg-white flex flex-col justify-center items-center shadow-lg rounded-md p-10">
                    <img className='p-3' src={ServiceCard4}></img>
                    <hr className="shadow-lg"></hr>
                    <h1 className='text-blue-900 font-semibold text-2xl'>Architecture</h1>
                </div>
                <div className="bg-white flex flex-col justify-center items-center shadow-lg rounded-md p-10">
                    <img className='p-3' src={ServiceCard5}></img>
                    <hr className="shadow-lg"></hr>
                    <h1 className='text-blue-900 font-semibold text-2xl'>Consultation</h1>
                </div>
                <div className="bg-blue-900 flex flex-col justify-center items-center shadow-lg rounded-md p-10">
                    <img className='p-3' src={ServiceCard6}></img>
                    <hr className="shadow-lg"></hr>
                    <h1 className='text-white font-semibold text-2xl'>Electric</h1>
                </div>
            </div>
        </div>
    )
}
export default Serviecs