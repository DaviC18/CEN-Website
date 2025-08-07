<<<<<<< HEAD
import { Themes } from "@/components/themes";
import LogoLight from "../assets/Logo-cen-light.png";
import LogoDark from "../assets/Logo-cen.png";

const Home = () => {

    const { effectiveTheme} = Themes()

    const themes = effectiveTheme === "dark" ? LogoDark : LogoLight;

    return ( 
        <div className="container ml-auto mr-auto w-full h-[80dvh] flex items-center justify-center relative z">
            <div className=" absolute"></div>
            <div className="flex flex items-center justify-center">
                <img src={themes} alt="" style={{
                    width: "60%"
                }}/>
            </div>
        </div>
     );
}
 
export default Home;
=======
import { Themes } from "@/components/themes";
import LogoLight from "../assets/Logo-cen-light.png";
import LogoDark from "../assets/Logo-cen.png";
import "./Home.css";

const Home = () => {
  const { effectiveTheme } = Themes();

  const themes = effectiveTheme === "dark" ? LogoDark : LogoLight;

  return (
    <div className="container ml-auto mr-auto w-full h-full flex items-start justify-center relative">
      <div className="circle-1 z-0"></div>
      <div className="flex flex-col items-center justify-center gap-10 h-[70%] relative z-10 mt-18">
        <img
          src={themes}
          alt=""
          style={{
            width: "700px",
          }}
        />
        <p className="max-w-3xl text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          pellentesque vestibulum viverra. Curabitur nec tortor sit amet urna
          cursus eleifend.
        </p>
      </div>
    </div>
  );
};

export default Home;
>>>>>>> a13b37a (finishing the header)
