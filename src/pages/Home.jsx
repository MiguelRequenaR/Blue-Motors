import Products from "./Products";


export default function Home() {
    return (
        <>
            <div
                className="h-screen overflow-hidden flex flex-col justify-center items-center p-10 animate__animated animate__fadeInLeft text-center"
                style={{
                    backgroundImage: "url('https://azwecdnepstoragewebsiteuploads.azureedge.net/PHO_STAGE_KTM-250-SX-Adamo-Edition-Stage_%23SALL_%23AEPI_%23V1.png')",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    boxShadow: 'inset 0 0 0 2000px rgba(0, 0, 0, 0.5)', 
                }}
            >
                <div className="space-y-16 mb-20">
                    <h1 className="text-white text-3xl font-bold lg:text-[50px] lg:w-2/3 mx-auto">
                        ¡Siente el rugido, vive la pasión de las motos!
                    </h1>

                    <div>
                        <button
                            className="animate__animated animate__fadeInLeft bg-bg rounded-xl py-4 px-8 text-white text-center text-[20px] hover:opacity-90"
                        >
                            <a href="/">Explora la nueva colección</a>
                        </button>
                    </div>
                </div>


            </div>

            <Products />
            
        </>
    );
}