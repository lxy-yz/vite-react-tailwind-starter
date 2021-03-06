import Nav from "../components/nav";

const Index = () => {
  return (
    <div>
      <header className="shadow">
        <Nav />
      </header>
      <main className=" dark:bg-none h-screen bg-cover bg-[url('https://tailwindcss.com/_next/static/media/hero@75.4dea7abe609fc522c039fba7662ceea2.jpg')]">
        <div className="relative">
          <video
            autoPlay
            controls
            muted
            loop
            className="absolute left-0 top-0 w-screen h-auto -z-10"
          >
            <source src="https://mdbcdn.b-cdn.net/img/video/forest.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="px-4 py-6 sm:px-0">
          <div className="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h2 className="dark:text-white text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
                This demo is using
                <br />
                <a
                  target="_blank"
                  className="dark:text-indigo-400 text-indigo-600 underline hover:text-indigo-500"
                  href="https://tailwindcss.com"
                >
                  Tailwind CSS
                </a>
              </h2>
              <p className="dark:text-gray-200 mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                All the code present here is part of a free sample from{" "}
                <a
                  href="https://tailwindui.com"
                  className="dark:text-indigo-400 text-indigo-600 underline hover:text-indigo-500"
                >
                  Tailwind UI
                </a>{" "}
                but, you don't need it.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="https://github.com/lxy-yz/vite-react-tailwind-starter"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:ring transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                  >
                    Get started
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:ring focus:border-indigo-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                  >
                    Live demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
