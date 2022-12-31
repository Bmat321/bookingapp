import React, { useEffect, useState } from "react";
import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link, useLocation } from "react-router-dom";
import {
  collection,
  getDocs,
  doc,
  deleteDoc,
  onSnapshot,
} from "firebase/firestore";
// import { db } from "../../firebase";
import useFetch from "../../hooks/useFetch";
import axios from "axios";

const Datatable = ({ columns }) => {
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const [list, setList] = useState("");

  const { data, isLoading, error } = useFetch(`/${path}`);

  useEffect(() => {
    setList(data);
  }, [data]);

  // useEffect(() => {
  //   // LISTENING (REAL TIME DATA)
  //   const unsub = onSnapshot(
  //     collection(db, "users"),
  //     (snapshot) => {
  //       let list = [];
  //       snapshot.docs.forEach((doc) => {
  //         list.push({ id: doc.id, ...doc.data() });
  //       });
  //       // setData(list);
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );

  //   return () => {
  //     unsub();
  //   };
  // }, []);

  const handleDelete = async (id) => {
    try {
      // await deleteDoc(doc(db, "users", id));
      await axios.delete(`/${path}/${id}`);
      setList(list.filter((item) => item._id !== id));
    } catch (error) {
      console.log(error);
    }
  };
  const actionColumn = [
    {
      field: "action",
      headerName: "ACTION",
      width: 180,
      renderCell: (params) => {
        return (
          <div className="actionCell">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row._id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        {path}
        <Link
          to={`/${path}/new`}
          style={{ textDecoration: "none" }}
          className="link"
        >
          Add New
        </Link>
      </div>
      <DataGrid
        className="dataGrid"
        rows={list}
        columns={columns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        getRowId={(row) => row._id}
      />
    </div>
  );
};

export default Datatable;
