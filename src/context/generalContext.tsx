import React from "react";

import {
  PropsContext,
  PropsState,
  LayoutProps,
  PropsAction,
  Types,
} from "../types/generalContext";

const INITIAL_STATE: PropsContext = {
  currentPage: 1,
  itemsPage: 10,
  totalItems: 100,
  searchFilters: {},
  pageDetails: {},
};

const GeneralContext = React.createContext({
  ...INITIAL_STATE,
});

const GeneralReducer = (state: PropsState, action: PropsAction) => {
  const { type, payload } = action;

  /* eslint-disable */
  switch (type) {
    case Types.SET_CURRENT_PAGE:
      const currentPage = (state.currentPage = payload);

      return {
        ...state,
        value: currentPage,
      };
    case Types.SET_TOTAL_ITEMS:
      const totalItems = (state.totalItems = payload);

      return {
        ...state,
        value: totalItems,
      };
    case Types.SET_ITEMS_PAGE:
      const itemsPage = (state.itemsPage = payload);

      return {
        ...state,
        value: itemsPage,
      };
    case Types.SET_SEARCH_FILTERS:
      const searchFilters = (state.searchFilters = payload);

      return {
        ...state,
        value: searchFilters,
      };
    case Types.SET_PAGE_DETAILS:
      const pageDetails = (state.pageDetails = payload);

      return {
        ...state,
        value: pageDetails,
      };
    default:
      return state;
  }
  /* eslint-enable */
};

const GeneralProvider = (props: LayoutProps) => {
  const [state, dispatch] = React.useReducer(GeneralReducer, INITIAL_STATE);

  const setCurrentPage = (atualPage: number | null) => {
    dispatch({
      type: Types.SET_CURRENT_PAGE,
      payload: atualPage,
    });
  };

  const setTotalItems = (totalPage: number) => {
    dispatch({
      type: Types.SET_TOTAL_ITEMS,
      payload: totalPage,
    });
  };

  const setItemsPage = (itemsPage: number) => {
    dispatch({
      type: Types.SET_ITEMS_PAGE,
      payload: itemsPage,
    });
  };

  const setSearchFilters = (searchFilters: any) => {
    dispatch({
      type: Types.SET_SEARCH_FILTERS,
      payload: searchFilters,
    });
  };

  const setPageDetails = (pageDetails: any) => {
    dispatch({
      type: Types.SET_PAGE_DETAILS,
      payload: pageDetails,
    });
  };

  return (
    <GeneralContext.Provider
      value={{
        searchFilters: state.searchFilters,
        itemsPage: state.itemsPage,
        currentPage: state.currentPage,
        totalItems: state.totalItems,
        pageDetails: state.pageDetails,
        setSearchFilters,
        setCurrentPage,
        setTotalItems,
        setItemsPage,
        setPageDetails,
      }}
      {...props}
    />
  );
};

export { GeneralContext, GeneralProvider };
