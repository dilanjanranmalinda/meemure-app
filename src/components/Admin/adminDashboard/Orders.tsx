import { Fragment, useState, useEffect } from "react";
import {
  collection,
  query,
  limit,
  startAfter,
  getDocs,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";
import { db } from "../../../firebase.config";
import {
  Box,
  TablePagination,
  Select,
  MenuItem,
  IconButton,
} from "@mui/material";
import { MdDelete } from "react-icons/md";

const baseUrl = process.env.REACT_APP_BACKEND_URL;

export default function Orders() {
  const [rows, setRows] = useState<any[]>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [lastDoc, setLastDoc] = useState<any>(null);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const fetchData = async (
    reset = false,
    rowsPerPageOverride = rowsPerPage
  ) => {
    try {
      const bookingCol = collection(db, "booking");
      const q = query(
        bookingCol,
        limit(rowsPerPageOverride),
        ...(reset ? [] : [startAfter(lastDoc)])
      );
      const bookingSnapshot = await getDocs(q);

      const bookingData = bookingSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      if (reset) {
        setRows(bookingData);
      } else {
        setRows((prevRows) => [...prevRows, ...bookingData]);
      }
      setLastDoc(bookingSnapshot.docs[bookingSnapshot.docs.length - 1]);
      setHasMore(bookingSnapshot.docs.length === rowsPerPageOverride);
    } catch (error) {
      console.error("Error fetching orders: ", error);
    }
  };

  useEffect(() => {
    fetchData(true); // Fetch initial data on mount
  }, []);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
    if (newPage > page) {
      fetchData();
    }
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newRowsPerPage = parseInt(event.target.value, 10);
    setRowsPerPage(newRowsPerPage);
    setPage(0);
    setLastDoc(null); // Reset lastDoc to fetch from the beginning
    fetchData(true, newRowsPerPage); // Reset and fetch new data based on the new rows per page
  };

  const handleDelete = async (id: string) => {
    try {
      const bookingDoc = doc(db, "booking", id);
      await deleteDoc(bookingDoc);
      fetchData(true);
    } catch (error) {
      console.error("Error deleting booking: ", error);
    }
  };

  const handleStatusChange = async (
    event: React.ChangeEvent<{ value: unknown }>,
    id: string,
    rowData: any
  ) => {
    setLoading(true);
    const newStatus = event.target.value as string;
    try {
      const bookingDoc = doc(db, "booking", id);
      await updateDoc(bookingDoc, { status: newStatus });

      const sendData = {
        name: rowData?.name,
        email: rowData?.email,
        referenceNumber: id,
        status: newStatus,
      };

      const response = await fetch(baseUrl + "/send-email-status", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sendData),
      });

      const result = await response.json();
      console.log(result);
      fetchData(true);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error updating status: ", error);
    }
    setLoading(false);
  };

  return (
    <Fragment>
      <Title>Recent Orders</Title>
      <Box sx={{ overflowX: "auto" }}>
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
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row: any, index: any) => (
                <TableRow key={index}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell align="right">{row.address}</TableCell>
                  <TableCell align="right">{row.email}</TableCell>
                  <TableCell align="right">{row.phone}</TableCell>
                  <TableCell align="right">
                    {row.package === 0
                      ? "One Day"
                      : row.package === 1
                      ? "Two Days"
                      : "Three Days"}
                  </TableCell>
                  <TableCell align="right">{row.place}</TableCell>
                  <TableCell align="right">{row.from}</TableCell>
                  <TableCell align="right">{row.pax}</TableCell>
                  <TableCell align="right">
                    {row.transportation ? "Yes" : "No"}
                  </TableCell>
                  <TableCell align="right">
                    <Select
                      disabled={loading}
                      value={row.status || "processing"}
                      onChange={(event: any) =>
                        handleStatusChange(event, row.id, row)
                      }
                    >
                      <MenuItem value="approved">Approved</MenuItem>
                      <MenuItem value="processing">Processing</MenuItem>
                      <MenuItem value="rejected">Rejected</MenuItem>
                    </Select>
                  </TableCell>
                  <TableCell align="right">
                    <IconButton
                      onClick={() => handleDelete(row.id)}
                      aria-label="delete"
                      color="error"
                    >
                      <MdDelete />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </Box>
      <TablePagination
        component="div"
        count={rows.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        nextIconButtonProps={{ disabled: !hasMore }}
      />
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
