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