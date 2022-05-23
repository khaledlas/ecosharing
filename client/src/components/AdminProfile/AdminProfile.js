import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteUser,
  getAllUsers,
  getCurrent,
} from "../../redux/Actions/userActions";
import UsersList from "./UsersList";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

const AdminProfile = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrent(), getAllUsers(), deleteUser());
  }, [dispatch]);

  const user = useSelector((state) => state.userReducer.user);

  return (
    <div>
      <Navbar />
      <div>
        <Link to={"/tous-les-quidproquos"}>
          <Button variant="outlined" startIcon={<EditIcon />}>
            Voir tous les quidproquos
          </Button>
        </Link>
      </div>
      <h1>Liste des utilisateurs {user && user._id}</h1>
      <UsersList></UsersList>
    </div>
  );
};

export default AdminProfile;
