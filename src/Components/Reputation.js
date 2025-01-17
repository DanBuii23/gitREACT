import icon2 from '../Images/icon2.png'
import icon1 from '../Images/icon.png'

const repu = [
    {
        icon: icon2,
        title: 'Best Services',
        description: 'Nullam senectus porttitor in eget. Eget rutrum leo interdum.'
    },
    {
        icon: icon2,
        title: 'Best Teams',
        description: 'Cursus semper tellus volutpat aliquet lacus.'
    },
    {
        icon: icon1,
        title: 'Best Designs',
        description: 'Ultricies at ipsum nunc, tristique nam lectus.'
    }
]

function Reputation() {
    return (
        <div className='h-[320px] container mx-auto'>
            <div className="m-10">
                <h1 class="m-10 text-center text-2xl font-bold">
                    Our Reputation
                </h1>
            </div>
            <div className="flex flex-row justify-center mx-auto gap-12">
                {repu.map((repu) => (
                    <div className="border-solid border-2 border-slate-300 text-left w-[210px] h-[140px] p-3 overflow-clip">
                        <img src={repu.icon}></img>
                        <h4 className="font-bold block text-slate-800 ml-0">{repu.title}</h4>
                        <p className='text-slate-400'>{repu.description}</p>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Reputation;