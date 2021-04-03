import React, { useState, useEffect } from "react";
import Spinner from "../../utils/spinner";
import Pagination from "../../components/pagincation";
import Table from "../../components/table";
import { productService } from "../../services/productService";

export default function ProductList() {
  const [isLoading, setLoading] = useState(true);
  const [rowData, setRowData] = useState([]);
  const [numberPerPage, setNumberPerPage] = useState(5);
  const [productTotal, setProductTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const setPagechange = (pageId) => {
    console.log("pageId:", pageId);
    setCurrentPage(pageId);
  };

  useEffect(() => {
    productService.getTotal().then((res) => {
      setProductTotal(res.data.allProducts);
    });
  }, []);

  useEffect(() => {
    productService.getByPage(currentPage, numberPerPage).then((res) => {
      setRowData(res.data.pageProducts);
      setLoading(false);
    });
  }, [currentPage]);
  return isLoading ? (
    <div className="flex w-screen h-auto justify-center items-center">
      <Spinner />
    </div>
  ) : (
    <>
      <Table
        rowData={rowData}
        currentPage={currentPage - 1}
        numberPerPage={numberPerPage}
      />
      <Pagination
        numberPerPage={numberPerPage}
        total={productTotal}
        pageChange={setPagechange}
      />
    </>
  );
}
