import { useEffect, useState } from "react";
import { useTheme } from "./theme-provider";

export const Themes = () => {
	const { theme } = useTheme();
	const [effectiveTheme, setEffectiveTheme] = useState<string>(theme);

	useEffect(() => {
		if (theme === "system") {
			const mq = window.matchMedia("(prefers-color-scheme: dark)");
			const update = () => setEffectiveTheme(mq.matches ? "dark" : "light");
			update();
			mq.addEventListener("change", update);
			return () => mq.removeEventListener("change", update);
		}
		setEffectiveTheme(theme);
	}, [theme]);

	return { effectiveTheme };
};
