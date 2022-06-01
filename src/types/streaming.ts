import { StreamingModel } from "../models/streaming";

export interface MoviesProps {
  title: string;
  data: StreamingModel[];
}

export interface StreamingAddProps {
  route: string;
}
