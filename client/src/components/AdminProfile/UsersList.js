import React, { useEffect } from "react";
import "./UserList.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getAllUsers } from "../../redux/Actions/userActions";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import dateFormat from "dateformat";

const UsersList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers(), deleteUser());
  }, [dispatch]);

  const user = useSelector((state) => state.userReducer.user);
  const allUsers = useSelector((state) => state.userReducer.allUsers);

  return (
    <div className="table">
      <TableContainer
        component={Paper}
        sx={{
          width: "max-content",
        }}
      >
        <Table aria-label="simple table" stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Prénom</TableCell>
              <TableCell align="center">Nom</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Date de naissance</TableCell>
              <TableCell align="center">Sexe</TableCell>
              <TableCell align="center">Administrateur ?</TableCell>
              <TableCell align="center">Supprimer un utilisateur</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allUsers.map((user) => (
              <TableRow key={user && user._id}>
                <TableCell component="th" scope="row">
                  {user && user.firstname}
                </TableCell>
                <TableCell align="center">{user && user.lastname}</TableCell>
                <TableCell align="center">{user && user.email}</TableCell>
                <TableCell align="center">
                  {dateFormat(user && user.birthdate, "dd/mm/yyyy")}
                </TableCell>
                <TableCell align="center">{user && user.gender}</TableCell>

                <TableCell align="center">
                  {user && user.isAdmin === true ? (
                    <strong>Admin</strong>
                  ) : (
                    "non"
                  )}
                </TableCell>
                <TableCell align="right">
                  <DeleteIcon
                    onClick={() => {
                      if (
                        window.confirm(
                          "Voulez-vous supprimer cet utilisateur ?"
                        )
                      ) {
                        dispatch(deleteUser(user._id));
                      }
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default UsersList;
