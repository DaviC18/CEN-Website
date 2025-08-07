// biome-ignore assist/source/organizeImports: necessery
import { MoveRight } from "lucide-react";
import { Button } from "./ui/button";
import "./header.css";
import { ModeToggle } from "./mode-toggle";
import LogoLight from "../assets/Logo-cen-light.png";
import LogoDark from "../assets/Logo-cen.png";
import { Themes } from "./themes";

const Header = () => {
	const { effectiveTheme } = Themes();

	const themes = effectiveTheme === "dark" ? LogoDark : LogoLight;

	const themesClass =
		effectiveTheme === "dark"
			? "hover:text- flex cursor-pointer items-center justify-between rounded-full border-2 border-sidebar-foreground bg-transparent font-semibold text-[17px] text-sidebar-foreground outline-0 hover:border-primary hover:bg-background hover:text-primary focus-visible:outline-none focus-visible:ring-muted"
			: "hover:text- flex cursor-pointer items-center justify-between rounded-full border-2 border-sidebar-foreground bg-transparent font-semibold text-[17px] text-sidebar-foreground outline-0 hover:border-black hover:bg-foreground hover:text-white focus-visible:outline-none focus-visible:ring-muted";

	return (
		<div className="fixed z-10 flex w-full items-center justify-between border-sidebar-foreground border-b-2 bg-background pt-2 pr-[2%] pb-2 pl-[2%] shadow-sm shadow-foreground backdrop-blur-sm">
			<div className="w-1/5">
				{/** biome-ignore lint/performance/noImgElement: necessery */}
				{/** biome-ignore assist/source/useSortedAttributes: necessery */}
				<img
					src={themes}
					alt=""
					style={{
						width: "70px",
					}}
				/>
			</div>
			<div className="w-3/5">
				<div className="menu">
					<ul className="flex justify-center gap-7 text-primary-foreground">
						<li>
							<span className=" relative inline-block cursor-pointer font-medium text-[17px] text-card-foreground no-underline after:absolute after:bottom-[-2px] after:left-0 after:h-[2.5px] after:w-0 after:bg-sidebar-primary after:transition-all after:duration-300 after:content-[''] hover:after:w-full">
								Home
							</span>
						</li>
						<li>
							<span className=" relative inline-block cursor-pointer font-medium text-[17px] text-card-foreground no-underline after:absolute after:bottom-[-2px] after:left-0 after:h-[2.5px] after:w-0 after:bg-sidebar-primary after:transition-all after:duration-300 after:content-[''] hover:after:w-full">
								Historia
							</span>
						</li>
						<li>
							<span className=" relative inline-block cursor-pointer font-medium text-[17px] text-card-foreground no-underline after:absolute after:bottom-[-2px] after:left-0 after:h-[2.5px] after:w-0 after:bg-sidebar-primary after:transition-all after:duration-300 after:content-[''] hover:after:w-full">
								Calendario
							</span>
						</li>
						<li>
							<span className=" relative inline-block cursor-pointer font-medium text-[17px] text-card-foreground no-underline after:absolute after:bottom-[-2px] after:left-0 after:h-[2.5px] after:w-0 after:bg-sidebar-primary after:transition-all after:duration-300 after:content-[''] hover:after:w-full">
								Contato
							</span>
						</li>
					</ul>
				</div>
			</div>
			<div className="flex w-1/5 justify-end gap-4">
				<ModeToggle />
				<Button className={themesClass}>
					<span className="mb-[1px]">Instituto</span> <MoveRight size={20} />
				</Button>
			</div>
		</div>
	);
};

export default Header;
