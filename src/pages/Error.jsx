
export default function ErrorPage() {
    return (
        <div className="h-screen flex flex-col justify-center items-center bg-white">
            <img src="https://img.freepik.com/vector-gratis/ilustracion-concepto-uy-error-404-robot-roto_114360-1932.jpg?t=st=1722564593~exp=1722568193~hmac=e4cd86df5ba956c31732c44363237273e7f7faaaae6eac5214549e8c4690a791&w=740" alt="error" />
            <h1 className="text-black font-bold text-2xl">404 - Página no encontrada</h1>
            <p className="text-gray-500">Lo sentimos, la página que estás buscando no existe.</p>
            <a href="/" className="btn mt-5 hover:text-white">Volver a la página principal</a>
        </div>
    );
}