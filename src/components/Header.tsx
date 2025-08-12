import { InteractiveHoverButton } from "./magicui/interactive-hover-button";
import "./Header.css";
import { Instagram } from "lucide-react";

const Header = () => {
  return (
    <div className="w-full py-5 px-5">
      <div className="container mx-auto flex">
        <div className="w-1/5 flex justify-start gap-[20%]">
          <div>
            <img
              src="/Logo-cen-1.png"
              alt=""
              style={{
                width: "80px",
                cursor: "pointer",
              }}
            />
          </div>
        </div>
        <div className="w-3/5 menu flex justify-center items-center">
          <ul className="flex gap-5 text-background">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">História</a>
            </li>
            <li>
              <a href="">Contato</a>
            </li>
            <li>
              <a href="">Calendário</a>
            </li>
          </ul>
        </div>
        <div className="w-1/5 flex items-center justify-end gap-5">
          <a href="https://www.instagram.com/missaocristoemnos?igsh=MWtxNG92MTZtbm5haA==">
            <Instagram
              className="cursor-pointer text-white md:w-6 "
              style={{ width: "24px" }}
            />
          </a>
          <img
            src="/Vector.svg"
            alt=""
            style={{ width: "24px" }}
            className="cursor-pointer"
          />
          <InteractiveHoverButton>Instituto</InteractiveHoverButton>
        </div>
      </div>
    </div>
  );
};

export default Header;
