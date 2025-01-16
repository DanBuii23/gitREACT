import ServiceCard from '../Images/ServiceCard.png'
import ServiceCard2 from '../Images/ServiceCard2.png'
import ServiceCard3 from '../Images/ServiceCard3.png'
import ServiceCard4 from '../Images/ServiceCard4.png'
import ServiceCard5 from '../Images/ServiceCard5.png'
import ServiceCard6 from '../Images/ServiceCard6.png'

function Serviecs() {
    return (
        <div className="bg-neutral-50 h-[440px]">
            <div>
                <h1 className="pt-5 text-center text-xl font-bold">
                    Services
                </h1>
            </div>
            <div className="grid grid-rows-2 grid-flow-col gap-x-8 justify-center">
                <div>
                    <img src={ServiceCard}></img>
                </div>
                <div>
                    <img src={ServiceCard2}></img>
                </div>
                <div>
                    <img src={ServiceCard3}></img>
                </div>
                <div>
                    <img src={ServiceCard4}></img>
                </div>
                <div>
                    <img src={ServiceCard5}></img>
                </div>
                <div>
                    <img src={ServiceCard6}></img>
                </div>
            </div>
        </div>
    )
}
export default Serviecs