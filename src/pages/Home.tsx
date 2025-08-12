import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="w-full">
      <Header />
      <div className="container mx-auto mt-5 mb-16 md:px-5 sm:px-5 lg:px-0 ">
        <div className="w-full">
          <div className="w-1/2 flex flex-col justify-between gap-4">
            <img
              src="/Logo-cen-1.png"
              alt=""
              style={{
                width: "350px",
              }}
            />
            <p className="text-white text-xl font-normal">
              A Esperança da Glória
            </p>
          </div>
          <div className="w-1/2"></div>
        </div>
        <div className="w-full h-full flex justify-end my-10">
          <div className="w-8/10 bg-[rgba(243,243,243,0.03)] border-1 border-gray-400 rounded-2xl">
            <p className="p-5 text-white text-end">
              Amet commodo excepteur labore dolor exercitation adipisicing
              adipisicing. Deserunt adipisicing consequat qui fugiat
              exercitation labore laborum sunt reprehenderit dolore laborum
              magna cillum. Sit id dolor deserunt excepteur sint nostrud eiusmod
              ullamco. Irure Lorem veniam eu eu voluptate est laboris ex enim.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
