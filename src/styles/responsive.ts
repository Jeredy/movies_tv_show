export const width = window.innerWidth < 768 ? 800 : window.innerWidth;
const widthRatio = width / 800;

const responsive = (m = 0) => {
  return m * widthRatio;
};

export const w = (...args: number[]): string => {
  return args.map((m) => `${responsive(m)}px`).join(" ");
};

export const ww = (m: number): number => {
  return responsive(m);
};
