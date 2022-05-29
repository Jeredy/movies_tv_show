import React from "react";
import { categoryData } from "../mockup/category";
import { moviesData } from "../mockup/movies";
import { CategoryModel } from "../models/category";
import { MoviesModel } from "../models/movies";

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
  showFilter: true,
  editData: {},
  movies: moviesData,
  categories: categoryData,
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
    case Types.SET_SHOW_FILTER:
      const showFilter = (state.showFilter = payload);

      return {
        ...state,
        value: showFilter,
      };
    case Types.SET_EDIT_DATA:
      const editData = (state.editData = payload);

      return {
        ...state,
        value: editData,
      };
    case Types.SET_MOVIES:
      const moviesAfterAdded = state.movies;

      moviesAfterAdded.map((element) => {
        if (element.title === payload.category) {
          if (!element.data.find((movie) => movie.name === payload.name)) {
            return element.data.splice(0, 0, payload);
          }
        }
      });

      return {
        ...state,
        value: moviesAfterAdded,
      };
    case Types.DELETE_MOVIE:
      const moviesAfterDeleted = state.movies;

      moviesAfterDeleted.map((element) => {
        if (element.title === payload.category) {
          if (element.data.find((movie) => movie.id === payload.id)) {
            return element.data.splice(
              element.data.findIndex((movie) => movie.id === payload.id),
              1
            );
          }
        }
      });

      return {
        ...state,
        value: moviesAfterDeleted,
      };
    case Types.EDIT_MOVIE:
      const moviesAfterEdited = state.movies;

      moviesAfterEdited.map((element) => {
        if (element.title === payload.category) {
          if (element.data.find((movie) => movie.id === payload.id)) {
            return element.data.splice(
              element.data.findIndex((movie) => movie.id === payload.id),
              1,
              payload
            );
          }
        }
      });

      return {
        ...state,
        value: moviesAfterEdited,
      };
    case Types.SET_CATEGORY:
      // const categories = (state.categories = payload);

      return {
        ...state,
        // value: categories,
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

  const setShowFilter = (showFilter: boolean) => {
    dispatch({
      type: Types.SET_SHOW_FILTER,
      payload: showFilter,
    });
  };

  const setEditData = (editData: any) => {
    dispatch({
      type: Types.SET_EDIT_DATA,
      payload: editData,
    });
  };

  const setMovies = (movies: MoviesModel) => {
    dispatch({
      type: Types.SET_MOVIES,
      payload: movies,
    });
  };

  const setCategory = (category: CategoryModel) => {
    dispatch({
      type: Types.SET_CATEGORY,
      payload: category,
    });
  };

  const deleteMovie = (id: number, category: string) => {
    dispatch({
      type: Types.DELETE_MOVIE,
      payload: { id, category },
    });
  };

  const editMovie = (data: MoviesModel) => {
    dispatch({
      type: Types.EDIT_MOVIE,
      payload: data,
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
        showFilter: state.showFilter,
        editData: state.editData,
        movies: state.movies,
        categories: state.categories,
        setSearchFilters,
        setCurrentPage,
        setTotalItems,
        setItemsPage,
        setPageDetails,
        setShowFilter,
        setEditData,
        setMovies,
        setCategory,
        deleteMovie,
        editMovie,
      }}
      {...props}
    />
  );
};

export { GeneralContext, GeneralProvider };
