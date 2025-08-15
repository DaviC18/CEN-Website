import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import "./Home.css";
import Cen from "../../public/image.png";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="w-full">
      <Header />
      src={}
      <div className="px-8 pt-[4px] pb-3">
        <div className="w-full container mx-auto flex max-md:flex-col max-md:gap-5 pb-5 max-md:items-center">
          <div className="w-1/2 max-sm:w-full flex flex-col justify-between max-sm:items-center gap-4">
            <img
              src="/Logo-cen-1.png"
              alt=""
              className="w-[350px] max-sm:w-3xs"
            />
            <p className="text-white text-xl font-normal max-md:text-center max-sm:text-xl">
              A Esperança da Glória
            </p>
          </div>
          <div className="w-1/2 max-md:w-full  flex justify-center">
            <div className="w-7/10 max-md:w-8/10 bg-[rgba(255,255,255,0.08)] rounded-2xl">
              <div className="relative w-full h-full flex justify-center items-center">
                <img
                  src={Cen}
                  alt=""
                  className="w-9/10 h-9/10 object-cover z-10 block rounded-2xl box-shadow duration-300 hover:scale-[1.03]"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full container h-full mx-auto mt-10 max-md:mt-2 pt-1 pb-5 max-sm:pb-16 ">
          <div className="flex max-md:flex-col justify-end items-center">
            <div className="p-5 w-8/10 max-sm:w-full bg-[rgba(243,243,243,0.03)] backdrop-blur-2xl max-sm:text-center border border-white text-center rounded-2xl">
              <p className="max-sm:p-2.5 text-white max-sm:text-sm ">
                "Se reconstruo o que destruí, provo que sou transgressor. Pois,
                por meio da Lei eu morri para a Lei, a fim de viver para Deus.
                Fui crucificado com Cristo. Assim, já não sou eu quem vive, mas
                Cristo vive em mim. A vida que agora vivo no corpo, vivo-a pela
                fé no filho de Deus, que me amou e se entregou por mim."
              </p>
              <span className="text-white">Gálatas 2:18-20</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Navbar />
    </div>
  );
};

export default Home;
