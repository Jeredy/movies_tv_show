import React from "react";
import { Context } from "../../context/authContext";

import {
	TopContainer,
	TopLogoContainer,
	ActionsContainer,
	TopText,
	Logo,
	SettingsIcon,
	LogoutIcon,
} from "./menu-top.styles";

const MenuTop: React.FC = () => {
	const { setAdmin, setAuthenticated } = React.useContext(Context);

	const logout = () => {
		setAuthenticated?.(false);
		setAdmin?.(null);
	};

	return (
		<TopContainer>
			<TopLogoContainer>
				<Logo />
				<TopText>Andre rodrigues</TopText>
			</TopLogoContainer>
			<ActionsContainer>
				<SettingsIcon />
				<LogoutIcon onClick={logout} />
			</ActionsContainer>
		</TopContainer>
	);
};

export default MenuTop;
