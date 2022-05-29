import styled from "styled-components";
import { ReactComponent as Lock } from "../../assets/icons/lock.svg";
import { ReactComponent as Email } from "../../assets/icons/email.svg";

import { Link } from "react-router-dom";
import { w, ww } from "../../styles/responsive";

export const AuthContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100vh;
	width: 100vw;
	background: linear-gradient(270deg, #3b4ba2 0%, #4f66e2 100%);
`;

export const AuthBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: ${ww(216)}px;
	background-color: #fff;
	padding: ${ww(26)}px;
	border-radius: ${ww(11)}px;
`;

export const LogoContainer = styled.div`
	display: flex;
	margin-bottom: ${ww(24)}px;
`;

export const Logo = styled.img`
	width: ${ww(165)}px;
	height: ${ww(55)}px;
`;

export const InputLink = styled(Link)`
	font-size: ${ww(9)}px;
	margin-top: ${ww(11)}px;
	text-transform: capitalize;
	color: #3b4ba2;
`;

export const MainLabel = styled.p`
	font-size: ${ww(9)}px;
	font-weight: 700;
	line-height: ${ww(11)}px;
	color: #4b4b4b;
	margin-bottom: ${ww(11)}px;
	margin-right: auto;
`;

export const SubLabel = styled.p`
	font-size: ${ww(8)}px;
	font-weight: 400;
	text-align: left;
	color: #4b4b4b;
	margin-bottom: ${ww(6)}px;
	margin-right: auto;
`;

export const TextError = styled.p`
	font-size: ${ww(6)}px;
	color: #f31;
	margin-bottom: ${ww(6)}px;
`;

export const EmailIcon = styled(Email).attrs({
	width: w(9),
	height: w(11),
})``;

export const LockIcon = styled(Lock).attrs({
	width: w(9),
	height: w(11),
})``;
