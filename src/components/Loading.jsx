export default function Loading() {
  return (
    <div
      className="flex justify-center items-center flex-col mt-10"
      data-aos="zoom-in"
      data-aos-delay="200"
      data-aos-duration="500"
    >
      <div
        className="m-12 inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
        role="status"
      ></div>
      <span className="lg:text-3xl text-lg font-bold text-white">
        Cargando Motos...
      </span>
    </div>
  );
}
