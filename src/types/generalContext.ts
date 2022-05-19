export interface PropsContext {
  currentPage: number;
  itemsPage: number;
  totalItems: number;
  searchFilters: any;
  pageDetails: any;
  setSearchFilters?: (searchFilters: any) => void;
  setCurrentPage?: (atualPage: number) => void;
  setTotalItems?: (totalPage: number) => void;
  setItemsPage?: (itemsPage: number) => void;
  setPageDetails?: (pageDetails: any) => void;
}

export interface PropsState {
  currentPage: number;
  itemsPage: number;
  totalItems: number;
  searchFilters: any;
  pageDetails: any;
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
}

export interface LayoutProps {
  children: React.ReactNode;
}
