import loadingGif from "../assets/loading.gif";


export default function Loading() {
    return (
        <div 
            className="flex justify-center items-center flex-col mt-48"
            data-aos='zoom-in'
            data-aos-delay='200'
            data-aos-duration='500'
        >
            <img src={loadingGif} alt="loading" className="w-[60%] h-[60%] lg:w-[30%] rounded-2xl" />
            <span className="lg:text-3xl text-lg font-bold text-white">Cargando...</span>
        </div>
    )
}
