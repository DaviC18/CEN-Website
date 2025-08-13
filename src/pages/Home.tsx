import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="w-full">
      <Header />
      <div className="mt-5 px-5">
        <div className="w-full container mx-auto flex max-md:flex-col max-md:items-center">
          <div className="w-1/2 max-sm:w-full flex flex-col justify-between max-sm:items-center gap-4">
            <img
              src="/Logo-cen-1.png"
              alt=""
              className="w-[350px] max-sm:w-3xs"
            />
            <p className="text-white text-xl font-normal max-md:text-center">
              A Esperança da Glória
            </p>
          </div>
          <div className="w-1/2 max-sm:w-full"></div>
        </div>
        <div className="w-full container h-full mx-auto my-10">
          <div className="flex justify-end max-md:flex-col max-md: items-center">
            <div className="w-8/10 bg-[rgba(243,243,243,0.03)] border-1 border-gray-400 rounded-2xl">
              <p className="p-5 text-white text-end max-md:text-center">
                Amet commodo excepteur labore dolor exercitation adipisicing
                adipisicing. Deserunt adipisicing consequat qui fugiat
                exercitation labore laborum sunt reprehenderit dolore laborum
                magna cillum. Sit id dolor deserunt excepteur sint nostrud
                eiusmod ullamco. Irure Lorem veniam eu eu voluptate est laboris
                ex enim.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
