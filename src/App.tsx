import * as React from "react";
import { Routes, Route } from "react-router-dom";

import { AcessAuth, RequireAuth } from "./auth/RouteAuth";
import { Provider } from "./context/authContext";
import GlobalStyles from "./GlobalStyles";
import Signin from "./components/auth/signIn/signIn.component";
import HomePage from "./pages/home/home.page";
import ForgotPassword from "./components/auth/forgotPassword/forgotPassword.component";
import DefineNewPassword from "./components/auth/defineNewPassword/defineNewPassword.component";

export const App: React.FC = () => {
	return (
		<Provider>
			<GlobalStyles />
			<Routes>
				<Route
					path="/"
					element={
						<AcessAuth>
							<Signin />
						</AcessAuth>
					}
				/>
				<Route
					path="/forgetPasswordStudent"
					element={
						<AcessAuth>
							<ForgotPassword />
						</AcessAuth>
					}
				/>
				<Route
					path="/defineNewPassword"
					element={
						<AcessAuth>
							<DefineNewPassword />
						</AcessAuth>
					}
				/>
				<Route
					path="/home/*"
					element={
						<RequireAuth>
							<HomePage />
						</RequireAuth>
					}
				/>
			</Routes>
		</Provider>
	);
};

export default App;
