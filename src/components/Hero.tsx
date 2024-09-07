import heroImg from "./../assets/demo-freelancer-sravan2.jpg";

export default function Hero() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16 pb-8">
      <div className="hero-background absolute inset-0 z-0"></div>
      <div className="relative z-10 flex flex-col md:flex-row items-center text-center md:text-left gap-8 max-w-5xl mx-auto">
        <div className="w-full md:w-1/2 px-4 flex flex-col justify-center h-full my-50">
          <h1 className="text-5xl md:text-6xl  font-bold text-white mb-4 ">
            Sravan Kumar Reddy <br /> Mummareddy
          </h1>
          <p className="text-lg md:text-xl bg-black rounded-lg p-2 text-white mb-8">
            Software Development Engineer | Java, Spring Boot, AWS
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="w-full md:w-[30rem] md:h-[40rem] relative flex justify-center items-center overflow-hidden">
            <img
              src={heroImg}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
