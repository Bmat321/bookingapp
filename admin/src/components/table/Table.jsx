import React from "react";
import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      id: 1475245,
      product: "My Product",
      img: "https://m.Media-Amazon.com/images/I/71Es7uC7RQL._AC_SL1500_.jpg",
      customer: "John Smith",
      date: "March 1",
      amount: 758,
      method: "Cash on delivery",
      status: "Approved",
    },
    {
      id: 1752455,
      product: "My Product",
      img: "https://m.Media-Amazon.com/images/I/71Es7uC7RQL._AC_SL1500_.jpg",
      customer: "Micheal Jacob",
      date: "March 1",
      amount: 1200,
      method: "Online Payment",
      status: "Pending",
    },
    {
      id: 2564545,
      product: "My Product",
      img: "https://m.Media-Amazon.com/images/I/71Es7uC7RQL._AC_SL1500_.jpg",
      customer: "Rachel Brind",
      date: "March 1",
      amount: 625,
      method: "Cash on delivery",
      status: "Approved",
    },
    {
      id: 8452753,
      product: "My Product",
      img: "https://m.Media-Amazon.com/images/I/71Es7uC7RQL._AC_SL1500_.jpg",
      customer: "John Smith",
      date: "March 1",
      amount: 985,
      method: "Online Payment",
      status: "Pending",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="imgWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
