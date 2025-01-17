import ServiceCard from '../Images/sv1.png'
import ServiceCard2 from '../Images/sv4.png'
import ServiceCard3 from '../Images/sv2.png'
import ServiceCard4 from '../Images/sv5.png'
import ServiceCard5 from '../Images/sv3.png'
import ServiceCard6 from '../Images/sv6.png'

function Serviecs() {
    return (
        <div className="bg-neutral-50 h-[440px]">
            <div>
                <h1 className="py-5 text-center text-xl font-bold">
                    Services
                </h1>
            </div>
            <div className="grid grid-rows-2 grid-flow-col gap-y-10 gap-x-20 justify-center">
                <div className="bg-white w-[200px] h-[130px] flex flex-col justify-center items-center shadow-lg rounded-md">
                    <img className='p-3' src={ServiceCard}></img>
                    <hr className="w-[50px] shadow-lg"></hr>
                    <h1 className='text-blue-900 font-bold'>Construction</h1>
                </div>
                <div className="bg-blue-900 w-[200px] h-[130px] flex flex-col justify-center items-center shadow-lg rounded-md">
                    <img className='p-3' src={ServiceCard2}></img>
                    <hr className="w-[50px] shadow-lg"></hr>
                    <h1 className='text-white font-bold'>Repair Services</h1>
                </div>
                <div className="bg-blue-900 w-[200px] h-[130px] flex flex-col justify-center items-center shadow-lg rounded-md">
                    <img className='p-3' src={ServiceCard3}></img>
                    <hr className="w-[50px] shadow-lg"></hr>
                    <h1 className='text-white font-bold'>Renovation</h1>
                </div>
                <div className="bg-white w-[200px] h-[130px] flex flex-col justify-center items-center shadow-lg rounded-md">
                    <img className='p-3' src={ServiceCard4}></img>
                    <hr className="w-[50px] shadow-lg"></hr>
                    <h1 className='text-blue-900 font-bold'>Architecture</h1>
                </div>
                <div className="bg-white w-[200px] h-[130px] flex flex-col justify-center items-center shadow-lg rounded-md">
                    <img className='p-3' src={ServiceCard5}></img>
                    <hr className="w-[50px] shadow-lg"></hr>
                    <h1 className='text-blue-900 font-bold'>Consultation</h1>
                </div>
                <div className="bg-blue-900 w-[200px] h-[130px] flex flex-col justify-center items-center shadow-lg rounded-md">
                    <img className='p-3' src={ServiceCard6}></img>
                    <hr className="w-[50px] shadow-lg"></hr>
                    <h1 className='text-white font-bold'>Electric</h1>
                </div>
            </div>
        </div>
    )
}
export default Serviecs