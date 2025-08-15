import LogoCen from "../../public/Logo-cen-1.png";

const Footer = () => {
  return (
    <div className="flex max-sm:hidden items-center justify-center w-full bg-[rgba(0,0,0,0.35)] mt-5 border-t">
      <div className="w-14/15 flex flex-col items-center gap-5 justify-center py-7">
        <div className="w-1/3 flex justify-center">
          <img src={LogoCen} alt="" className="w-[200px]" />
        </div>
        <div className="w-1/3 menu flex justify-center items-center max-md:pr-5">
          <ul className="flex gap-5 text-background">
            <li>
              <a
                href=""
                className="hover:text-violet-700 active:text-violet-600"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href=""
                className="hover:text-violet-700 active:text-violet-600"
              >
                História
              </a>
            </li>
            <li>
              <a
                href=""
                className="hover:text-violet-700 active:text-violet-600"
              >
                Contato
              </a>
            </li>
            <li>
              <a
                href=""
                className="hover:text-violet-700 active:text-violet-600"
              >
                Calendário
              </a>
            </li>
          </ul>
        </div>
        <div className="w-1/3 text-white text-center">
          <span>Cooyright@ 2025 Davi Curty. All Rignts Reserved</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
