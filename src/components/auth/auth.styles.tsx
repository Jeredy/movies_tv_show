import styled from "styled-components";
import { Link } from "react-router-dom";

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
	width: 380px;
	background-color: #fff;
	padding: 46px;
	border-radius: 20px;
`;

export const LogoContainer = styled.div`
	display: flex;
	margin-bottom: 43px;
`;

export const Logo = styled.img`
	width: 289px;
	height: 97px;
`;

export const InputLink = styled(Link)`
	margin-top: 23px;
	text-transform: capitalize;
	color: #3b4ba2;
`;

export const MainLabel = styled.p`
	font-weight: 700;
	line-height: 19px;
	color: #4b4b4b;
	margin-bottom: 23px;
	margin-right: auto;
`;

export const SubLabel = styled.p`
	font-size: 14px;
	font-weight: 400;
	text-align: left;
	color: #4b4b4b;
	margin-bottom: 10px;
	margin-right: auto;
`;

export const TextError = styled.p`
	font-size: 11px;
	color: #f31;
	margin-bottom: 10px;
`;
