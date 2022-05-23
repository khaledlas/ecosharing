import React, { useEffect, useState } from "react";
import dateFormat from "dateformat";
import { Avatar, Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";
import CakeIcon from "@mui/icons-material/Cake";
import { Link, useParams } from "react-router-dom";
import { getCurrent } from "../../redux/Actions/userActions";
import QuidproquosList from "../Quidproquos/QuidproquosList";
import {
  get_qpqs,
  update_qpq,
  user_qpqs,
} from "../../redux/Actions/qpqActions";
import AvatarUpload from "./AvatarUpload";
import { Spinner } from "react-bootstrap";
import { LOADING } from "../../redux/actionTypes/userActionTypes";
import CreateQuidproquo from "../Quidproquos/CreateQuidproquo";
import("./Profile.css");

const Profile = () => {
  // const [isLoading, setIsLoading] = useState(false);
  const user = useSelector((state) => state.userReducer.user);
  const quidproquos = useSelector((state) => state.qpqReducer.quidproquos);
  const loading = useSelector((state) => state.userReducer.load);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrent());
  }, [dispatch]);

  const [profilePicture, setProfilePicture] = useState(
    user && user.profilePicture
  );

  return (
    <div className="post-container">
      <div>
        <div>
          <Navbar></Navbar>
          <div className="avatar-fullname">
            <Avatar
              className="avatar"
              src={
                user && user.profilePicture
                  ? `/uploads/${user && user.profilePicture}`
                  : ""
              }
              sx={{ width: 100, height: 100 }}
            />
            <div>
              <h1>
                {user && user.firstname} {user && user.lastname}
              </h1>
            </div>
            <div>
              <div>
                <CakeIcon />
                {dateFormat(user && user.birthdate, "dd/mm/yyyy")}
              </div>
              {/* <div>
              <CakeIcon />
              Abonnés
              {user && user.followers}
            </div>
            <div>
              <CakeIcon />
              Abonnements
              {user && user.followings}
            </div> */}
            </div>
          </div>
        </div>

        <div>
          {/* <Link to={"/addquidproquo"}>
            <Button
              className="addquidproquo"
              variant="outlined"
              startIcon={<EditIcon />}
            >
              Create quidproquo
            </Button>
          </Link> */}
          <CreateQuidproquo></CreateQuidproquo>
        </div>

        <QuidproquosList></QuidproquosList>
      </div>
    </div>
  );
};

export default Profile;
