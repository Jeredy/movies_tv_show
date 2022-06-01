import { CategoryModel } from "../models/category";
import { StreamingModel } from "../models/streaming";

export interface PropsContext {
  pageDetails: any;
  editData: any;
  movies: StreamingModel[];
  tvShows: StreamingModel[];
  categories: CategoryModel[];
  setPageDetails?: (pageDetails: any) => void;
  setEditData?: (editData: any) => void;
  addMovie?: (movies: StreamingModel, route: string) => void;
  setCategory?: (category: CategoryModel) => void;
  deleteMovie?: (id: number) => void;
  editMovie?: (data: StreamingModel) => void;
}

export interface PropsState {
  pageDetails: any;
  editData: any;
  movies: StreamingModel[];
  tvShows: StreamingModel[];
  categories: CategoryModel[];
}

export interface PropsAction {
  type: Types;
  payload?: any;
}

export enum Types {
  SET_PAGE_DETAILS = "SET_PAGE_DETAILS",
  SET_EDIT_DATA = "SET_EDIT_DATA",
  ADD_MOVIE = "ADD_MOVIE",
  SET_CATEGORY = "SET_CATEGORY",
  DELETE_MOVIE = "DELETE_MOVIE",
  EDIT_MOVIE = "EDIT_MOVIE",
}

export interface LayoutProps {
  children: React.ReactNode;
}
