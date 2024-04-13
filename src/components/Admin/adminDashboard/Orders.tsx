import { Fragment, useState, useEffect } from "react";
import { collection, getFirestore } from "firebase/firestore";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";
import { db } from "../../../firebase.config";
import { getDocs } from "firebase/firestore/lite";

export default function Orders() {
  const [rows, setRows] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const bookingCol = collection(db, "booking");
        const bookingSnapshot = await getDocs(bookingCol);
        const bookingData = bookingSnapshot.docs.map((doc) => doc.data()); // Extract data from query snapshot
        setRows(bookingData); // Update state with the retrieved data
        console.log(bookingData);
      } catch (error) {
        console.error("Error fetching orders: ", error);
      }
    };

    fetchData(); // Call the fetchData function when the component mounts
  }, []); // Empty dependency array to execute the effect only once

  return (
    <Fragment>
      <Title>Recent Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">Package</TableCell>
            <TableCell align="right">Place</TableCell>
            <TableCell align="right">From</TableCell>
            <TableCell align="right">Pax</TableCell>
            <TableCell align="right">Transportation</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row: any, index: any) => (
            <TableRow key={index}>
              <TableCell>{row.Name}</TableCell>
              <TableCell align="right">{row.Address}</TableCell>
              <TableCell align="right">{row.Email}</TableCell>
              <TableCell align="right">{row.Phone}</TableCell>
              <TableCell align="right">{row.Package}</TableCell>
              <TableCell align="right">{row.Place}</TableCell>
              <TableCell align="right">{row.From}</TableCell>
              <TableCell align="right">{row.Pax}</TableCell>
              <TableCell align="right">{row.Transportation}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link
        color="primary"
        href="#"
        onClick={() => {
          console.log("clicked");
        }}
        sx={{ mt: 3 }}
      >
        See more orders
      </Link>
    </Fragment>
  );
}
