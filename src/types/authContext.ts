import { AdminModel } from "../models/AdminModel";

export interface PropsContext {
	authenticated: boolean;
	admin: unknown;
	passwordToken: string;
	setAdmin?: (admin: AdminModel | null) => void;
	setAuthenticated?: (value: boolean) => void;
	setAuthToken?: (token: string) => void;
	setPasswordToken?: (token: string) => void;
}

export interface PropsState {
	authenticated: boolean;
	admin: unknown;
	passwordToken: string;
}

export interface PropsAction {
	type: Types;
	payload?: any;
}

export enum Types {
	SET_AUTHENTICATION = "SET_AUTHENTICATION",
	SET_ADMIN = "SET_ADMIN",
	SET_PASSWORD_TOKEN = "SET_PASSWORD_TOKEN",
}

export interface LayoutProps {
	children: React.ReactNode;
}
