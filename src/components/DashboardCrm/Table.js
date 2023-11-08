import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(
  Address,
  city,
  Status,
  DataAdded,
  SaleType,
  EstimatedMarketValue
) {
  return { Address, city, Status, DataAdded, SaleType, EstimatedMarketValue };
}
const rows = [
  createData("Totals", "", "", "", "", "Rs. 123456789"),
  createData(
    "Property name/Address",
    "Bathinda",
    "Punjab",
    "1 Jan 2023",
    "Sell",
    "Rs. 123456789"
  ),

  createData(
    "Property name/Address",
    "Gurugram",
    "Haryana",
    "1 Jan 2023",
    "Rent",
    "Rs. 123456789"
  ),
  createData(
    "Property name/Address",
    "Jaipur",
    "Rajasthan",
    "1 Jan 2023",
    "Lease",
    "Rs. 123456789"
  ),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper} style={{ marginTop: "-1vh" }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell
              style={{
                color: "#0D2855",
                fontSize: "17px",
                fontFamily: "Helvetica Neue",
                fontWeight: "700",
                lineHeight: "24px",
              }}
            >
              Address
            </TableCell>
            <TableCell
              style={{
                color: "#0D2855",
                fontSize: "17px",
                fontFamily: "Helvetica Neue",
                fontWeight: "700",
                lineHeight: "24px",
              }}
              align="right"
            >
              City
            </TableCell>
            <TableCell
              style={{
                color: "#0D2855",
                fontSize: "17px",
                fontFamily: "Helvetica Neue",
                fontWeight: "700",
                lineHeight: "24px",
              }}
              align="right"
            >
              Status
            </TableCell>
            <TableCell
              style={{
                color: "#0D2855",
                fontSize: "17px",
                fontFamily: "Helvetica Neue",
                fontWeight: "700",
                lineHeight: "24px",
              }}
              align="right"
            >
              Data added
            </TableCell>
            <TableCell
              style={{
                color: "#0D2855",
                fontSize: "17px",
                fontFamily: "Helvetica Neue",
                fontWeight: "700",
                lineHeight: "24px",
              }}
              align="right"
            >
              Sale Type
            </TableCell>
            <TableCell
              style={{
                color: "#0D2855",
                fontSize: "17px",
                fontFamily: "Helvetica Neue",
                fontWeight: "700",
                lineHeight: "24px",
              }}
              align="right"
            >
              Estimated market value
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                style={{
                  color: "#0D2855",
                  fontSize: "17px",
                  fontFamily: "Helvetica Neue",
                  fontWeight: "700",
                  lineHeight: "24px",
                }}
                component="th"
                scope="row"
              >
                {row.Address}
              </TableCell>
              <TableCell
                style={{
                  color: "#0D2855",
                  fontSize: "17px",
                  fontFamily: "Helvetica Neue",
                  fontWeight: "700",
                  lineHeight: "24px",
                }}
                align="right"
              >
                {row.city}
              </TableCell>
              <TableCell
                style={{
                  color: "#0D2855",
                  fontSize: "17px",
                  fontFamily: "Helvetica Neue",
                  fontWeight: "700",
                  lineHeight: "24px",
                }}
                align="right"
              >
                {row.Status}
              </TableCell>
              <TableCell
                style={{
                  color: "#0D2855",
                  fontSize: "17px",
                  fontFamily: "Helvetica Neue",
                  fontWeight: "700",
                  lineHeight: "24px",
                }}
                align="right"
              >
                {row.DataAdded}
              </TableCell>
              <TableCell
                style={{
                  color: "#0D2855",
                  fontSize: "17px",
                  fontFamily: "Helvetica Neue",
                  fontWeight: "700",
                  lineHeight: "24px",
                }}
                align="right"
              >
                {row.SaleType}
              </TableCell>
              <TableCell
                style={{
                  color: " #27AE60",
                  fontSize: "14px",
                  fontFamily: "Poppins",
                  fontWeight: "600",
                  lineHeight: "16px",
                }}
                align="right"
              >
                {row.EstimatedMarketValue}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
