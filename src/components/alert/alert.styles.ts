import styled from "styled-components";

import { ReactComponent as Check } from "../../assets/icons/check.svg";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background: #000000bb;
	height: 100vh;
	width: 100vw;
	position: absolute;
	top: 0;
	left: 0;
`;

export const Text = styled.p`
	font-size: 14px;
	color: #4b4b4b;
	margin-bottom: 36px;
	text-align: center;
`;

export const Box = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border: 1px solid #64bc47;
	background: #ffffff;
	border-radius: 5px;
	width: 318px;
	padding: 12px 35px 24px 35px;
`;

export const IconContainer = styled.div`
	margin-bottom: 17px;
`;

export const Icon = styled(Check)``;
