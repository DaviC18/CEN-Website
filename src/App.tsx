import "./App.css";
import Header from "./components/header";
import { ThemeProvider } from "./components/theme-provider";
import Home from "./pages/Home";

const App = () => {
	return (
		<div className="h-screen w-full bg-background">
			<ThemeProvider>
				<Header />
				<Home />
			</ThemeProvider>
		</div>
	);
};

export default App;
