import React from "react";
import { AdminModel } from "../models/AdminModel";

import {
  PropsContext,
  PropsState,
  LayoutProps,
  PropsAction,
  Types,
} from "../types/authContext";

const INITIAL_STATE: PropsContext = {
  admin: null,
  authenticated: false,
  passwordToken: "",
};

const Context = React.createContext({
  ...INITIAL_STATE,
});

const Reducer = (state: PropsState, action: PropsAction) => {
  const { type, payload } = action;

  /* eslint-disable */
  switch (type) {
    case Types.SET_AUTHENTICATION:
      const authenticated = (state.authenticated = payload!);

      localStorage.setItem("@authenticated", JSON.stringify(payload));

      return {
        ...state,
        value: authenticated,
      };
    case Types.SET_ADMIN:
      const admin = (state.admin = payload);

      localStorage.setItem("@admin", JSON.stringify(admin));

      return {
        ...state,
        value: admin,
      };
    case Types.SET_PASSWORD_TOKEN:
      const token = (state.passwordToken = payload);

      return {
        ...state,
        value: token,
      };
    default:
      return state;
  }
  /* eslint-enable */
};

const Provider = (props: LayoutProps) => {
  const [state, dispatch] = React.useReducer(Reducer, INITIAL_STATE);

  React.useEffect(() => {
    const isAuthenticated = localStorage.getItem("@authenticated");
    if (isAuthenticated === "true") setAuthenticated(true);

    const admin = JSON.parse(localStorage.getItem("@admin")!);

    if (admin) {
      setAdmin(admin);
    }
  }, []);

  const setAuthenticated = (value: boolean) => {
    dispatch({
      type: Types.SET_AUTHENTICATION,
      payload: value,
    });
  };

  const setAdmin = (admin: AdminModel | null) => {
    dispatch({
      type: Types.SET_ADMIN,
      payload: admin,
    });
  };

  const setPasswordToken = (token: string) => {
    dispatch({
      type: Types.SET_PASSWORD_TOKEN,
      payload: token,
    });
  };

  return (
    <Context.Provider
      value={{
        admin: state.admin,
        authenticated: state.authenticated,
        passwordToken: state.passwordToken,
        setAuthenticated,
        setAdmin,
        setPasswordToken,
      }}
      {...props}
    />
  );
};

export { Context, Provider };
