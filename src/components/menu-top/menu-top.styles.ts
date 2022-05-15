import styled, { css } from "styled-components/macro";
import { ReactComponent as Greeko } from "../../assets/icons/logo.svg";
import { ReactComponent as Settings } from "../../assets/icons/settings@1.svg";
import { ReactComponent as Logout } from "../../assets/icons/log_out.svg";

const iconStyle = css`
	&:hover {
		cursor: pointer;
	}
`;

export const TopContainer = styled.div`
	display: flex;
	align-items: center;
	height: 124px;
	width: 225px;
	background: linear-gradient(270deg, #3b4ba2 0%, #4f66e2 100%);
	padding: 17px;
`;

export const Logo = styled(Greeko)`
	margin-bottom: 17px;
`;

export const TopLogoContainer = styled.div`
	display: flex;
	flex: 4;
	height: 100%;
	flex-direction: column;
	justify-content: space-between;
`;

export const TopText = styled.p`
    color: #fff;
    font-size: 16px
    font-weight: 700;
    text-transform: capitalize;
`;

export const ActionsContainer = styled.div`
	display: flex;
	flex: 1;
	justify-content: center;
	margin-top: auto;
`;

export const SettingsIcon = styled(Settings)`
	${iconStyle}
`;

export const LogoutIcon = styled(Logout)`
	${iconStyle}
	margin-left: 11px;
`;
