import styled from "styled-components";
import { ReactComponent as Lock } from "../../../assets/icons/lock.svg";
import { ReactComponent as Email } from "../../../assets/icons/email.svg";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const InputContainer = styled.div`
	margin-bottom: 29px;
`;

export const Form = styled.form``;

export const EmailIcon = styled(Email)``;

export const LockIcon = styled(Lock)``;
