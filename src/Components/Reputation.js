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
        <div className=' mx-auto m-10 p-10'>
            <h1 className="m-10 text-center text-2xl font-bold">
                Our Reputation
            </h1>
            <div className="flex flex-row justify-center gap-3">
                {repu.map((repu) => (
                    <div key={repu.title} className="border-solid border-2 border-slate-300 text-left p-3 w-1/4 mx-10">
                        <img src={repu.icon}></img>
                        <h4 className="font-bold block text-slate-700 ml-0 py-2">{repu.title}</h4>
                        <p className='text-slate-400 py-2'>{repu.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Reputation;