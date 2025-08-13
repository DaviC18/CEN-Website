import { InteractiveHoverButton } from "./magicui/interactive-hover-button";
import "./Header.css";
import { Instagram } from "lucide-react";

const Header = () => {
  return (
    <div className="w-full py-5 ">
      <div className="px-3">
        <div className="container mx-auto bg-[rgba(255,255,255,0.08)] px-5 py-2 rounded-3xl w-full flex">
          <div className="w-1/5 max-sm:w-1/2 flex justify-start gap-5">
            <label htmlFor="check" className="hidden max-sm:flex">
              <input type="checkbox" id="check" />
              <span></span>
              <span></span>
              <span></span>
            </label>
            <img
              src="/Logo-cen-1.png"
              alt=""
              style={{
                width: "80px",
                cursor: "pointer",
              }}
              className="md:min-w-24"
            />
          </div>
          <div className="w-3/5 max-sm:hidden flex justify-center items-center">
            <div className="menu flex justify-center items-center max-md:pr-5">
              <ul className="flex gap-5 text-background">
                <li>
                  <a href="" className="hover:text-violet-700">
                    Home
                  </a>
                </li>
                <li>
                  <a href="" className="hover:text-violet-700">
                    História
                  </a>
                </li>
                <li>
                  <a href="" className="hover:text-violet-700">
                    Contato
                  </a>
                </li>
                <li>
                  <a href="" className="hover:text-violet-700">
                    Calendário
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-1/5 max-sm:w-1/2 flex items-center justify-end gap-5 max-lg:gap-0">
            <a href="https://www.instagram.com/missaocristoemnos?igsh=MWtxNG92MTZtbm5haA==">
              <Instagram
                className="cursor-pointer md:w-6 hover:text-violet-600 max-lg:hidden text-white duration-300 hover:scale-110 md"
                style={{ width: "24px" }}
              />
            </a>
            <a href="">
              <img
                src="/Vector.svg"
                alt=""
                style={{ width: "24px" }}
                className="cursor-pointer md:min-w-6 max-lg:hidden duration-300 hover:scale-110"
              />
            </a>
            <InteractiveHoverButton>Instituto</InteractiveHoverButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
