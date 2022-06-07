import React from "react";
import { categoryData } from "../mockup/category";
import { moviesData } from "../mockup/movies";
import { tvShowData } from "../mockup/tv_show";
import { CategoryModel } from "../models/category";
import { StreamingModel } from "../models/streaming";

import {
  PropsContext,
  PropsState,
  LayoutProps,
  PropsAction,
  Types,
} from "../types/generalContext";

const INITIAL_STATE: PropsContext = {
  pageDetails: {},
  editData: {},
  movies: moviesData,
  tvShows: tvShowData,
  categories: categoryData,
};

const GeneralContext = React.createContext({
  ...INITIAL_STATE,
});

const GeneralReducer = (state: PropsState, action: PropsAction) => {
  const { type, payload } = action;

  /* eslint-disable */
  switch (type) {
    case Types.SET_PAGE_DETAILS:
      const pageDetails = (state.pageDetails = payload);

      return {
        ...state,
        value: pageDetails,
      };

    case Types.SET_EDIT_DATA:
      const editData = (state.editData = payload);

      return {
        ...state,
        value: editData,
      };
    case Types.ADD_MOVIE:
      const moviesAfterAdded =
        payload.route.search("movies") > -1 ? state.movies : state.tvShows;

      if (
        moviesAfterAdded.findIndex(
          (streaming) => streaming.name === payload.movie.name
        ) === -1
      ) {
        moviesAfterAdded.splice(0, 0, payload.movie);
      }

      return {
        ...state,
        value: moviesAfterAdded,
      };
    case Types.DELETE_MOVIE:
      const moviesAfterDeleted =
        payload.route.search("movies") > -1 ? state.movies : state.tvShows;

      if (
        moviesAfterDeleted.findIndex(
          (streaming) => streaming.id === payload.id
        ) > -1
      ) {
        moviesAfterDeleted.splice(
          moviesAfterDeleted.findIndex(
            (streaming) => streaming.id === payload.id
          ),
          1
        );
      }

      return {
        ...state,
        value: moviesAfterDeleted,
      };
    case Types.EDIT_MOVIE:
      const moviesAfterEdited =
        payload.route.search("movies") > -1 ? state.movies : state.tvShows;

      if (
        moviesAfterEdited.findIndex(
          (streaming) => streaming.id === payload.movie.id
        ) > -1
      ) {
        moviesAfterEdited.splice(
          moviesAfterEdited.findIndex(
            (streaming) => streaming.id === payload.movie.id
          ),
          1,
          payload.movie
        );
      }

      return {
        ...state,
        value: moviesAfterEdited,
      };
    case Types.ADD_CATEGORY:
      const categoriesAfterAdded = state.categories;
      console.log(payload);
      if (
        categoriesAfterAdded.findIndex(
          (category) => category.title === payload.title
        ) === -1
      ) {
        categoriesAfterAdded.splice(0, 0, payload);
      }

      return {
        ...state,
        value: categoriesAfterAdded,
      };
    case Types.EDIT_CATEGORY:
      const categoriesAfterEdited = state.categories;

      if (
        categoriesAfterEdited.findIndex(
          (category) => category.id === payload.id
        ) > -1
      ) {
        categoriesAfterEdited.splice(
          categoriesAfterEdited.findIndex(
            (category) => category.id === payload.id
          ),
          1,
          payload
        );
      }

      return {
        ...state,
        value: categoriesAfterEdited,
      };
    case Types.DELETE_CATEGORY:
      const categoriesAfterDeleted = state.categories;

      if (
        categoriesAfterDeleted.findIndex(
          (category) => category.id === payload
        ) > -1
      ) {
        categoriesAfterDeleted.splice(
          categoriesAfterDeleted.findIndex(
            (category) => category.id === payload
          ),
          1
        );
      }
      return {
        ...state,
        value: categoriesAfterDeleted,
      };
    default:
      return state;
  }
  /* eslint-enable */
};

const GeneralProvider = (props: LayoutProps) => {
  const [state, dispatch] = React.useReducer(GeneralReducer, INITIAL_STATE);

  const setPageDetails = (pageDetails: any) => {
    dispatch({
      type: Types.SET_PAGE_DETAILS,
      payload: pageDetails,
    });
  };

  const setEditData = (editData: any) => {
    dispatch({
      type: Types.SET_EDIT_DATA,
      payload: editData,
    });
  };

  const addMovie = (movie: StreamingModel, route: string) => {
    dispatch({
      type: Types.ADD_MOVIE,
      payload: {
        movie,
        route,
      },
    });
  };

  const deleteMovie = (id: number, route: string) => {
    dispatch({
      type: Types.DELETE_MOVIE,
      payload: {
        id,
        route,
      },
    });
  };

  const editMovie = (movie: StreamingModel, route: string) => {
    dispatch({
      type: Types.EDIT_MOVIE,
      payload: {
        movie,
        route,
      },
    });
  };

  const addCategory = (category: CategoryModel) => {
    dispatch({
      type: Types.ADD_CATEGORY,
      payload: category,
    });
  };

  const editCategory = (category: CategoryModel) => {
    dispatch({
      type: Types.EDIT_CATEGORY,
      payload: category,
    });
  };

  const deleteCategory = (id: string) => {
    dispatch({
      type: Types.DELETE_CATEGORY,
      payload: id,
    });
  };

  return (
    <GeneralContext.Provider
      value={{
        pageDetails: state.pageDetails,
        editData: state.editData,
        movies: state.movies,
        tvShows: state.tvShows,
        categories: state.categories,
        setPageDetails,
        setEditData,
        addMovie,
        deleteMovie,
        editMovie,
        addCategory,
        editCategory,
        deleteCategory,
      }}
      {...props}
    />
  );
};

export { GeneralContext, GeneralProvider };
