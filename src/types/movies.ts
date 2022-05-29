import { MoviesModel } from "../models/movies";

export interface MoviesProps {
  id: number;
  title: string;
  data: MoviesModel[];
}
