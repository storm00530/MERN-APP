import http from "../http-common";

const getTotal = () => {
  return http.get("products/total");
};
const getByPage = (pageId, numberPerPage) => {
  return http.get("products/getByPage/" + pageId + "/" + numberPerPage);
};
export const productService = {
  getTotal,
  getByPage,
};
