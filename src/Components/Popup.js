import Pop from '../Images/FeaturePj.png'
import Back from '../Images/Back Button.png'
import Next from '../Images/Next Button.png'

function Popup() {
    return (
        <div>
            <img class="-mb-1 border-solid" src={Pop}></img>
            <div class="flex justify-between">
                <button><img src={Back}></img></button>
                <button><img src={Next}></img></button>
            </div>
        </div>
    )
}
export default Popup