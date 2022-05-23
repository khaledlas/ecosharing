import React, { useEffect } from "react";
import "./AvatarUpload.css";
import Avatar from "react-avatar-edit";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCurrent,
  register,
  update_picture,
  update_user,
} from "../../redux/Actions/userActions";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Input } from "@mui/material";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";

function AvatarUpload() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.userReducer.user);
  const [preview, setPreview] = useState(null);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    profilePicture: (user && user.profilePicture) || "",
  });

  const handleConfirm = (e) => {
    e.preventDefault();
    const data = new FormData();

    data.append("profilePicture", formData.profilePicture);

    dispatch(update_picture(user._id, data), navigate("/profile"));
  };

  const { id } = useParams();
  useEffect(() => {
    dispatch(getCurrent());
  }, []);

  function onClose() {
    setPreview(null);
  }
  function onCrop(pv) {
    setPreview(pv);
  }

  return (
    <div>
      <Navbar></Navbar>
      <div className="parcourir">
        {/* <Avatar
        width={600}
        height={300}
        onCrop={onCrop}
        onClose={onClose}
        src={null}
      />
      <br />
      {preview && (
        <>
          <img src={preview} alt="Preview" />
          <a href={preview} download="avatar">
            Télécharger l'avatar
          </a>
        </>
      )} */}
        <Input
          type="file"
          onChange={(e) =>
            setFormData({ ...formData, profilePicture: e.target.files[0] })
          }
        />
        <Button
          type="submit"
          // disabled={!this.state.preview ? true : false}

          variant="contained"
          color="primary"
          onClick={handleConfirm}
        >
          UPLOAD
        </Button>
      </div>
      <div className="accueil">
        <Link to={"/profile"}>
          <Button variant="outlined">Retourner à la page d'accueil</Button>
        </Link>
      </div>
    </div>
  );
}
export default AvatarUpload;
