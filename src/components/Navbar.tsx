import { Hourglass, House, PaperPlaneTilt } from "@phosphor-icons/react";
import { CalendarDays } from "lucide-react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar max-sm:flex justify-between items-center fixed hidden bottom-6 left-1/2 transform-[translate(-50%)] w-9/10 px-8 py-1 z-30 bg-[rgba(181,0,253,0.06)] backdrop-blur-xl rounded-4xl  ">
      <a className="flex flex-col justify-center items-center cursor-pointer hover:text-violet-600">
        <span>
          <House className="text-white text-xl active:text-violet-600" />
        </span>
        <span className="text-white font-light text-xs tracking-normal active:text-violet-600">
          Home
        </span>
      </a>
      <a className="flex flex-col justify-center items-center cursor-pointer">
        <Hourglass className="text-white text-xl active:text-violet-600" />
        <span className="text-white font-light text-xs  tracking-normal active:text-violet-600">
          História
        </span>
      </a>
      <a className="flex flex-col justify-center items-center max-xs cursor-pointer">
        <PaperPlaneTilt className="text-white text-xl active:text-violet-600" />
        <span className="text-white font-light text-xs  tracking-normal active:text-violet-600">
          Contato
        </span>
      </a>
      <a className="flex flex-col justify-center items-center cursor-pointer">
        <CalendarDays
          className="text-white text-xl active:text-violet-600"
          width={20}
        />
        <span className="text-white font-light text-xs  tracking-normal active:text-violet-600">
          Calendário
        </span>
      </a>
    </div>
  );
};

export default Navbar;
