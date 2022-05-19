export const maskDate = (date: string) => {
  return date
    .replace(/\D/g, "") // remove any character without number
    .replace(/(\d{2})(\d)/, "$1/$2") // captures 2 groups of number the first of 2, after capturing the first group it adds a"/" before the second group of number
    .replace(/(\d{2})(\d)/, "$1/$2")
    .replace(/(\/\d{2})\d+?$/, "$1");
};

const mask = (data: string, type: string) => {
  /* eslint-disable */
  switch (type) {
    case "date":
      return maskDate(data);
    default:
      return data;
  }
  /* eslint-enable */
};

export default mask;
