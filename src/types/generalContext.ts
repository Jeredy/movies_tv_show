import { CategoryModel } from "../models/category";
import { MoviesModel } from "../models/movies";
import { CategoryProps } from "./category";
import { MoviesProps } from "./movies";

export interface PropsContext {
  currentPage: number;
  itemsPage: number;
  totalItems: number;
  searchFilters: any;
  pageDetails: any;
  showFilter: boolean;
  editData: any;
  movies: MoviesProps[];
  categories: CategoryModel[];
  setSearchFilters?: (searchFilters: any) => void;
  setCurrentPage?: (atualPage: number) => void;
  setTotalItems?: (totalPage: number) => void;
  setItemsPage?: (itemsPage: number) => void;
  setPageDetails?: (pageDetails: any) => void;
  setShowFilter?: (showFilter: boolean) => void;
  setEditData?: (editData: any) => void;
  setMovies?: (movies: MoviesModel) => void;
  setCategory?: (category: CategoryModel) => void;
}

export interface PropsState {
  currentPage: number;
  itemsPage: number;
  totalItems: number;
  searchFilters: any;
  pageDetails: any;
  showFilter: boolean;
  editData: any;
  movies: MoviesProps[];
  categories: CategoryModel[];
}

export interface PropsAction {
  type: Types;
  payload?: any;
}

export enum Types {
  SET_CURRENT_PAGE = "SET_CURRENT_PAGE",
  SET_TOTAL_ITEMS = "SET_TOTAL_ITEMS",
  SET_ITEMS_PAGE = "SET_ITEMS_PAGE",
  SET_SEARCH_FILTERS = "SET_SEARCH_FILTERS",
  SET_PAGE_DETAILS = "SET_PAGE_DETAILS",
  SET_SHOW_FILTER = "SET_SHOW_FILTER",
  SET_EDIT_DATA = "SET_EDIT_DATA",
  SET_MOVIES = "SET_MOVIES",
  SET_CATEGORY = "SET_CATEGORY",
}

export interface LayoutProps {
  children: React.ReactNode;
}
