import React, { useState, useEffect } from "react";
import Spinner from "../../utils/spinner";
import Pagination from "../../components/pagincation";
import Table from "../../components/customerTable";
import { customerService } from "../../services/customerService";

export default function CustomerList() {
  const [isLoading, setLoading] = useState(true);
  const [rowData, setRowData] = useState([]);
  const [numberPerPage, setNumberPerPage] = useState(5);
  const [customerTotal, setCustomerTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const setPagechange = (pageId) => {
    console.log("pageId:", pageId);
    setCurrentPage(pageId);
  };

  useEffect(() => {
    customerService.getAllcustomers().then((res) => {
      setCustomerTotal(res.data.allCustomers);
    });
  }, []);

  useEffect(() => {
    customerService.getByPage(currentPage, numberPerPage).then((res) => {
      setRowData(res.data.pageCustomers);
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
        total={customerTotal}
        pageChange={setPagechange}
      />
    </>
  );
}
