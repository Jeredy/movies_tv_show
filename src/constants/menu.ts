import styled, { css } from "styled-components/macro";

import { ReactComponent as Movies } from "../assets/icons/movies.svg";
import { ReactComponent as TVShow } from "../assets/icons/tv_show.svg";
import { ReactComponent as Categories } from "../assets/icons/category.svg";

import { MenuIconProps } from "../types/menu";

const iconStyle = css<MenuIconProps>`
  & path {
    fill: ${({ color }) => (color ? color : "#4b4b4b")};
  }
`;

const MoviesIcon = styled(Movies)<MenuIconProps>`
  ${iconStyle}
`;

const TVShowIcon = styled(TVShow)<MenuIconProps>`
  ${iconStyle}
`;

const CategoriesIcon = styled(Categories)<MenuIconProps>`
  ${iconStyle}
`;
export const menuData = [
  {
    id: 1,
    title: "Movies",
    data: [
      { id: 10, title: "Movies", icon: MoviesIcon, link: "movies" },
      { id: 11, title: "Add Movie", icon: MoviesIcon },
    ],
  },
  {
    id: 2,
    title: "TV Series",
    data: [
      { id: 20, title: "Tv Shows", icon: TVShowIcon, link: "tv_shows" },
      {
        id: 21,
        title: "Add TV Shows",
        icon: TVShowIcon,
      },
    ],
  },
  {
    id: 3,
    title: "Categories",
    data: [
      {
        id: 30,
        title: "Categories",
        icon: CategoriesIcon,
      },
    ],
  },
];
