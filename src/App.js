import "./App.css";
import HomePart from "./Components/HomeComponents/HomePart/HomePart";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
	return (
		<Router>
			<HomePart />
		</Router>
	);
}

export default App;
